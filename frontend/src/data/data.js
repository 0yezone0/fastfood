export const categories = [
    { name: 'Burger', image: '/hamburger.png' },
    { name: 'Gà Rán & Gà Viên', image: '/ga.png' },
    { name: 'Món Ăn Kèm', image: '/seafood.png' },
    { name: 'Món Chính Khác', image: '/mon chinh khac.png' },
    { name: 'Nước Giải Khát', image: '/nuoc giai khat.png' },
    { name: 'Combo Siêu Tiết Kiệm', image: '/combo tiet kiem.png' },
  ];
  
export const products = [
    // Burger
    { id: 1, name: 'Buger Thịt Bò', price: 45000, image: '/burger/burger bo.png', category: 'Burger' },
    { id: 2, name: 'Burger Thịt Gà Giòn', price: 40000, image: '/burger/burger ga gion.png', category: 'Burger' },
    { id: 3, name: 'Burger Nấm', price: 30000, image: '/burger/burger nam.png', category: 'Burger' },
    { id: 4, name: 'Burger Thịt Lợn', price: 45000, image: '/burger/burger thit lon.png', category: 'Burger' },
    { id: 5, name: 'Burger Trứng Gà', price: 20000, image: '/burger/burger trung ga.png', category: 'Burger' },
    { id: 6, name: 'Burger Trứng & Thịt Xông Khói', price: 48000, image: '/burger/burger trung va thit xong khoi.png', category: 'Burger' },
    // Gà Rán & Gà Viên
    { id: 7, name: 'Gà Rán (2 miếng)', price: 38000, image: '/ga/ga 2 mieng.png', category: 'Gà Rán & Gà Viên' },
    { id: 8, name: 'Gà Rán (4 miếng)', price: 70000, image: '/ga/ga 4 mieng.png', category: 'Gà Rán & Gà Viên' },
    { id: 9, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Gà Rán & Gà Viên' },
    { id: 10, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Gà Rán & Gà Viên' },
    { id: 11, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Gà Rán & Gà Viên' },
    { id: 12, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Gà Rán & Gà Viên' },
    // Món Ăn Kèm
    { id: 13, name: 'Phô Mai Que (3 que)', price: 25000, image: '/mon an kem/pho mai que.png', category: 'Món Ăn Kèm' },
    { id: 14, name: 'Salad Trộn Mayonnaise', price: 20000, image: '/mon an kem/salad tron mayonnaise.png', category: 'Món Ăn Kèm' },
    { id: 15, name: 'Phô Mai Que (3 que)', price: 25000, image: '/mon an kem/pho mai que.png', category: 'Món Ăn Kèm' },
    { id: 16, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Ăn Kèm' },
    { id: 17, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Ăn Kèm' },
    { id: 18, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Ăn Kèm' },
    // Món Chính Khác
    { id: 19, name: 'Cơm Bò Sốt Teriyaki', price: 59000, image: '/mon chinh khac/com bo teriyaki.png', category: 'Món Chính Khác' },
    { id: 20, name: 'Grilled squid satay', price: 123000, image: '/seafood.png', category: 'Món Chính Khác' },
    { id: 21, name: 'Mì Ý Sốt Cà Chua', price: 39000, image: '/mon chinh khac/mi y sot ca chua.png', category: 'Món Chính Khác' },
    { id: 22, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Chính Khác' },
    { id: 23, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Chính Khác' },
    { id: 24, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Món Chính Khác' },
    // Nước Giải Khát
    { id: 25, name: 'Nước Ngọt Coca (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/coca.png', category: 'Nước Giải Khát' },
    { id: 26, name: 'Nước Ngọt Pepsi (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/pepsi.png', category: 'Nước Giải Khát' },
    { id: 27, name: 'Nước Ngọt 7 Up (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/7up.png', category: 'Nước Giải Khát' },
    { id: 28, name: 'Nước Ngọt Sprite (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/sprite.png', category: 'Nước Giải Khát' },
    { id: 29, name: 'Nước Ngọt Mirinda (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/mirinda.png', category: 'Nước Giải Khát' },
    { id: 30, name: 'Nước Tăng Lực Sting (Lon)', price: 15000, image: '/nuoc giai khat/nuoc ngot/sting.png', category: 'Nước Giải Khát' },
    // Combo Siêu Tiết Kiệm
    { id: 31, name: 'Combo 1: Burger Bò + Khoai Tây + Trà Tắc', price: 65000, image: '/combo tiet kiem/combo 1.png', category: 'Combo Siêu Tiết Kiệm' },
    { id: 32, name: 'Grilled squid satay', price: 123000, image: '/seafood.png', category: 'Combo Siêu Tiết Kiệm' },
    { id: 33, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
    { id: 34, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
    { id: 35, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
    { id: 36, name: 'Grilled squid satay', price: 123000, image: '/hamburger.png', category: 'Combo Siêu Tiết Kiệm' },
  ];