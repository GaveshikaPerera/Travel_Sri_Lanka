export const conversations = [
  {
    id: 1,
    traveller: "John Smith",
    profile: "https://i.pravatar.cc/100?img=1",
    lastMessage: "Looking forward to the trip!",
    time: "10:45 AM",
    online: true,

    messages: [
      {
        id: 1,
        sender: "traveller",
        text: "Hello! I'd like to book the Ella Tour.",
        time: "10:30 AM",
      },
      {
        id: 2,
        sender: "guide",
        text: "Hi John! Yes, I'm available.",
        time: "10:32 AM",
      },
      {
        id: 3,
        sender: "traveller",
        text: "Looking forward to the trip!",
        time: "10:45 AM",
      },
    ],
  },

  {
    id: 2,
    traveller: "Emma Brown",
    profile: "https://i.pravatar.cc/100?img=5",
    lastMessage: "Thank you!",
    time: "Yesterday",
    online: false,

    messages: [
      {
        id: 1,
        sender: "traveller",
        text: "Can you guide us in Galle?",
        time: "9:15 AM",
      },
      {
        id: 2,
        sender: "guide",
        text: "Sure! I'd love to.",
        time: "9:20 AM",
      },
      {
        id: 3,
        sender: "traveller",
        text: "Thank you!",
        time: "9:25 AM",
      },
    ],
  },

  {
    id: 3,
    traveller: "David Silva",
    profile: "https://i.pravatar.cc/100?img=8",
    lastMessage: "See you soon.",
    time: "Monday",
    online: true,

    messages: [
      {
        id: 1,
        sender: "traveller",
        text: "Hi Guide!",
        time: "2:10 PM",
      },
      {
        id: 2,
        sender: "guide",
        text: "Hello David.",
        time: "2:11 PM",
      },
      {
        id: 3,
        sender: "traveller",
        text: "See you soon.",
        time: "2:12 PM",
      },
    ],
  },
];