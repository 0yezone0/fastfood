// src/product/category.controller.ts
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('product-categories')
export class CategoryController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getAllCategories() {
    return this.prisma.productCategory.findMany();
  }
}
