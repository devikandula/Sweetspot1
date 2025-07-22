export const orderData = [
  {
    orderId: "SW2025-001",
    user: {
      userId: 1,
      userName: "Priya Sharma",
      userEmail: "priya.sharma@example.com",
      userOrderID: "SW2025-001",
      itemIDList: [111],
      userCartItems: [
        {
          cakeID: 1,
          eggOption: "egg",
          weight: 0.5,
          messageOnCake: "Happy Birthday",
          quantity: 1,
        }
      ]
    },
    orderItems: [
      {
        itemID: 111,
        cakeID: 1,
        orderStatus: "inProgress",
        progressStep: 3,
        orderDeadLine: "2025-07-18",
        orderLocation: "Koramangala, Bangalore",
      }
    ],
    cakes: [
      {
        cakeId: 1,
        cakeName: "Chocolate Truffle Delight",
        cakeDescription: "Rich chocolate cake with layers of truffle ganache.",
        cakeFlavour: "Chocolate",
        cakeImage: "../assets/parallaxImage3.jpg",
        cakeTags: ["chocolate", "truffle", "deluxe"],
        cakeIngredients: ["Flour", "Cocoa", "Butter", "Cream"],
        cakeEggOptions: ["egg"],
      }
    ],
    orderMeta: {
      orderStatus: "inProgress",
      orderDeadLine: "2025-07-18",
      orderLocation: "Koramangala, Bangalore",
    }
  },

  {
    orderId: "SW2025-002",
    user: {
      userId: 2,
      userName: "Rajesh Kumar",
      userEmail: "rajesh.kumar@example.com",
      userOrderID: "SW2025-002",
      itemIDList: [222],
      userCartItems: [
        {
          cakeID: 2,
          eggOption: "egg",
          weight: 1,
          messageOnCake: "Congrats!",
          quantity: 1,
        }
      ]
    },
    orderItems: [
      {
        itemID: 222,
        cakeID: 2,
        orderStatus: "inProgress",
        progressStep: 2,
        orderDeadLine: "2025-07-19",
        orderLocation: "Indiranagar, Bangalore",
      }
    ],
    cakes: [
      {
        cakeId: 2,
        cakeName: "Vanilla Bean Celebration",
        cakeDescription: "Classic vanilla cake with fresh cream.",
        cakeFlavour: "Vanilla",
        cakeImage: "/images/vanilla-bean.jpg",
        cakeTags: ["vanilla", "classic", "celebration"],
        cakeIngredients: ["Flour", "Vanilla Extract", "Eggs", "Cream"],
        cakeEggOptions: ["egg", "eggLess"],
      }
    ],
    orderMeta: {
      orderStatus: "inProgress",
      orderDeadLine: "2025-07-19",
      orderLocation: "Indiranagar, Bangalore",
    }
  },

  {
    orderId: "SW2025-003",
    user: {
      userId: 3,
      userName: "Anita Singh",
      userEmail: "anita.singh@example.com",
      userOrderID: "SW2025-003",
      itemIDList: [333],
      userCartItems: [
        {
          cakeID: 3,
          eggOption: "eggLess",
          weight: 1.5,
          messageOnCake: "With Love",
          quantity: 1,
        }
      ]
    },
    orderItems: [
      {
        itemID: 333,
        cakeID: 3,
        orderStatus: "delivered",
        progressStep: 5,
        orderDeadLine: "2025-07-20",
        orderLocation: "HSR Layout, Bangalore",
      }
    ],
    cakes: [
      {
        cakeId: 3,
        cakeName: "Red Velvet Supreme",
        cakeDescription: "Velvety smooth cake with layers of cream cheese frosting.",
        cakeFlavour: "Red Velvet",
        cakeImage: "/images/red-velvet.jpg",
        cakeTags: ["red velvet", "cream cheese", "premium"],
        cakeIngredients: ["Flour", "Cocoa", "Buttermilk", "Cream Cheese"],
        cakeEggOptions: ["eggLess"],
      }
    ],
    orderMeta: {
      orderStatus: "delivered",
      orderDeadLine: "2025-07-20",
      orderLocation: "HSR Layout, Bangalore",
    }
  },

  {
    orderId: "SW2025-004",
    user: {
      userId: 4,
      userName: "Dev Patel",
      userEmail: "dev.patel@example.com",
      userOrderID: "SW2025-004",
      itemIDList: [444],
      userCartItems: [
        {
          cakeID: 4,
          eggOption: "egg",
          weight: 2,
          messageOnCake: "Happy Anniversary",
          quantity: 1,
        }
      ]
    },
    orderItems: [
      {
        itemID: 444,
        cakeID: 4,
        orderStatus: "preparing",
        progressStep: 1,
        orderDeadLine: "2025-07-21",
        orderLocation: "Whitefield, Bangalore",
      }
    ],
    cakes: [
      {
        cakeId: 4,
        cakeName: "Black Forest Special",
        cakeDescription: "Chocolate sponge layered with cherries and whipped cream.",
        cakeFlavour: "Black Forest",
        cakeImage: "/images/black-forest.jpg",
        cakeTags: ["chocolate", "forest", "fruit"],
        cakeIngredients: ["Flour", "Cocoa", "Cherries", "Whipped Cream"],
        cakeEggOptions: ["egg"],
      }
    ],
    orderMeta: {
      orderStatus: "preparing",
      orderDeadLine: "2025-07-21",
      orderLocation: "Whitefield, Bangalore",
    }
  }
];
