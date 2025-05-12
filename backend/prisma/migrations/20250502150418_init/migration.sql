-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderHeader" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "totalAmount" INTEGER NOT NULL,

    CONSTRAINT "OrderHeader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderDetail" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" INTEGER NOT NULL,
    "lineTotal" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "OrderDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "OrderHeader" ADD CONSTRAINT "OrderHeader_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "OrderHeader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
-- Seed Account
INSERT INTO "Account" ("email", "password") VALUES
('admin@gmail.com', 'admin');

-- Seed ProductCategory
INSERT INTO "ProductCategory" ("id", "name") VALUES
(1, 'Cupcake'),
(2, 'Sea Food'),
(3, 'Juice'),
(4, 'Nước Giải Khát'),
(5, 'Orange Juice'),
(6, 'Combo Siêu Tiết Kiệm');

-- Seed Product
INSERT INTO "Product" ("name", "price", "image", "categoryId") VALUES
-- Cupcake (1)
('Chocolate Cupcake', 18000, '/cupcake/chocolate-cupcake.png', 1),
('Vanilla Cupcake', 17000, '/cupcake/vanilla-cupcake.png', 1),
('Red Velvet Cupcake', 20000, '/cupcake/red-velvet-cupcake.png', 1),
('Strawberry Cupcake', 19000, '/cupcake/strawberry-cupcake.png', 1),
('Lemon Cupcake', 16000, '/cupcake/lemon-cupcake.png', 1),
('Matcha Cupcake', 19000, '/cupcake/matcha-cupcake.png', 1),
('Caramel Cupcake', 20000, '/cupcake/caramel-cupcake.png', 1),
('Oreo Cupcake', 21000, '/cupcake/oreo-cupcake.png', 1),
('Banana Cupcake', 15000, '/cupcake/banana-cupcake.png', 1),
('Blueberry Cupcake', 20000, '/cupcake/blueberry-cupcake.png', 1),


-- Sea Food (2)
('Sushi Roll', 150000, '/seafood/sushi-roll.png', 2),
('Grilled Shrimp', 130000, '/seafood/grilled-shrimp.png', 2),
('Grilled Lobster', 250000, '/seafood/grilled-lobster.png', 2),
('Salmon Fillet', 200000, '/seafood/salmon-fillet.png', 2),
('Seafood Paella', 180000, '/seafood/seafood-paella.png', 2),
('Tuna Tartare', 160000, '/seafood/tuna-tartare.png', 2),
('Crab Cakes', 140000, '/seafood/crab-cakes.png', 2),
('Fish Tacos', 120000, '/seafood/fish-tacos.png', 2),
('Octopus Salad', 180000, '/seafood/octopus-salad.png', 2),
('Clam Chowder', 80000, '/seafood/clam-chowder.png', 2),

-- Juice (3)

('Apple Juice', 25000, '/juice/apple-juice.png', 3),
('Pineapple Juice', 26000, '/juice/pineapple-juice.png', 3),
('Watermelon Juice', 24000, '/juice/watermelon-juice.png', 3),
('Grape Juice', 28000, '/juice/grape-juice.png', 3),
('Guava Juice', 22000, '/juice/guava-juice.png', 3),
('Cantaloupe Juice', 23000, '/juice/cantaloupe-juice.png', 3),
('Mixed Berry Juice', 30000, '/juice/mixed-berry-juice.png', 3),
('Beetroot Juice', 27000, '/juice/beetroot-juice.png', 3),
('Cucumber Juice', 20000, '/juice/cucumber-juice.png', 3),
('Dragonfruit Juice', 29000, '/juice/dragonfruit-juice.png', 3),


-- Nước Giải Khát (4)
('Pepsi Can', 12000, '/nuocgiaikhat/pepsi-can.png', 4),
('Coca-Cola Can', 12000, '/nuocgiaikhat/coca-cola-can.png', 4),
('Sprite Can', 12000, '/nuocgiaikhat/sprite-can.png', 4),
('7Up Can', 12000, '/nuocgiaikhat/7up-can.png', 4),
('Fanta Can', 12000, '/nuocgiaikhat/fanta-can.png', 4),
('Energy Drink', 15000, '/nuocgiaikhat/energy-drink.png', 4),
('Iced Tea', 10000, '/nuocgiaikhat/iced-tea.png', 4),
('Lemonade', 15000, '/nuocgiaikhat/lemonade.png', 4),
('Mineral Water', 5000, '/nuocgiaikhat/mineral-water.png', 4),
('Coconut Water', 20000, '/nuocgiaikhat/coconut-water.png', 4),

-- Orange Juice (5)
('Fresh Orange Juice', 25000, '/orangejuice/fresh-orange-juice.png', 5),
('Mango Orange Juice', 30000, '/orangejuice/mango-orange-juice.png', 5),
('Citrus Punch', 27000, '/orangejuice/citrus-punch.png', 5),
('Ginger Orange Juice', 35000, '/orangejuice/ginger-orange-juice.png', 5),
('Orange Carrot Juice', 30000, '/orangejuice/orange-carrot-juice.png', 5),
('Tropical Juice Mix', 30000, '/orangejuice/tropical-juice-mix.png', 5),
('Citrus Detox Juice', 28000, '/orangejuice/citrus-detox-juice.png', 5),
('Orange Lemonade', 25000, '/orangejuice/orange-lemonade.png', 5),
('Orange Kiwi Juice', 32000, '/orangejuice/orange-kiwi-juice.png', 5),
('Papaya Orange Juice', 28000, '/orangejuice/papaya-orange-juice.png', 5),

-- Combo (6)
('Family Combo', 500000, '/combo/family-combo.png', 6),
('Mega Combo', 600000, '/combo/mega-combo.png', 6),
('Combo 2 for 1', 350000, '/combo/combo-2-for-1.png', 6),
('Seafood Lovers Combo', 700000, '/combo/seafood-lovers-combo.png', 6),
('Vegetarian Combo', 350000, '/combo/vegetarian-combo.png', 6),
('Lunch Combo', 450000, '/combo/lunch-combo.png', 6),
('Dinner Combo', 550000, '/combo/dinner-combo.png', 6),
('Deluxe Family Meal', 800000, '/combo/deluxe-family-meal.png', 6),
('Gourmet Combo', 600000, '/combo/gourmet-combo.png', 6),
('Student Combo', 250000, '/combo/student-combo.png', 6);
