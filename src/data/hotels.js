import hotel1 from "../assets/hotels/hotel1.jpg";
import hotel2 from "../assets/hotels/hotel2.jpg";
import hotel3 from "../assets/hotels/hotel3.jpg";
import hotel4 from "../assets/hotels/hotel4.jpg";

import room1 from "../assets/hotels/room1.jpg";
import room2 from "../assets/hotels/room2.jpg";
import room3 from "../assets/hotels/room3.jpg";
import room4 from "../assets/hotels/room4.jpg";

const hotels = [
  {
    id: 1,
    name: "Marino Beach Hotel",
    location: "Colombo",
    address: "590 Marine Drive, Colombo",
    rating: 4.8,
    reviews: 1265,
    price: 18500,
    image: hotel1,

    gallery: [hotel1, hotel2, hotel3, hotel4],

    description:
      "Marino Beach Hotel offers luxurious accommodation with stunning ocean views, rooftop infinity pool, modern rooms, delicious dining experiences and excellent hospitality. It is an ideal destination for business and leisure travelers.",

    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Fitness Center",
      "Spa",
      "Free Parking",
      "Airport Shuttle",
      "Room Service",
    ],

    rooms: [
      {
        id: 1,
        name: "Deluxe Room",
        image: room1,
        guests: 2,
        bed: "King Bed",
        size: "35 m²",
        price: 18500,
        breakfast: true,
        refundable: true,
        features: [
          "Ocean View",
          "Air Conditioning",
          "Free WiFi",
          "Smart TV",
          "Mini Bar",
          "Balcony",
        ],
      },
      {
        id: 2,
        name: "Family Suite",
        image: room2,
        guests: 4,
        bed: "2 Queen Beds",
        size: "60 m²",
        price: 32000,
        breakfast: true,
        refundable: false,
        features: [
          "Living Area",
          "Ocean View",
          "Free WiFi",
          "Mini Bar",
          "Kitchenette",
          "Balcony",
        ],
      },
    ],

    reviewsData: [
      {
        id: 1,
        name: "John Smith",
        rating: 5,
        comment:
          "Amazing hotel with excellent service and breathtaking sea views.",
      },
      {
        id: 2,
        name: "Emma Wilson",
        rating: 4,
        comment:
          "Very comfortable rooms and friendly staff. Highly recommended.",
      },
    ],
  },

  {
    id: 2,
    name: "Cinnamon Grand",
    location: "Colombo",
    address: "77 Galle Road, Colombo",
    rating: 4.7,
    reviews: 984,
    price: 21000,
    image: hotel2,

    gallery: [hotel2, hotel1, hotel3, hotel4],

    description:
      "Cinnamon Grand is a luxury five-star hotel located in the heart of Colombo with world-class dining, swimming pools and premium accommodation.",

    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Gym",
      "Bar",
      "Parking",
      "Room Service",
    ],

    rooms: [
      {
        id: 1,
        name: "Superior Room",
        image: room3,
        guests: 2,
        bed: "Queen Bed",
        size: "32 m²",
        price: 21000,
        breakfast: true,
        refundable: true,
        features: [
          "City View",
          "Air Conditioning",
          "Smart TV",
          "Mini Bar",
          "Free WiFi",
        ],
      },
    ],

    reviewsData: [
      {
        id: 1,
        name: "Michael Brown",
        rating: 5,
        comment:
          "Luxury experience with delicious food and wonderful facilities.",
      },
    ],
  },

  {
    id: 3,
    name: "The Kingsbury",
    location: "Colombo",
    address: "48 Janadhipathi Mawatha, Colombo",
    rating: 4.6,
    reviews: 735,
    price: 19500,
    image: hotel3,

    gallery: [hotel3, hotel2, hotel1, hotel4],

    description:
      "The Kingsbury offers elegant rooms, beautiful ocean views and premium services for both business and holiday travelers.",

    amenities: [
      "Free WiFi",
      "Pool",
      "Restaurant",
      "Bar",
      "Spa",
      "Gym",
      "Parking",
    ],

    rooms: [
      {
        id: 1,
        name: "Ocean View Room",
        image: room4,
        guests: 2,
        bed: "King Bed",
        size: "38 m²",
        price: 19500,
        breakfast: true,
        refundable: true,
        features: [
          "Ocean View",
          "Balcony",
          "Free WiFi",
          "Air Conditioning",
          "Mini Bar",
        ],
      },
    ],

    reviewsData: [
      {
        id: 1,
        name: "Sophia Lee",
        rating: 5,
        comment:
          "Fantastic location and excellent customer service throughout our stay.",
      },
    ],
  },

  {
    id: 4,
    name: "Jetwing Blue",
    location: "Negombo",
    address: "Ethukala, Negombo",
    rating: 4.5,
    reviews: 690,
    price: 16500,
    image: hotel4,

    gallery: [hotel4, hotel1, hotel2, hotel3],

    description:
      "Jetwing Blue is a relaxing beachfront resort with spacious rooms, tropical gardens and excellent hospitality.",

    amenities: [
      "Beach Access",
      "Swimming Pool",
      "Free WiFi",
      "Restaurant",
      "Spa",
      "Gym",
      "Airport Shuttle",
    ],

    rooms: [
      {
        id: 1,
        name: "Sea View Room",
        image: room2,
        guests: 2,
        bed: "King Bed",
        size: "36 m²",
        price: 16500,
        breakfast: true,
        refundable: true,
        features: [
          "Sea View",
          "Free WiFi",
          "Balcony",
          "Mini Bar",
          "Air Conditioning",
        ],
      },
    ],

    reviewsData: [
      {
        id: 1,
        name: "David Miller",
        rating: 4,
        comment:
          "Perfect place to relax with family. Great beach and friendly staff.",
      },
    ],
  },
];

export default hotels;