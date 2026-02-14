const sampleListings = [
  {
    title: "Royal Heritage Castle",
    description: "Live like royalty in this historic castle.",
    image: { url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994", filename: "castle1" },
    price: 8000,
    location: "Jaipur",
    country: "India",
    category: "castles",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Snow Arctic Retreat",
    description: "Experience extreme winter beauty.",
    image: { url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66", filename: "arctic1" },
    price: 6000,
    location: "Leh",
    country: "India",
    category: "arctic",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [77.5770, 34.1526] }
  },
  {
    title: "Farm Stay Escape",
    description: "Relax in peaceful countryside farm.",
    image: { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef", filename: "farm1" },
    price: 1500,
    location: "Coorg",
    country: "India",
    category: "farms",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [75.8069, 12.3375] }
  },
  {
    title: "Lake View Room",
    description: "Beautiful room with lake sunrise view.",
    image: { url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353", filename: "room1" },
    price: 2000,
    location: "Udaipur",
    country: "India",
    category: "rooms",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }
  },
  {
    title: "Trending Beach House",
    description: "Most booked beach house this season.",
    image: { url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2", filename: "beach1" },
    price: 4500,
    location: "Goa",
    country: "India",
    category: "trending",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] }
  },
  {
    title: "Hilltop Camping Tent",
    description: "Adventure camping on scenic hilltop.",
    image: { url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429", filename: "camp2" },
    price: 1100,
    location: "Ooty",
    country: "India",
    category: "camping",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [76.6950, 11.4064] }
  },
  {
    title: "Infinity Pool Villa",
    description: "Luxury villa with infinity swimming pool.",
    image: { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", filename: "pool2" },
    price: 7000,
    location: "Kerala",
    country: "India",
    category: "pools",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [76.2711, 10.8505] }
  },
  {
    title: "Mumbai Skyline Apartment",
    description: "Enjoy city skyline from balcony.",
    image: { url: "https://images.unsplash.com/photo-1494526585095-c41746248156", filename: "city2" },
    price: 4000,
    location: "Mumbai",
    country: "India",
    category: "cities",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Himalayan Wooden Cottage",
    description: "Traditional wooden cottage in mountains.",
    image: { url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd", filename: "mountain2" },
    price: 2300,
    location: "Shimla",
    country: "India",
    category: "mountains",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [77.1734, 31.1048] }
  },
  {
    title: "Desert Royal Palace",
    description: "Stay in a majestic desert palace.",
    image: { url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c", filename: "castle2" },
    price: 9000,
    location: "Jodhpur",
    country: "India",
    category: "castles",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [73.0243, 26.2389] }
  },
  {
    title: "Snow Peak Cabin",
    description: "Cabin surrounded by snowy peaks.",
    image: { url: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2", filename: "arctic2" },
    price: 5500,
    location: "Sikkim",
    country: "India",
    category: "arctic",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [88.5122, 27.5330] }
  },
  {
    title: "Organic Village Farm",
    description: "Experience organic farming lifestyle.",
    image: { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", filename: "farm2" },
    price: 1700,
    location: "Punjab",
    country: "India",
    category: "farms",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [75.3412, 31.1471] }
  },
  {
    title: "Minimalist Studio Room",
    description: "Clean and modern studio stay.",
    image: { url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", filename: "room2" },
    price: 1800,
    location: "Bangalore",
    country: "India",
    category: "rooms",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Top Rated Lake House",
    description: "Highly rated peaceful lake house.",
    image: { url: "https://images.unsplash.com/photo-1501183638710-841dd1904471", filename: "trending2" },
    price: 4200,
    location: "Nainital",
    country: "India",
    category: "trending",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [79.4636, 29.3919] }
  },
  {
    title: "Forest Camping Retreat",
    description: "Camping surrounded by dense forest.",
    image: { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", filename: "camp3" },
    price: 1300,
    location: "Wayanad",
    country: "India",
    category: "camping",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [76.1320, 11.6854] }
  },
  {
    title: "Private Pool Mansion",
    description: "Spacious mansion with private pool.",
    image: { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", filename: "pool3" },
    price: 8500,
    location: "Hyderabad",
    country: "India",
    category: "pools",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [78.4867, 17.3850] }
  },
  {
    title: "Delhi City Loft",
    description: "Modern loft in heart of Delhi.",
    image: { url: "https://images.unsplash.com/photo-1484154218962-a197022b5858", filename: "city3" },
    price: 3900,
    location: "Delhi",
    country: "India",
    category: "cities",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
  },
  {
    title: "Misty Valley Cottage",
    description: "Cottage with breathtaking valley views.",
    image: { url: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b", filename: "mountain3" },
    price: 2600,
    location: "Munnar",
    country: "India",
    category: "mountains",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [77.0595, 10.0889] }
  },
  {
    title: "Ancient Fort Stay",
    description: "Stay inside a historic fort.",
    image: { url: "https://images.unsplash.com/photo-1582650948891-6f4a0df66f7d", filename: "castle3" },
    price: 7500,
    location: "Gwalior",
    country: "India",
    category: "castles",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [78.1828, 26.2183] }
  },
  {
    title: "Frozen Lake Cabin",
    description: "Cabin beside beautiful frozen lake.",
    image: { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba", filename: "arctic3" },
    price: 5800,
    location: "Kashmir",
    country: "India",
    category: "arctic",
    owner: "YOUR_USER_ID",
    geometry: { type: "Point", coordinates: [74.7973, 34.0837] }
  }
];

module.exports = { data: sampleListings };