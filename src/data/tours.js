import cultural from "../assets/tours/cultural.jpg";
import hill from "../assets/tours/hill.jpg";
import south from "../assets/tours/south.jpg";
import wildlife from "../assets/tours/wildlife.jpg";
import adventure from "../assets/tours/adventure.jpg";
import beach from "../assets/tours/beach.jpg";

const tours = [
  {
    id: 1,
    title: "3 Days Cultural Tour",
    image: cultural,
    duration: "3 Days",
    location: "Kandy • Sigiriya • Dambulla",
    price: 45000,
    rating: 4.9,
    description:
      "Explore Sri Lanka's rich cultural heritage by visiting ancient kingdoms, temples and historical landmarks.",

    itinerary: [
      "Day 1 - Colombo → Pinnawala → Kandy",
      "Day 2 - Kandy → Dambulla → Sigiriya",
      "Day 3 - Sigiriya → Polonnaruwa → Colombo",
    ],

    includes: [
      "Accommodation",
      "Breakfast",
      "Professional Tour Guide",
      "Entrance Tickets",
    ],

    hotelIds: [1, 2],
    guideIds: [1],
  },

  {
    id: 2,
    title: "5 Days Hill Country Tour",
    image: hill,
    duration: "5 Days",
    location: "Nuwara Eliya • Ella • Haputale",
    price: 68000,
    rating: 4.8,
    description:
      "Experience Sri Lanka's beautiful tea plantations, waterfalls and scenic mountain landscapes.",

    itinerary: [
      "Day 1 - Colombo → Nuwara Eliya",
      "Day 2 - Tea Factory & Gregory Lake",
      "Day 3 - Ella Rock & Nine Arches Bridge",
      "Day 4 - Lipton's Seat",
      "Day 5 - Return to Colombo",
    ],

    includes: [
      "Hotel",
      "Breakfast",
      "Tour Guide",
    ],

    hotelIds: [3],
    guideIds: [2],
  },

  {
    id: 3,
    title: "Southern Beach Escape",
    image: south,
    duration: "4 Days",
    location: "Galle • Mirissa • Unawatuna",
    price: 58000,
    rating: 4.8,
    description:
      "Enjoy relaxing beaches, whale watching and historical coastal attractions.",

    itinerary: [
      "Day 1 - Galle Fort",
      "Day 2 - Mirissa Beach",
      "Day 3 - Whale Watching",
      "Day 4 - Unawatuna",
    ],

    includes: [
      "Hotel",
      "Breakfast",
      "Beach Activities",
    ],

    hotelIds: [4],
    guideIds: [1],
  },

  {
    id: 4,
    title: "Wildlife Safari",
    image: wildlife,
    duration: "3 Days",
    location: "Yala • Udawalawe",
    price: 52000,
    rating: 4.7,
    description:
      "Experience Sri Lanka's wildlife with exciting safari adventures.",

    itinerary: [
      "Day 1 - Yala National Park",
      "Day 2 - Safari Adventure",
      "Day 3 - Udawalawe",
    ],

    includes: [
      "Hotel",
      "Safari Jeep",
      "Breakfast",
    ],

    hotelIds: [2],
    guideIds: [2],
  },

  {
    id: 5,
    title: "Adventure Tour",
    image: adventure,
    duration: "5 Days",
    location: "Ella • Kitulgala",
    price: 72000,
    rating: 4.9,
    description:
      "Perfect for adventure lovers with hiking, rafting and ziplining.",

    itinerary: [
      "Day 1 - Ella",
      "Day 2 - Little Adam's Peak",
      "Day 3 - Kitulgala Rafting",
      "Day 4 - Hiking",
      "Day 5 - Return",
    ],

    includes: [
      "Adventure Activities",
      "Hotel",
      "Guide",
    ],

    hotelIds: [3],
    guideIds: [3],
  },

  {
    id: 6,
    title: "Luxury Beach Holiday",
    image: beach,
    duration: "6 Days",
    location: "Bentota • Hikkaduwa",
    price: 98000,
    rating: 5.0,
    description:
      "Luxury resorts, spa treatments and premium beach experiences.",

    itinerary: [
      "Day 1 - Bentota",
      "Day 2 - Water Sports",
      "Day 3 - Spa",
      "Day 4 - Hikkaduwa",
      "Day 5 - Coral Reef",
      "Day 6 - Departure",
    ],

    includes: [
      "Luxury Hotel",
      "Breakfast",
      "Spa Session",
    ],

    hotelIds: [1],
    guideIds: [1],
  },
];

export default tours;