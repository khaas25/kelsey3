var express = require("express");
// node modules is where this is being pulled from. Storing functionality of express in the variable. express is a function.
// express isn't a variable its a class.
require("./DB/Conn");
var cors = require("cors");
var app = express();
app.use(express.json());
// wihtout the above line you cant have a post request
var Products = require("./Model/Products");
app.use(cors());
// everything inside express goes in app variable. Standard naming convention
// var cors = require("cors");
var PORT = 8080;
app.listen(PORT, () => {
  console.log("api is running on port " + PORT);
});
// this runs the project.  CALLBACK is a function within a function
////  Data aka videos  =======================================
const data = [
  {
    title: "BMX Rampage: 2021 Highlights",
    channel: "Red Cow",
    image:
      "data:image/jpeg;base64,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",
    description:
      "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
    views: "1,001,023",
    likes: "110,985",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1626032763000,
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
        likes: 0,
        timestamp: 1628522461000,
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        likes: 0,
        timestamp: 1626359541000,
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
        likes: 0,
        timestamp: 1626011132000,
      },
    ],
    id: "84e96018-4022-434e-80bf-000ce4cd12b8",
  },
  {
    title: "Become A Travel Pro In One Easy Lesson",
    channel: "Todd Welch",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience. This video will focus a lot on helping the first time or inexperienced traveler head out prepared and confident in themselves.",
    views: "2,043,765",
    likes: "400,058",
    duration: "7:26",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1625158995000,
    comments: [
      {
        name: "Mattie Casarez",
        comment:
          "This is exactly the kind of advice I’ve been looking for! One minute you’re packing your bags, the next you’re dancing around in the streets without a care in the world.",
        likes: 0,
        timestamp: 1625250720000,
      },
      {
        name: "Taylor Jade",
        comment:
          "Excellent tips! Another idea is to keep all of your important belongings like your passport inside a waterproof bag. Perfect for those last minute trips to the beach, trust me.",
        likes: 0,
        timestamp: 1625238122000,
      },
      {
        name: "Adnan Natt",
        comment:
          "Who ever knew travel could be so easy? Looking forward to getting to put this into practice when I fly away in the near future. Wish me good luck!",
        likes: 0,
        timestamp: 1625177192000,
      },
    ],
    id: "c05b9a93-8682-4ab6-aff2-92ebb4bbfc14",
  },
  {
    title: "Les Houches The Hidden Gem Of The Chamonix",
    channel: "Cornelia Blair",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Les Houches, located 6 kilometres from Chamonix, is a ski resort with a domain which extends from an altitude of 950 metres up to 1900 metres. Long descents through tree-lined slopes are combined with impressive views of the Mont Blanc massif and the Chamonix valley. Les Houches is twinned with the Russian villages of Sochi and Krasnaya-Polyana and was chosen by the International Olympic Committee to assist in the organization of the 2014 Winter Olympic Games. Watch for more fun facts!",
    views: "16,950",
    likes: "3,856",
    duration: "4:13",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1622991672000,
    comments: [
      {
        name: "Giovana Alpine",
        comment:
          "Wow! You can bet that we’ll be checking this place out when we’re in the area. The views look absolutely breathtaking. Thank you so much for sharing this with the world!",
        likes: 0,
        timestamp: 1623104591000,
      },
      {
        name: "Victoire Lesage",
        comment:
          "Skiing is a lifestyle! This may be hard to believe now, but I once competed here for the World Cup. The Alps are at their most beautiful when you’re shredding down them FAST.",
        likes: 0,
        timestamp: 1623071160000,
      },
      {
        name: "Sharon Tillson",
        comment:
          "Amazing footage of an amazing spot! It’s so inspiring to watch the sun rising over a landscape like this. I can only imagine how fresh the air must feel there on a snowy morning.",
        likes: 3,
        timestamp: 1623002522000,
      },
    ],
    id: "25ce5d91-a262-4dcf-bb87-42b87546bcfa",
  },
  {
    title: "Travel Health Useful Medical Information For",
    channel: "Glen Harper",
    image: "https://i.imgur.com/MMDMgD7.jpg",
    description:
      "Concerned about your health while travelling? You should know that international travellers should always be extra concerned about their health and safety. This video provides essential information on travel health risks and preventive measures to keep you and your loved ones safe during your travels.",
    views: "739,945",
    likes: "98,352",
    duration: "8:34",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1620850202000,
    comments: [
      {
        name: "Aurora Anita",
        comment:
          "This video is SO important for anybody wishing to travel overseas. We’ll be using these tips on our trips!",
        likes: 2,
        timestamp: 1620983771000,
      },
      {
        name: "Fatima Hassan",
        comment:
          "The last thing you want is to be stranded somewhere without this type of knowledge! Thank you so much for sharing your experience, this will surely come in handy.",
        likes: 0,
        timestamp: 1620937932000,
      },
      {
        name: "Joan Hidaka",
        comment:
          "Great information all around! I’m saving this video to watch again the next time I head out of the country. Stay safe out there, folks.",
        likes: 1,
        timestamp: 1620930181000,
      },
    ],
    id: "b6f35f03-7936-409b-bd2a-446bcc5f30e7",
  },
  {
    title: "Cheap Airline Tickets Great Ways To Save",
    channel: "Emily Harper",
    image: "https://i.imgur.com/ibLw5q5.jpg",
    description:
      "Want to know how to get cheap flights? This video has great tips on how to book the cheapest flight possible to anywhere in the world. Remember, Keep your searches top secret. Use the best flight search engines. Identify the cheapest day to fly out. Fly for free with points. Befriend budget airlines. Search for airline error and sale fares. Book connecting flights yourself for less. ",
    views: "72,342",
    likes: "8,785",
    duration: "2:59",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1630656720000,
    comments: [
      {
        name: "Felicia Hill",
        comment:
          "Fantastic tips! I can’t believe I’ve been paying full price this whole time when it’s so easy to get a great deal. Never been more excited to book my next ticket!",
        likes: 0,
        timestamp: 1630790612000,
      },
      {
        name: "Louis Applebee",
        comment:
          "It’s like a weight has been lifted off of my shoulders. Thank you so much for sharing these tips. I will be sending this to all of my friends and family ASAP.",
        likes: 1,
        timestamp: 1630762321000,
      },
      {
        name: "Anne Weston",
        comment:
          "So glad I came across this. The way you have presented these techniques is perfectly clear. Even doing a couple of these things is sure to make me a happy camper!",
        likes: 0,
        timestamp: 1630678260000,
      },
    ],
    id: "1b964601-a6dd-4fcc-b5f3-1000338c9557",
  },
  {
    title: "Take A Romantic Break In A Boutique Hotel",
    channel: "Ethan Owen",
    image: "https://i.imgur.com/7rD6Mf6.jpg",
    description:
      "Your loved one has been dreaming about a romantic getaway with you, if you want to bring the spark back into your relationship this is the place to go! Small and design-forward, boutique hotels promise a more intimate vacation stay, each one chock-full of character while offering plenty of inimitable features (from exposed brick to panoramic ocean views)",
    views: "345,987",
    likes: "76,588",
    duration: "12:26",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1630963412000,
    comments: [
      {
        name: "Marcus Forest",
        comment:
          "We recently stayed at the Inn for our honeymoon. I definitely recommend the experience. We can’t wait to return for our anniversary!",
        likes: 1,
        timestamp: 1631273521000,
      },
      {
        name: "Ashley Jones",
        comment:
          "The shimmer of the water through the windows here is just spectacular. Forget romance! If you want to reconnect with the world around you, this is the place to be.",
        likes: 2,
        timestamp: 1631088092000,
      },
      {
        name: "Dylan Walter",
        comment:
          "Boutique is right! All of these places look magnificent. From the hotel steps to the boardwalk, now that’s a commute I could get used to.",
        likes: 0,
        timestamp: 1631023292000,
      },
    ],
    id: "9c268c0a-83dc-4b96-856a-bb5ded2772b1",
  },
  {
    title: "Choose the Perfect Accommodations",
    channel: "Lydia Perez",
    image: "https://i.imgur.com/0hi3N4B.jpg",
    description:
      "Worried about finding the perfect travel accommodations? There are many things to consider when booking an accommodation. Consider picking the right location. Location is an important consideration for an enjoyable stay. Check the rating and price. Consider apartment or condo rentals. Weigh the food options. Is it family-friendly? Watch for extra fees. Assess the on-site amenities.",
    views: "252,796",
    likes: "4,905",
    duration: "7:31",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1631532721000,
    comments: [
      {
        name: "Fionna Miller",
        comment:
          "Location location location! It blows my mind how many people don’t understand this, but you’ve summed it up so well here. The next time I travel, I’ll be on the beachfront.",
        likes: 6,
        timestamp: 1631816492000,
      },
      {
        name: "Suzie Maxwell",
        comment:
          "I wish I could print out a video to show to my travel agent. Oh, what am I saying – they have a computer! Much appreciated advice, I can’t wait to put it into action soon.",
        likes: 1,
        timestamp: 1631799181000,
      },
      {
        name: "Alasie Rivers",
        comment:
          "From five-star hotels to the cheapest spots – wherever you like to stay, THIS is the way to do it! I’ll take sunlight and a cozy reading corner over a pool any day of the week.",
        likes: 0,
        timestamp: 1631716921000,
      },
    ],
    id: "fc5261d1-58a0-47e4-9c19-2b7a1715fa1b",
  },
  {
    title: "Cruising Destination Ideas",
    channel: "Timothy Austin",
    image: "https://i.imgur.com/DDJNZNw.jpg",
    description:
      "Do you dream of sailing in to the sunset without a care in the world? Going on a cruise can be the perfect way to make this dream come true. If you’re considering taking your very first cruise, think about the various advantages. A cruise vacation offers great value as almost everything is included, from accommodation and food to entertainment and transfers.",
    views: "29,984",
    likes: "2,552",
    duration: "5:58",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1631892222000,
    comments: [
      {
        name: "Jesse Cruz",
        comment:
          "There’s no place quite like the open ocean. Wind in your sails. The cool mist is perfect to wake you up in the morning and lull you to sleep in the evening. What an experience.",
        likes: 0,
        timestamp: 1632227521000,
      },
      {
        name: "Tristan Carter",
        comment:
          "Drifting along the coast in a city on the water. Such incredible destinations to see all around the world.",
        likes: 1,
        timestamp: 1631976360000,
      },
    ],
    id: "99478bed-6428-49ed-8eaa-f245a5414336",
  },
  {
    title: "Train Travel On Track For Safety",
    channel: "Scotty Cranmer",
    image: "https://i.imgur.com/i6S8m7I.jpg",
    description:
      "Traveling by train can be convenient, enjoyable and economical. You can minimize your risk of injury, illness, and theft by taking a few simple precautions. Before you travel, you should pack only the necessities. This will make your luggage easy to carry and store during your travels. You should always assume that the tap water on the train is not potable. Whenever it is possible, stock up on bottles of water to reduce the risk of dehydration. Remember, never accept food or drinks from strangers!",
    views: "3,092,284",
    likes: "75,985",
    duration: "4:20",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1632344461000,
    comments: [
      {
        name: "Martin Evergreen",
        comment:
          "I’ve loved trains ever since I was a child. I dreamed about riding one around the world. This is the most fantastic thing I’ve seen yet, and I’m watching it ON a train!",
        likes: 3,
        timestamp: 1632512763000,
      },
      {
        name: "Emily Harper",
        comment:
          "Let’s collaborate on a video for saving money on cheap train tickets! I’ll have my associates contact yours.",
        likes: 0,
        timestamp: 1632496261000,
      },
    ],
    id: "76ca28c0-7dea-4553-887f-8e5129a80fc3",
  },
];
app.get("/", (req, res) => {
  res.status(200).send("<h1> Welcome to my API </h1>");
});
// endpoint is the route of the api

app.get("/videos", async (req, res) => {
  try {
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send("Error");
  }
});
//! THE CODE BELOW IS WHEN THE ARRAY IS DIRECTLY IN INDEX.JS
app.get("/videos/:id", async (req, res) => {
  // this manually adds an array in the file
  try {
    const id = req.params.id;
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        res.status(200).send(data[i]);
      }
    }
  } catch (error) {
    res.status(404).send("something went wrong");
  }
});
//// Products  =============================================
app.post("/products", async (req, res) => {
  try {
    const newProduct = new Products(req.body);
    newProduct
      .save()
      .then(() => {
        res.status(200).send(newProduct);
      })
      .catch((e) => {
        res.status(404).send({ error: e });
      });
    // the above thencatch makes sure the user input is saved to the database
  } catch (error) {
    res.status(500).send("Internal Server Error");
    // this thencatch identifies an internal error and server crashed
  }
});

app.get("/products", async (req, res) => {
  var allProducts = await Products.find();
  res.status(200).send(allProducts);
});
