export class CreateOrderDto {
  userId: number;
  orderDetails: {
    productId: number;
    quantity: number;
  }[];
}
