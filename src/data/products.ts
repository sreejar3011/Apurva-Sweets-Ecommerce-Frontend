export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  description: string;
  weights: string[];
  reviews: { user: string; rating: number; comment: string }[];
}

export const categories = [
  { name: "Sweets", slug: "sweets", image: "/images/kaju-katli.jpg" },
  { name: "Cakes", slug: "cakes", image: "/images/chocolate-cake.jpg" },
  { name: "Chaat", slug: "chaat", image: "/images/pani-puri.jpg" },
  { name: "Snacks", slug: "snacks", image: "/images/samosa.jpg" },
  { name: "Pastries", slug: "pastries", image: "/images/cream-pastry.jpg" },
  { name: "Savories", slug: "savories", image: "/images/namkeen.jpg" },
  { name: "Beverages", slug: "beverages", image: "/images/coffee.jpg" },
  { name: "Milkshakes", slug: "milkshakes", image: "/images/chocolate-milkshake.jpg" },
];

export const products: Product[] = [
  // ===== SWEETS =====
  { id: 1, name: "Kaju Katli", category: "sweets", price: 550, image: "/images/kaju-katli.jpg", rating: 4.8, description: "Premium cashew barfi with silver leaf", weights: ["250g", "500g", "1kg"], reviews: [{ user: "Priya", rating: 5, comment: "Best kaju katli ever! So fresh and melt-in-mouth." }, { user: "Rahul", rating: 5, comment: "Perfect for festivals. Amazing quality!" }] },
  { id: 2, name: "Gulab Jamun", category: "sweets", price: 350, image: "/images/gulab-jamun.jpg", rating: 4.7, description: "Soft and juicy, soaked in rose sugar syrup", weights: ["250g", "500g", "1kg"], reviews: [{ user: "Anita", rating: 5, comment: "Very tasty and fresh!" }, { user: "Vikram", rating: 4, comment: "Best sweets in town!" }] },
  { id: 3, name: "Rasgulla", category: "sweets", price: 300, image: "/images/rasgulla.jpg", rating: 4.6, description: "Bengali style spongy cottage cheese balls", weights: ["250g", "500g", "1kg"], reviews: [{ user: "Sneha", rating: 5, comment: "Perfectly soft and sweet!" }] },
  { id: 4, name: "Motichoor Ladoo", category: "sweets", price: 400, image: "/images/ladoo.jpg", rating: 4.5, description: "Traditional besan ladoo with cardamom flavor", weights: ["250g", "500g", "1kg"], reviews: [{ user: "Meera", rating: 5, comment: "Takes me back to childhood!" }] },
  { id: 5, name: "Soan Papdi", category: "sweets", price: 280, image: "/images/soan-papdi.jpg", rating: 4.3, description: "Flaky and melt-in-mouth Indian sweet", weights: ["250g", "500g"], reviews: [{ user: "Amit", rating: 4, comment: "Great festive gift!" }] },
  { id: 6, name: "Peda", category: "sweets", price: 320, image: "/images/peda.jpg", rating: 4.4, description: "Rich milk peda with saffron", weights: ["250g", "500g", "1kg"], reviews: [{ user: "Kavita", rating: 5, comment: "Authentic taste!" }] },
  { id: 14, name: "Barfi Mix", category: "sweets", price: 480, image: "/images/barfi-mix.jpg", rating: 4.5, description: "Assorted premium barfi collection", weights: ["250g", "500g", "1kg"], reviews: [{ user: "Rohan", rating: 5, comment: "Great variety pack!" }] },
  { id: 15, name: "Mysore Pak", category: "sweets", price: 360, image: "/images/mysore-pak.jpg", rating: 4.6, description: "Traditional ghee-rich Mysore Pak", weights: ["250g", "500g"], reviews: [{ user: "Lakshmi", rating: 5, comment: "Authentic South Indian sweet!" }] },
  { id: 31, name: "Pot Kulfi", category: "sweets", price: 60, image: "/images/kulfi.jpg", rating: 4.7, description: "Creamy traditional frozen dessert with pistachios", weights: ["1pc", "4pc", "8pc"], reviews: [{ user: "Rina", rating: 5, comment: "Creamy and delicious!" }] },
  { id: 32, name: "Rasmalai", category: "sweets", price: 380, image: "/images/rasmalai.jpg", rating: 4.8, description: "Soft paneer discs soaked in saffron milk", weights: ["250g", "500g", "1kg"], reviews: [{ user: "Deepa", rating: 5, comment: "Heavenly taste!" }, { user: "Sunil", rating: 5, comment: "Best rasmalai in the city!" }] },
  { id: 33, name: "Basundhi", category: "sweets", price: 200, image: "/images/basundhi.jpg", rating: 4.6, description: "Rich thickened sweetened milk with nuts and saffron", weights: ["250ml", "500ml"], reviews: [{ user: "Geeta", rating: 5, comment: "Perfect dessert for special occasions!" }] },

  // ===== CAKES =====
  { id: 7, name: "Chocolate Cake", category: "cakes", price: 800, image: "/images/chocolate-cake.jpg", rating: 4.9, description: "Rich dark chocolate ganache layer cake", weights: ["500g", "1kg", "2kg"], reviews: [{ user: "Riya", rating: 5, comment: "Best chocolate cake in the city!" }] },
  { id: 8, name: "Red Velvet Cake", category: "cakes", price: 900, image: "/images/red-velvet-cake.jpg", rating: 4.8, description: "Classic red velvet with cream cheese frosting", weights: ["500g", "1kg", "2kg"], reviews: [{ user: "Neha", rating: 5, comment: "Absolutely divine!" }] },
  { id: 16, name: "Pineapple Cake", category: "cakes", price: 700, image: "/images/pineapple-cake.jpg", rating: 4.6, description: "Fresh pineapple layered sponge cake", weights: ["500g", "1kg", "2kg"], reviews: [{ user: "Divya", rating: 4, comment: "Light and fruity!" }] },
  { id: 17, name: "Butterscotch Cake", category: "cakes", price: 750, image: "/images/butterscotch-cake.jpg", rating: 4.7, description: "Creamy butterscotch with crunchy praline", weights: ["500g", "1kg", "2kg"], reviews: [{ user: "Kiran", rating: 5, comment: "My kids love this!" }] },

  // ===== CHAAT =====
  { id: 9, name: "Pani Puri", category: "chaat", price: 120, image: "/images/pani-puri.jpg", rating: 4.6, description: "Crispy puris with spiced water and filling", weights: ["Regular", "Large"], reviews: [{ user: "Sanjay", rating: 5, comment: "Street food perfection!" }] },
  { id: 18, name: "Bhel Puri", category: "chaat", price: 100, image: "/images/bhel-puri.jpg", rating: 4.5, description: "Tangy puffed rice mix with chutneys", weights: ["Regular", "Large"], reviews: [{ user: "Priti", rating: 4, comment: "Perfect evening snack!" }] },
  { id: 19, name: "Dahi Puri", category: "chaat", price: 130, image: "/images/dahi-puri.jpg", rating: 4.4, description: "Crispy puris topped with yogurt and chutneys", weights: ["Regular", "Large"], reviews: [{ user: "Geeta", rating: 5, comment: "So refreshing!" }] },
  { id: 46, name: "Sev Puri", category: "chaat", price: 110, image: "/images/sev-puri.jpg", rating: 4.5, description: "Flat puris topped with potatoes, onions, chutneys and sev", weights: ["Regular", "Large"], reviews: [{ user: "Nisha", rating: 5, comment: "Crunchy and tangy!" }] },
  { id: 47, name: "Mixed Chaat", category: "chaat", price: 140, image: "/images/mixed-chaat.jpg", rating: 4.6, description: "Assorted chaat mix with all the toppings", weights: ["Regular", "Large"], reviews: [{ user: "Arjun", rating: 5, comment: "Best combo of flavors!" }] },
  { id: 48, name: "Papdi Chaat", category: "chaat", price: 120, image: "/images/papdi-chaat.jpg", rating: 4.5, description: "Crispy papdi with yogurt, chutneys and spices", weights: ["Regular", "Large"], reviews: [{ user: "Sonia", rating: 4, comment: "Classic taste!" }] },
  { id: 49, name: "Aloo Tikki", category: "chaat", price: 80, image: "/images/aloo-tikki.jpg", rating: 4.7, description: "Crispy spiced potato patties served hot", weights: ["1pc", "2pc", "4pc"], reviews: [{ user: "Manoj", rating: 5, comment: "So crispy outside, soft inside!" }] },
  { id: 50, name: "Aloo Tikki Chaat", category: "chaat", price: 120, image: "/images/aloo-tikki.jpg", rating: 4.6, description: "Aloo tikki topped with yogurt, chutneys and sev", weights: ["Regular", "Large"], reviews: [{ user: "Rashmi", rating: 5, comment: "Amazing street food experience!" }] },
  { id: 51, name: "Pav Bhaji", category: "chaat", price: 150, image: "/images/pav-bhaji.jpg", rating: 4.8, description: "Spicy mashed vegetable curry with buttered pav", weights: ["Regular", "Large"], reviews: [{ user: "Vikash", rating: 5, comment: "Mumbai style pav bhaji, so good!" }] },
  { id: 52, name: "Paneer Pav Bhaji", category: "chaat", price: 180, image: "/images/pav-bhaji.jpg", rating: 4.7, description: "Pav bhaji loaded with paneer cubes", weights: ["Regular", "Large"], reviews: [{ user: "Kavya", rating: 5, comment: "Paneer lovers must try!" }] },
  { id: 53, name: "Cheese Pav Bhaji", category: "chaat", price: 190, image: "/images/pav-bhaji.jpg", rating: 4.7, description: "Classic pav bhaji topped with melted cheese", weights: ["Regular", "Large"], reviews: [{ user: "Rahul", rating: 5, comment: "Cheese makes everything better!" }] },
  { id: 54, name: "Extra Pav", category: "chaat", price: 30, image: "/images/pav-bhaji.jpg", rating: 4.3, description: "Additional buttered pav bread rolls", weights: ["2pc", "4pc"], reviews: [{ user: "Amit", rating: 4, comment: "Soft and buttery!" }] },
  { id: 55, name: "Dahi Samosa", category: "chaat", price: 100, image: "/images/dahi-samosa.jpg", rating: 4.5, description: "Crushed samosa topped with yogurt and chutneys", weights: ["Regular", "Large"], reviews: [{ user: "Priya", rating: 5, comment: "Unique and tasty!" }] },
  { id: 56, name: "Dahi Kachori", category: "chaat", price: 110, image: "/images/raj-kachori.jpg", rating: 4.5, description: "Crispy kachori with yogurt and sweet chutney", weights: ["Regular", "Large"], reviews: [{ user: "Sunita", rating: 4, comment: "Love the combination!" }] },
  { id: 57, name: "Dahi Papdi Chaat", category: "chaat", price: 120, image: "/images/papdi-chaat.jpg", rating: 4.6, description: "Papdi chaat with generous yogurt topping", weights: ["Regular", "Large"], reviews: [{ user: "Meera", rating: 5, comment: "Creamy and tangy delight!" }] },
  { id: 58, name: "Dahi Bhel Puri", category: "chaat", price: 110, image: "/images/bhel-puri.jpg", rating: 4.4, description: "Bhel puri with yogurt and sweet chutney", weights: ["Regular", "Large"], reviews: [{ user: "Kiran", rating: 4, comment: "Refreshing twist on bhel!" }] },

  // ===== SNACKS =====
  { id: 10, name: "Samosa", category: "snacks", price: 30, image: "/images/samosa.jpg", rating: 4.7, description: "Crispy golden samosa with spiced potato filling", weights: ["1pc", "6pc", "12pc"], reviews: [{ user: "Deepak", rating: 5, comment: "Crispy and delicious!" }] },
  { id: 20, name: "Kachori", category: "snacks", price: 40, image: "/images/kachori.jpg", rating: 4.6, description: "Flaky crust with spiced lentil filling", weights: ["1pc", "6pc", "12pc"], reviews: [{ user: "Mohan", rating: 5, comment: "Love the crunch!" }] },
  { id: 21, name: "Bread Pakora", category: "snacks", price: 35, image: "/images/bread-pakora.jpg", rating: 4.3, description: "Stuffed bread fritters with potato filling", weights: ["1pc", "6pc"], reviews: [{ user: "Asha", rating: 4, comment: "Great with chutney!" }] },
  { id: 28, name: "Raj Kachori", category: "snacks", price: 80, image: "/images/raj-kachori.jpg", rating: 4.7, description: "Large crispy shell stuffed with yogurt, chutneys and sprouts", weights: ["1pc", "2pc"], reviews: [{ user: "Ritu", rating: 5, comment: "Royal treat!" }] },
  { id: 29, name: "Channa Masala", category: "snacks", price: 100, image: "/images/channa-masala.jpg", rating: 4.5, description: "Spicy chickpea curry served with bread", weights: ["Regular", "Large"], reviews: [{ user: "Pawan", rating: 5, comment: "Perfect spice level!" }] },
  { id: 30, name: "Channa Samosa", category: "snacks", price: 50, image: "/images/channa-samosa.jpg", rating: 4.6, description: "Crispy samosa stuffed with spiced chickpeas", weights: ["1pc", "6pc"], reviews: [{ user: "Ankit", rating: 5, comment: "Unique filling, loved it!" }] },

  // ===== PASTRIES =====
  { id: 11, name: "Cream Pastry", category: "pastries", price: 80, image: "/images/cream-pastry.jpg", rating: 4.5, description: "Fresh cream pastry with fruit toppings", weights: ["1pc", "6pc"], reviews: [{ user: "Pooja", rating: 4, comment: "Light and fluffy!" }] },
  { id: 22, name: "Chocolate Pastry", category: "pastries", price: 90, image: "/images/chocolate-pastry.jpg", rating: 4.7, description: "Rich chocolate ganache pastry", weights: ["1pc", "6pc"], reviews: [{ user: "Tina", rating: 5, comment: "Chocoholic's dream!" }] },
  { id: 23, name: "Fruit Tart", category: "pastries", price: 110, image: "/images/fruit-tart.jpg", rating: 4.4, description: "Crispy tart shell with custard and fresh fruits", weights: ["1pc", "4pc"], reviews: [{ user: "Nisha", rating: 5, comment: "Beautiful and delicious!" }] },

  // ===== SAVORIES =====
  { id: 12, name: "Namkeen Mix", category: "savories", price: 200, image: "/images/namkeen.jpg", rating: 4.4, description: "Crunchy spiced savory mix", weights: ["250g", "500g", "1kg"], reviews: [{ user: "Arun", rating: 4, comment: "Perfect tea-time snack!" }] },
  { id: 24, name: "Mathri", category: "savories", price: 180, image: "/images/mathri.jpg", rating: 4.3, description: "Flaky and crispy salted crackers", weights: ["250g", "500g"], reviews: [{ user: "Sunita", rating: 4, comment: "Traditional taste!" }] },
  { id: 25, name: "Chakli", category: "savories", price: 220, image: "/images/chakli.jpg", rating: 4.5, description: "Spiral rice flour crunchy snack", weights: ["250g", "500g"], reviews: [{ user: "Raj", rating: 5, comment: "Addictive crunch!" }] },

  // ===== BEVERAGES =====
  { id: 13, name: "Mango Lassi", category: "beverages", price: 80, image: "/images/mango-lassi.jpg", rating: 4.6, description: "Fresh mango yogurt smoothie", weights: ["Regular", "Large"], reviews: [{ user: "Sunita", rating: 5, comment: "So refreshing!" }] },
  { id: 26, name: "Rose Sharbat", category: "beverages", price: 60, image: "/images/rose-sharbat.jpg", rating: 4.4, description: "Chilled rose-flavored sweet drink", weights: ["Regular", "Large"], reviews: [{ user: "Aarti", rating: 5, comment: "Perfect summer cooler!" }] },
  { id: 27, name: "Masala Chaas", category: "beverages", price: 50, image: "/images/masala-chaas.jpg", rating: 4.5, description: "Spiced buttermilk with cumin and mint", weights: ["Regular", "Large"], reviews: [{ user: "Vijay", rating: 4, comment: "Great digestive drink!" }] },
  { id: 34, name: "Spl Badam Milk", category: "beverages", price: 90, image: "/images/badam-milk.jpg", rating: 4.7, description: "Rich almond milk with saffron and cardamom", weights: ["Regular", "Large"], reviews: [{ user: "Rekha", rating: 5, comment: "Warm and comforting!" }] },
  { id: 35, name: "Filter Coffee", category: "beverages", price: 50, image: "/images/coffee.jpg", rating: 4.8, description: "Traditional South Indian filter coffee", weights: ["Regular", "Large"], reviews: [{ user: "Kumar", rating: 5, comment: "Authentic filter coffee taste!" }] },
  { id: 36, name: "Cold Coffee", category: "beverages", price: 80, image: "/images/coffee.jpg", rating: 4.6, description: "Chilled blended coffee with cream", weights: ["Regular", "Large"], reviews: [{ user: "Tara", rating: 5, comment: "Perfect summer drink!" }] },
  { id: 37, name: "Tea", category: "beverages", price: 30, image: "/images/tea.jpg", rating: 4.5, description: "Hot masala chai made with fresh spices", weights: ["Regular", "Large"], reviews: [{ user: "Ravi", rating: 5, comment: "Nothing beats a good chai!" }] },
  { id: 38, name: "Milk", category: "beverages", price: 40, image: "/images/milk.jpg", rating: 4.3, description: "Fresh warm or cold milk", weights: ["Regular", "Large"], reviews: [{ user: "Seema", rating: 4, comment: "Pure and fresh!" }] },

  // ===== MILKSHAKES =====
  { id: 39, name: "Vanilla Milkshake", category: "milkshakes", price: 120, image: "/images/vanilla-milkshake.jpg", rating: 4.5, description: "Classic creamy vanilla milkshake", weights: ["Regular", "Large"], reviews: [{ user: "Aditi", rating: 5, comment: "Smooth and creamy!" }] },
  { id: 40, name: "Chocolate Milkshake", category: "milkshakes", price: 130, image: "/images/chocolate-milkshake.jpg", rating: 4.7, description: "Rich chocolate milkshake with cocoa", weights: ["Regular", "Large"], reviews: [{ user: "Varun", rating: 5, comment: "Chocolate heaven!" }] },
  { id: 41, name: "Strawberry Milkshake", category: "milkshakes", price: 130, image: "/images/strawberry-milkshake.jpg", rating: 4.6, description: "Fresh strawberry blended milkshake", weights: ["Regular", "Large"], reviews: [{ user: "Priya", rating: 5, comment: "Love the fruity taste!" }] },
  { id: 42, name: "Butterscotch Milkshake", category: "milkshakes", price: 140, image: "/images/butterscotch-milkshake.jpg", rating: 4.6, description: "Creamy butterscotch flavored milkshake", weights: ["Regular", "Large"], reviews: [{ user: "Rohit", rating: 5, comment: "Rich and indulgent!" }] },
  { id: 43, name: "Mango Milkshake", category: "milkshakes", price: 130, image: "/images/mango-milkshake.jpg", rating: 4.7, description: "Fresh mango pulp blended milkshake", weights: ["Regular", "Large"], reviews: [{ user: "Ananya", rating: 5, comment: "Mango season favorite!" }] },
  { id: 44, name: "Dryfruit Milkshake", category: "milkshakes", price: 160, image: "/images/dryfruit-milkshake.jpg", rating: 4.8, description: "Premium dry fruits blended milkshake", weights: ["Regular", "Large"], reviews: [{ user: "Siddharth", rating: 5, comment: "Loaded with dry fruits!" }] },
  { id: 45, name: "Coconut Milkshake", category: "milkshakes", price: 120, image: "/images/coconut-milkshake.jpg", rating: 4.4, description: "Tropical coconut cream milkshake", weights: ["Regular", "Large"], reviews: [{ user: "Maya", rating: 4, comment: "Refreshing tropical taste!" }] },
];
