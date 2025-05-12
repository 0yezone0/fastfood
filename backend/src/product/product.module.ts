// src/product/product.module.ts
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CategoryController } from './category.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductController, CategoryController],
  providers: [ProductService],
})
export class ProductModule {}
