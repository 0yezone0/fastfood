// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   // Thêm sản phẩm vào bảng Product
//   await prisma.product.createMany({
//     data: [
//         // Sea Food
//         { name: 'Sushi Roll', price: 150000, image: '/seafood/sushi-roll.png', categoryId: 2 },
//         { name: 'Grilled Shrimp', price: 130000, image: '/seafood/grilled-shrimp.png', categoryId: 2 },
//         { name: 'Grilled Lobster', price: 250000, image: '/seafood/grilled-lobster.png', categoryId: 2 },
//         { name: 'Salmon Fillet', price: 200000, image: '/seafood/salmon-fillet.png', categoryId: 2 },
//         { name: 'Seafood Paella', price: 180000, image: '/seafood/seafood-paella.png', categoryId: 2 },
//         { name: 'Tuna Tartare', price: 160000, image: '/seafood/tuna-tartare.png', categoryId: 2 },
//         { name: 'Crab Cakes', price: 140000, image: '/seafood/crab-cakes.png', categoryId: 2 },
//         { name: 'Fish Tacos', price: 120000, image: '/seafood/fish-tacos.png', categoryId: 2 },
//         { name: 'Octopus Salad', price: 180000, image: '/seafood/octopus-salad.png', categoryId: 2 },
//         { name: 'Clam Chowder', price: 80000, image: '/seafood/clam-chowder.png', categoryId: 2 },
  
//         // Nước Giải Khát
//         { name: 'Pepsi Can', price: 12000, image: '/nuocgiaikhat/pepsi-can.png', categoryId: 4 },
//         { name: 'Coca-Cola Can', price: 12000, image: '/nuocgiaikhat/coca-cola-can.png', categoryId: 4 },
//         { name: 'Sprite Can', price: 12000, image: '/nuocgiaikhat/sprite-can.png', categoryId: 4 },
//         { name: '7Up Can', price: 12000, image: '/nuocgiaikhat/7up-can.png', categoryId: 4 },
//         { name: 'Fanta Can', price: 12000, image: '/nuocgiaikhat/fanta-can.png', categoryId: 4 },
//         { name: 'Energy Drink', price: 15000, image: '/nuocgiaikhat/energy-drink.png', categoryId: 4 },
//         { name: 'Iced Tea', price: 10000, image: '/nuocgiaikhat/iced-tea.png', categoryId: 4 },
//         { name: 'Lemonade', price: 15000, image: '/nuocgiaikhat/lemonade.png', categoryId: 4 },
//         { name: 'Mineral Water', price: 5000, image: '/nuocgiaikhat/mineral-water.png', categoryId: 4 },
//         { name: 'Coconut Water', price: 20000, image: '/nuocgiaikhat/coconut-water.png', categoryId: 4 },
  
//         // Orange Juice
//         { name: 'Fresh Orange Juice', price: 25000, image: '/orangejuice/fresh-orange-juice.png', categoryId: 5 },
//         { name: 'Mango Orange Juice', price: 30000, image: '/orangejuice/mango-orange-juice.png', categoryId: 5 },
//         { name: 'Citrus Punch', price: 27000, image: '/orangejuice/citrus-punch.png', categoryId: 5 },
//         { name: 'Ginger Orange Juice', price: 35000, image: '/orangejuice/ginger-orange-juice.png', categoryId: 5 },
//         { name: 'Orange Carrot Juice', price: 30000, image: '/orangejuice/orange-carrot-juice.png', categoryId: 5 },
//         { name: 'Tropical Juice Mix', price: 30000, image: '/orangejuice/tropical-juice-mix.png', categoryId: 5 },
//         { name: 'Citrus Detox Juice', price: 28000, image: '/orangejuice/citrus-detox-juice.png', categoryId: 5 },
//         { name: 'Orange Lemonade', price: 25000, image: '/orangejuice/orange-lemonade.png', categoryId: 5 },
//         { name: 'Orange Kiwi Juice', price: 32000, image: '/orangejuice/orange-kiwi-juice.png', categoryId: 5 },
//         { name: 'Papaya Orange Juice', price: 28000, image: '/orangejuice/papaya-orange-juice.png', categoryId: 5 },
  
//         // Combo Siêu Tiết Kiệm
//         { name: 'Family Combo', price: 500000, image: '/combo/family-combo.png', categoryId: 6 },
//         { name: 'Mega Combo', price: 600000, image: '/combo/mega-combo.png', categoryId: 6 },
//         { name: 'Combo 2 for 1', price: 350000, image: '/combo/combo-2-for-1.png', categoryId: 6 },
//         { name: 'Seafood Lovers Combo', price: 700000, image: '/combo/seafood-lovers-combo.png', categoryId: 6 },
//         { name: 'Vegetarian Combo', price: 350000, image: '/combo/vegetarian-combo.png', categoryId: 6 },
//         { name: 'Lunch Combo', price: 450000, image: '/combo/lunch-combo.png', categoryId: 6 },
//         { name: 'Dinner Combo', price: 550000, image: '/combo/dinner-combo.png', categoryId: 6 },
//         { name: 'Deluxe Family Meal', price: 800000, image: '/combo/deluxe-family-meal.png', categoryId: 6 },
//         { name: 'Gourmet Combo', price: 600000, image: '/combo/gourmet-combo.png', categoryId: 6 },
//         { name: 'Student Combo', price: 250000, image: '/combo/student-combo.png', categoryId: 6 },
//       ],
//     });

//   console.log('Data seeded');
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Thêm sản phẩm Juice
  await prisma.product.createMany({
    data: [
      { name: 'Apple Juice', price: 25000, image: '/juice/apple-juice.png', categoryId: 5 },
      { name: 'Grape Juice', price: 27000, image: '/juice/grape-juice.png', categoryId: 5 },
      { name: 'Carrot Juice', price: 22000, image: '/juice/carrot-juice.png', categoryId: 5 },
      { name: 'Citrus Juice', price: 28000, image: '/juice/citrus-juice.png', categoryId: 5 },
      { name: 'Lemon Juice', price: 20000, image: '/juice/lemon-juice.png', categoryId: 5 },
      { name: 'Mango Juice', price: 35000, image: '/juice/mango-juice.png', categoryId: 5 },
      { name: 'Strawberry Juice', price: 30000, image: '/juice/strawberry-juice.png', categoryId: 5 },
    ],
  });

  console.log('Juice and Cupcake products seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
