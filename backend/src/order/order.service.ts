import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(order: {
    userId: number;
    orderDetails: { productId: number; quantity: number }[];
  }) {
    const orderHeader = await this.prisma.orderHeader.create({
      data: {
        userId: order.userId,
        totalAmount: 0,
      },
    });

    let total = 0;

    const updatedDetails = await Promise.all(
      order.orderDetails.map(async (detail) => {
        const product = await this.prisma.product.findUnique({
          where: { id: detail.productId },
        });

        if (!product) {
          throw new Error(`Sản phẩm với ID ${detail.productId} không tồn tại`);
        }

        const unitPrice = product.price;
        const lineTotal = unitPrice * detail.quantity;
        total += lineTotal;

        const orderDetail = await this.prisma.orderDetail.create({
          data: {
            productId: detail.productId,
            quantity: detail.quantity,
            unitPrice,
            lineTotal,
            orderId: orderHeader.id,
          },
        });

        return orderDetail;
      }),
    );

    await this.prisma.orderHeader.update({
      where: { id: orderHeader.id },
      data: { totalAmount: total },
    });

    return {
      order: orderHeader,
      details: updatedDetails,
      totalAmount: total,
    };
  }

  async getAllOrders() {
  return this.prisma.orderHeader.findMany({
    include: {
      user: true,
      orderDetails: {
        include: { product: true },
      },
    },
  });
  }
}
