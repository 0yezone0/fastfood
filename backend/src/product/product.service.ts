import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.product.findMany({
      include: { category: true }, // nếu muốn lấy cả category
    });
  }
}
