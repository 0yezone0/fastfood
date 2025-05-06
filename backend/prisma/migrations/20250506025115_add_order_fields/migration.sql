/*
  Warnings:

  - Added the required column `lineTotal` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `OrderHeader` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderDetail" ADD COLUMN     "lineTotal" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "unitPrice" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "OrderHeader" ADD COLUMN     "totalAmount" DOUBLE PRECISION NOT NULL;
