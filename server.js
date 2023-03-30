const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(cors());

const coffees = {
  espresso: {
    id: 1,
    type: "Hot",
    "country of origin": "Italy",
    introduced: 1901,
    color: "Black",
    description:
      "Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.",
  },
  mocha: {
    id: 2,
    type: "Beverage (Hot and Iced), Milk coffee",
    "country of origin": "Yemen",
    introduced: 1892,
    color: "Brown",
    description:
      "Coffee and chocolate are two of the best things in the world. Mochas are espresso-based drinks made with chocolate and whipped cream instead of foam, so you get the best of both worlds in every sip. Their ratio depends on what you prefer; whether you want more coffee or chocolate, your mocha will shine in any coffee shop.",
  },
  americano: {
    id: 3,
    type: "Beverage",
    "country of origin": "Italy or Latin America",
    introduced: 1927,
    color: "Black",
    description:
      "The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.",
  },
  cappuccino: {
    id: 4,
    type: "Hot",
    "country of origin": "Italy",
    introduced: 1805,
    color: "Black, dark brown, beige, light brown, white",
    description:
      "Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.",
  },
  "café au lait": {
    id: 5,
    type: "Hot",
    "country of origin": "Italy",
    introduced: 1940,
    color: "Shades of brown, white",
    description:
      "Cafe au lait is a coffee beverage that is made with dark roast coffee and steamed milk. The milk is generally warmed up and frothed before it is added to the coffee. Cafe au lait is a popular type of coffee drink in France, where it is often served at breakfast.",
  },
  macchiato: {
    id: 6,
    type: "Beverage",
    "country of origin": "Italy",
    introduced: 1980,
    color: "Light brown",
    description:
      "The word 'macchiato' means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. You may also come across variations of macchiatos that are closer to lattes though.",
  },
  "irish coffee": {
    id: 7,
    type: "Hot",
    "country of origin": "Ireland",
    introduced: 1952,
    color: "White, dark brown",
    description:
      "One of the most popular drinks in Ireland is undoubtedly Irish coffee. This hot beverage is made with coffee, whiskey, and cream, and it is usually served with a spoonful of sugar to balance out the drink's bitterness. While there are many variations of this type of coffee drink, all of those said variations are sure to warm you up on a cold day.",
  },
  "vietnamese coffee": {
    id: 8,
    type: "Beverage",
    "country of origin": "Vietnam",
    introduced: 1857,
    color: "Black",
    description:
      "If you want to try a different method of brewing coffee, Vietnamese coffee is a great option. Simply add sweetened condensed milk to the bottom of a heat-proof glass, then place a Vietnamese coffee filter over your glass. Add your desired amount of ground coffee and pour nearly boiling water over it. This will result in a creamy, sweet type of coffee drink.",
  },
  affogato: {
    id: 9,
    type: "Beverage",
    "country of origin": "Italy",
    introduced: 1950,
    color: "Brown",
    description:
      "This dessert is less of a type of coffee drink and more of an ice cream sundae. Rather than having ice cream or gelato with hot espresso poured over it, the hot espresso slightly melts the ice cream and the corresponding ice cream cools down the beverage. They complement each other perfectly.",
  },
  "red eye": {
    id: 10,
    type: "Beverage",
    "country of origin": "US",
    introduced: 1945,
    color: "Brown",
    description:
      "Red Eye Coffee is a favourite among coffee drinkers because of its unique and rich flavour. Adding espresso shots to regular coffee creates this signature type of coffee drink that gives you the boost you need to wake up in the morning. Red Eyes are perfect for those who love strong coffee but don't want to drink an entire pot all by themselves; plus, they make excellent morning beverages.",
  },
  unknown: {
    id: 11,
    type: "unknown",
    "country of origin": "unknown",
    introduced: "unknown",
    color: "unknown",
    description: "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/coffees", (request, response) => {
  response.json(coffees);
});

app.get("/api/:coffeeName", (request, response) => {
  const coffeeNames = request.params.coffeeName.toLowerCase();
  // console.log(coffees[coffeeNames].description);
  if (coffees[coffeeNames]) {
    response.json(coffees[coffeeNames]);
  } else {
    response.json(coffees["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}. Enjoy your coffee.`);
});
