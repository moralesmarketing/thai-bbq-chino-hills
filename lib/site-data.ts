export const business = {
  name: "Thai Original BBQ & Restaurant",
  shortName: "Thai BBQ",
  tagline: "Charcoal-Grilled Thai, Chino Hills, Since 1998",
  city: "Chino Hills",
  address: {
    line1: "2911 Chino Avenue",
    line2: "Chino Hills, CA 91710",
  },
  phone: "(909) 590-1009",
  phoneHref: "tel:+19095901009",
  email: null as string | null,
  yelpUrl:
    "https://www.yelp.com/biz/thai-original-bbq-and-restaurant-chino-hills",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Thai+Original+BBQ+%26+Restaurant+2911+Chino+Ave+Chino+Hills+CA+91710",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Thai+Original+BBQ+%26+Restaurant,+2911+Chino+Ave,+Chino+Hills,+CA+91710&output=embed",
  hours: [
    { day: "Monday", time: "11:00 AM – 2:30 PM, 5:00 PM – 8:30 PM" },
    { day: "Tuesday", time: "11:00 AM – 2:30 PM, 5:00 PM – 8:30 PM" },
    { day: "Wednesday", time: "11:00 AM – 2:30 PM, 5:00 PM – 8:30 PM" },
    { day: "Thursday", time: "11:00 AM – 2:30 PM, 5:00 PM – 8:30 PM" },
    { day: "Friday", time: "11:00 AM – 9:00 PM" },
    { day: "Saturday", time: "11:00 AM – 9:00 PM" },
    { day: "Sunday", time: "11:00 AM – 9:00 PM" },
  ],
  rating: {
    yelp: { score: 3.8, count: 429 },
    doordash: { score: 4.5, count: 100 },
  },
};

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  tag?: "Popular" | "Signature" | "Vegetarian";
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { name: "Golden Fried Tofu", price: "$16.95", tag: "Vegetarian" },
      {
        name: "Thai Spring Rolls",
        price: "$16.95",
        description:
          "Deep fried spring rolls stuffed with baby shrimp, ground pork, glass noodles, bean sprouts, and chopped cabbage. Served with our special sweet sauce.",
        tag: "Popular",
      },
      {
        name: "Mee Krob",
        price: "$18.95",
        description:
          "Crispy fried noodles and shrimp, sauteed in a delightful plum sauce. Served with bean sprouts.",
      },
      {
        name: "Nam Sod",
        price: "$18.95",
        description:
          "Ground pork mixed with fresh chili, ginger, green onions, peanuts, mint leaves, and lime juice. Served over a bed of lettuce.",
      },
      {
        name: "Larb Chicken or Beef",
        price: "$18.95",
        description:
          "Ground chicken or beef mixed with dry chili, mint leaves, and lime juice. Served over a bed of lettuce.",
      },
      {
        name: "The Monster (Pla Goong)",
        price: "$20.95",
        description:
          "Grilled medium rare shrimp, seasoned with fresh chili and lime juice. Served over a bed of lettuce.",
      },
      {
        name: "Naked Shrimp",
        price: "$20.95",
        description:
          "Grilled shrimp served with special cucumber sauce. Sprinkled with crushed peanuts.",
      },
      {
        name: "Golden Fried Shrimp",
        price: "$21.95",
        description: "Deep fried battered shrimp.",
      },
      {
        name: "Wings of Angel",
        price: "$21.95",
        description:
          "Boneless chicken wings stuffed with ground pork, glass noodles, mushrooms, baby shrimp, and onions. Served with special cucumber sauce with crushed peanuts.",
      },
      {
        name: "Beef Sate",
        price: "$27.95",
        description:
          "Sliced beef marinated with mixtures of Thai spices. Grilled and served on bamboo skewers with our delicious peanut sauce and cucumber salad.",
        tag: "Popular",
      },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    items: [
      {
        name: "Tom Kha Seafood",
        price: "$21.95",
        description:
          "Shrimp, fish, squid, mussel, and mushrooms in a creamy hot and sour lemongrass broth.",
      },
      {
        name: "Tom Kha Goong",
        price: "$19.95",
        description:
          "Shrimp and mushrooms in a creamy hot and sour lemongrass broth.",
      },
      {
        name: "Tom Kha Kai",
        price: "$19.95",
        description:
          "Slices of chicken and mushrooms in a creamy hot and sour lemongrass broth.",
      },
      {
        name: "Tom Yum Seafood",
        price: "$21.95",
        description:
          "Shrimp, scallops, fish, squid, mussel, and mushrooms in a hot and sour lemongrass broth.",
        tag: "Popular",
      },
      {
        name: "Tom Yum Goong",
        price: "$19.95",
        description: "Shrimp and mushrooms in a hot and sour lemongrass broth.",
        tag: "Popular",
      },
      {
        name: "Tom Yum Kai",
        price: "$19.95",
        description:
          "Slices of chicken and mushrooms in a hot and sour lemongrass broth.",
      },
      {
        name: "Combination Soup",
        price: "$19.95",
        description:
          "Mixed vegetables with shrimp, sliced chicken, and pork in a clear broth.",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        name: "Thai Salad",
        price: "$16.95",
        description:
          "Shredded chicken served over a bed of fresh lettuce, cucumber, and tomato. Topped with our house dressing.",
      },
      {
        name: "Yum Neau (Beef Salad)",
        price: "$18.95",
        description:
          "Sliced beef mixed with fresh chili, red onion, cucumber, mint leaves, and lime juice. Served over a bed of lettuce.",
        tag: "Popular",
      },
      {
        name: "Shrimp Salad",
        price: "$20.95",
        description:
          "Creamy-buttered shrimp served over a bed of fresh lettuce, cucumber, and tomato. Sided with our delicious peanut dressing.",
      },
    ],
  },
  {
    id: "lunch-specials",
    title: "Lunch Specials",
    note: "Only served Mon–Fri, 11am–2:30pm. Comes with a side salad and small rice.",
    items: [
      {
        name: "L-1 Thai BBQ Chicken",
        price: "$17.95",
        description: "Half barbecue chicken served with our special honey sauce.",
        tag: "Signature",
      },
      {
        name: "L-2 Sweet and Sour Chicken",
        price: "$17.95",
        description:
          "Sliced chicken breast with diced cucumbers, onions, bell peppers, and pineapples stir-fried in our sweet and sour sauce.",
      },
      {
        name: "L-3 Garlic Chicken",
        price: "$17.95",
        description:
          "Sliced chicken breast stir-fried with our garlic black pepper sauce.",
      },
      {
        name: "L-4 Beef with Broccoli",
        price: "$17.95",
        description: "Beef with broccoli sauteed in oyster sauce.",
      },
      {
        name: "L-5 Cashew Shrimp",
        price: "$17.95",
        description:
          "Shrimp stir-fried with cashews, bell peppers, and onions in chili paste sauce.",
      },
      {
        name: "L-6 Moo Prik King",
        price: "$17.95",
        description:
          "Sliced pork sauteed with green beans in prik king paste sauce.",
      },
      {
        name: "L-7 Chili Beef",
        price: "$17.95",
        description:
          "Sliced beef stir-fried with bell peppers, mushrooms, onions, and fresh chilis in oyster sauce.",
      },
      {
        name: "L-8 Beef Sate",
        price: "$17.95",
        description:
          "Four barbeque beef skewers sided with peanut sauce and cucumber salad.",
      },
    ],
  },
  {
    id: "house-specials",
    title: "House Specials",
    items: [
      {
        name: "S-1 Thai BBQ Chicken",
        price: "$18.95",
        description: "Half barbecue chicken served over shrimp fried rice.",
        tag: "Signature",
      },
      {
        name: "S-2 Thai BBQ Spare Ribs",
        price: "$24.95",
        description: "Barbecue pork spare ribs served over shrimp fried rice.",
        tag: "Popular",
      },
      {
        name: "S-3 Rama Shrimp Dinner",
        price: "$22.95",
        description:
          "Creamy-buttered shrimp sided with broccoli over shrimp fried rice.",
      },
      {
        name: "S-5 Scampi a la Thai BBQ",
        price: "$22.95",
        description:
          "Shrimp sauteed with black pepper garlic sauce, sided with broccoli over shrimp fried rice.",
      },
      {
        name: "S-6 Sweet Angel Chicken",
        price: "$22.95",
        description:
          "Deep fried chicken wings stuffed with ground pork, glass noodles, diced mushroom, and onion.",
      },
      {
        name: "S-7 Dearest Crab",
        price: "$22.95",
        description:
          "Crab cakes made of real crab meat, ground pork, diced mushrooms, and onion. Sided with cucumber sauce sprinkled with crushed peanuts and served over shrimp fried rice.",
      },
      {
        name: "S-8 Sate Dinner",
        price: "$28.95",
        description:
          "Barbecue beef skewers sided with peanut sauce and cucumber salad. Served over shrimp fried rice.",
        tag: "Popular",
      },
      {
        name: "S-11 Ruby Chicken Dinner",
        price: "$23.95",
        description:
          "Deep fried whole baby hen stuffed with ground pork, baby shrimp, onion, mushroom, and glass noodles. Sided with sweet and sour sauce. Served over shrimp fried rice.",
        tag: "Popular",
      },
      {
        name: "S-12 Teriyaki Salmon Dinner",
        price: "$22.95",
        description:
          "Grilled salmon steak sided with broccoli and teriyaki sauce. Served over shrimp fried rice.",
      },
    ],
  },
  {
    id: "noodles",
    title: "Noodles",
    items: [
      {
        name: "Chicken Noodle",
        price: "$18.95",
        description:
          "Rice noodles and chicken scrambled with egg. Served over a bed of lettuce.",
        tag: "Popular",
      },
      {
        name: "Phad Thai",
        price: "$18.95",
        description:
          "Thai rice noodles and shrimp scrambled with egg and bean sprouts in mild sauce.",
        tag: "Popular",
      },
      {
        name: "Phad See-Ewe",
        price: "$18.95",
        description:
          "Rice noodles stir-fried with broccoli. Choice of chicken, beef, pork, or shrimp.",
        tag: "Popular",
      },
      {
        name: "Chow Mein",
        price: "$19.95",
        description:
          "Choice of chicken, beef, pork, or shrimp, stir-fried egg noodles with vegetables.",
        tag: "Popular",
      },
      {
        name: "Combination Chow Mein",
        price: "$20.95",
        description:
          "Chicken, beef, and pork, stir-fried with egg noodles and vegetables.",
      },
      {
        name: "Seafood Chow Mein",
        price: "$21.95",
        description:
          "Shrimp, scallops, fish, squid, mussel, and vegetables, stir-fried with egg noodles.",
      },
      {
        name: "Sen Yai Rard Nar",
        price: "$18.95",
        description:
          "Rice noodles topped with broccoli and gravy. Choice of chicken, beef, pork, or shrimp.",
      },
    ],
  },
  {
    id: "fried-rice",
    title: "Fried Rice",
    items: [
      {
        name: "Pineapple Fried Rice",
        price: "$19.95",
        description: "Shrimp, pork, chicken, and curry.",
      },
      { name: "Chicken, Pork, or Beef Fried Rice", price: "$17.95" },
      {
        name: "Combination Fried Rice",
        price: "$19.95",
        description: "Shrimp, pork, and chicken.",
      },
      { name: "Shrimp Fried Rice", price: "$17.95", tag: "Popular" },
      { name: "Crab Fried Rice", price: "$19.95" },
      { name: "Seafood Fried Rice", price: "$21.95" },
      { name: "Vegetable Fried Rice", price: "$17.95", tag: "Vegetarian" },
      { name: "Steamed Rice (1 Portion)", price: "$2.95" },
    ],
  },
  {
    id: "poultry",
    title: "Poultry",
    items: [
      {
        name: "Thai BBQ Chicken (Kai Yang)",
        price: "$17.95",
        description: "Half barbecue chicken served with special honey sauce.",
        tag: "Signature",
      },
      {
        name: "Garlic Chicken",
        price: "$17.95",
        description:
          "Sliced chicken breast stir-fried with black pepper garlic sauce.",
      },
      {
        name: "Mint Chicken",
        price: "$17.95",
        description:
          "Sliced chicken stir-fried with bell peppers, onions, chili, and mint leaves.",
      },
      {
        name: "Chicken with Broccoli",
        price: "$17.95",
        description: "Chicken with broccoli sauteed in oyster sauce.",
      },
      {
        name: "Cashew Chicken",
        price: "$17.95",
        description:
          "Sliced chicken breast stir-fried with cashews, bell peppers, and onion in chili paste sauce.",
      },
      {
        name: "Sweet & Sour Chicken",
        price: "$17.95",
        description:
          "Sauteed chicken with diced cucumbers, onion, bell peppers, tomatoes, and pineapple in sweet and sour sauce.",
      },
      {
        name: "Chicken with Baby Corn",
        price: "$17.95",
        description:
          "Sauteed chicken and baby corn, mushrooms, and green onions in brown bean gravy.",
      },
      {
        name: "Chicken Curry",
        price: "$19.95",
        description: "Chicken and potatoes in mild yellow curry.",
        tag: "Popular",
      },
      {
        name: "Sweet & Sour Angel",
        price: "$21.95",
        description:
          "Deep fried chicken wings stuffed with a combination of ground pork, mushrooms, onion, and glass noodles. Served with sweet and sour sauce.",
      },
      {
        name: "Ruby Chicken",
        price: "$22.95",
        description:
          "Deep fried whole baby hen stuffed with a combination of pork, mushroom, onion, and glass noodles. Served with sweet and sour sauce.",
      },
    ],
  },
  {
    id: "beef",
    title: "Beef",
    items: [
      {
        name: "Chili Beef",
        price: "$18.95",
        description:
          "Sliced beef stir fried with fresh chili, mushrooms, green onion, and bell peppers in oyster sauce.",
      },
      {
        name: "Mint Beef",
        price: "$18.95",
        description:
          "Sliced beef stir fried with fresh chili, green onions, bell peppers, and mint leaves in oyster sauce.",
      },
      {
        name: "Beef with Broccoli",
        price: "$18.95",
        description: "Beef and broccoli sauteed in oyster sauce.",
      },
      {
        name: "Panang",
        price: "$18.95",
        description: "Sliced beef in brown curry sauce with fresh green chili.",
        tag: "Popular",
      },
      {
        name: "Garlic Beef",
        price: "$18.95",
        description: "Sliced beef sauteed with black pepper garlic sauce.",
      },
    ],
  },
  {
    id: "pork",
    title: "Pork",
    items: [
      { name: "Thai BBQ Spare Ribs", price: "$25.95" },
      {
        name: "Garlic Short Ribs",
        price: "$19.95",
        description: "Pork short ribs sauteed with black pepper garlic sauce.",
      },
      {
        name: "Sweet & Sour Short Ribs",
        price: "$19.95",
        description:
          "Breaded and deep-fried short ribs sauteed with sweet and sour sauce.",
      },
      {
        name: "Garlic Pork",
        price: "$18.95",
        description: "Sliced pork sauteed with black pepper garlic sauce.",
      },
      {
        name: "Moo Pad Prig King",
        price: "$18.95",
        description:
          "Sliced pork sauteed with curry paste sauce and green beans.",
      },
    ],
  },
  {
    id: "seafood",
    title: "Seafood",
    items: [
      {
        name: "Shrimp & Baby Corn",
        price: "$19.95",
        description: "Sauteed in oyster sauce with mushrooms and green onion.",
      },
      {
        name: "Shrimp Prig King",
        price: "$19.95",
        description: "Sauteed in curry paste with green beans.",
      },
      {
        name: "Sweet & Sour Shrimp",
        price: "$19.95",
        description:
          "Sauteed with cucumber, pineapple, bell peppers, and onions.",
      },
      {
        name: "Chili Shrimp",
        price: "$19.95",
        description:
          "Shrimp stir-fried with chili, bell peppers, and mushrooms in oyster sauce.",
      },
      {
        name: "Mint Shrimp",
        price: "$19.95",
        description:
          "Shrimp stir-fried with chili, bell peppers, and mint leaves in oyster sauce.",
      },
      {
        name: "Cashew Shrimp",
        price: "$18.95",
        description:
          "Shrimp and cashew stir-fried with onion, bell peppers in chili paste sauce.",
      },
      {
        name: "Garlic Shrimp",
        price: "$19.95",
        description: "Shrimp stir-fried with black pepper garlic sauce.",
      },
      {
        name: "Shrimp with Broccoli",
        price: "$19.95",
        description: "Shrimp stir-fried with broccoli in oyster sauce.",
      },
      {
        name: "Salmon Teriyaki",
        price: "$21.95",
        description: "Salmon steak sided with teriyaki sauce. Served with broccoli.",
      },
      {
        name: "Gulf of Siam",
        price: "$21.95",
        description:
          "Shrimp, squid, and mussels with bell pepper, onions, and mushrooms in chili paste sauce.",
      },
      {
        name: "Fried Catfish",
        price: "$22.95",
        description:
          "Fried catfish sided with spicy sauce made of chili, mushrooms, bell peppers, and oyster sauce.",
      },
    ],
  },
  {
    id: "vegetables",
    title: "Vegetables",
    items: [
      {
        name: "Green Garden",
        price: "$16.95",
        description: "Mixed vegetables sauteed in oyster sauce.",
      },
      { name: "Spicy Mixed Vegetables", price: "$16.95" },
      {
        name: "Sweet & Sour Tofu & Veggies",
        price: "$16.95",
        tag: "Vegetarian",
      },
      { name: "Bean Sprouts with Tofu", price: "$16.95", tag: "Vegetarian" },
      {
        name: "Broccoli Mushroom",
        price: "$16.95",
        description: "Broccoli and mushroom sauteed in oyster sauce.",
      },
      { name: "Broccoli with Oyster Sauce", price: "$16.95" },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    note: "We also serve a variety of beer & wine.",
    items: [
      { name: "Thai Iced Tea", price: "$5.95", tag: "Popular" },
      { name: "Thai Iced Coffee", price: "$5.95" },
      { name: "Coke, 7 Up", price: "$3.95" },
      { name: "Hot Coffee, Hot Tea", price: "$3.95" },
      { name: "Bottled Water", price: "$3.95" },
    ],
  },
];

export type FanFavorite = {
  name: string;
  price: string;
  description: string;
  tag: string;
  image: string;
};

export const fanFavorites: FanFavorite[] = [
  {
    name: "Thai BBQ Chicken (Kai Yang)",
    price: "$17.95",
    description:
      "Half chicken marinated and hand-grilled over charcoal, finished with a honey glaze — the dish the restaurant is named for.",
    tag: "Signature",
    image: "/images/bbq-chicken-plate.jpg",
  },
  {
    name: "Phad Thai",
    price: "$18.95",
    description:
      "Thai rice noodles wok-tossed with shrimp, egg, and bean sprouts in a mild tamarind sauce.",
    tag: "Most Popular",
    image: "/images/pad-thai.jpg",
  },
  {
    name: "Beef Sate",
    price: "$27.95",
    description:
      "Thai-spiced beef skewers grilled over charcoal, served with peanut sauce and cucumber salad.",
    tag: "Best Seller",
    image: "/images/beef-satay.jpg",
  },
  {
    name: "S-2 Thai BBQ Spare Ribs",
    price: "$24.95",
    description:
      "Barbecue pork spare ribs, grilled and glazed, served over shrimp fried rice.",
    tag: "Signature",
    image: "/images/spare-ribs.jpg",
  },
  {
    name: "Phad See-Ewe",
    price: "$18.95",
    description:
      "Wide rice noodles stir-fried with broccoli and egg — choice of chicken, beef, pork, or shrimp.",
    tag: "Popular",
    image: "/images/phad-see-ew.jpg",
  },
  {
    name: "Panang",
    price: "$18.95",
    description:
      "Sliced beef simmered in a rich brown curry sauce with fresh green chili.",
    tag: "Popular",
    image: "/images/panang-curry.jpg",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  location: string;
  source: "Yelp";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The first thing that stood out to us was how incredibly clean the restaurant was — it immediately made a great impression. I ordered the Chicken Pad Thai, while my sister-in-law chose the BBQ Chicken. We both thoroughly enjoyed our meals, well-seasoned with generous portions. The owner was warm, friendly, and attentive.",
    author: "Alexandra L.",
    location: "Cerritos, CA",
    source: "Yelp",
  },
  {
    quote:
      "Thirty years and hopefully many more to come — the owners are still as pleasant, hospitable, and wonderful as always, and the food has never skipped a beat. Highly recommend supporting this family-owned and operated staple.",
    author: "Nathaniel J.",
    location: "Portland, OR",
    source: "Yelp",
  },
  {
    quote:
      "We absolutely love this place! My wife was born in Thailand and appreciates good flavors and good quality food. We've been coming here for years and hope they stick around to serve us with good food and a good time.",
    author: "Eran W.",
    location: "Ontario, CA",
    source: "Yelp",
  },
  {
    quote:
      "If you love beef sate, this is the place to go. Served with shrimp fried rice and peanut sauce — the main course of this could actually feed two. Service and inside the restaurant are excellent.",
    author: "Steve O.",
    location: "Chino, CA",
    source: "Yelp",
  },
  {
    quote:
      "I've been coming here for over two years, and it never disappoints! My go-to dishes are the Chicken Pad Thai and Beef Pad See Ew, cooked to perfection every time. And I can't forget the Thai tea — it's hands down the best ever.",
    author: "Juliet N.",
    location: "Pomona, CA",
    source: "Yelp",
  },
];

export const faqs = [
  {
    question: "Do you take reservations?",
    answer:
      "Thai Original BBQ seats walk-ins and does not require a reservation — just come by during open hours.",
  },
  {
    question: "Can I order delivery or pickup?",
    answer: `Call ahead at ${business.phone} for pickup, or order delivery through DoorDash.`,
  },
  {
    question: "What's the lunch special?",
    answer:
      "Eight lunch specials are served Monday–Friday, 11am–2:30pm, each with a side salad and small rice for $17.95.",
  },
  {
    question: "How spicy is the food?",
    answer:
      "Dishes marked with a chili on the menu run spicy by default — let your server know your preference and it can be adjusted.",
  },
  {
    question: "Is there parking?",
    answer:
      "Free parking is available in the shopping center lot right outside the restaurant.",
  },
];
