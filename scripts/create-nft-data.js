import { v4 as uuidv4 } from "uuid";

const nfts = [];

const getNft = () => {
  const possibleColors = [
    "amber",
    "blue",
    "blueGrey",
    "brown",
    "cyan",
    "deepOrange",
    "deepPurple",
    "green",
    "grey",
    "indigo",
    "lightBlue",
    "lightGreen",
    "lime",
    "orange",
    "pink",
    "purple",
    "red",
    "teal",
    "yellow",
  ];
  const color =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];
  const isColorful = Math.random() > 0.5;

  const possibleColorLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const primaryColorLevel =
    possibleColorLevels[Math.floor(Math.random() * possibleColorLevels.length)];
  const secondaryColorLevel =
    possibleColorLevels[Math.floor(Math.random() * possibleColorLevels.length)];

  const queryParams = `color=${color}&colorful=${isColorful}&primaryColorLevel=${primaryColorLevel}&secondaryColorLevel=${secondaryColorLevel}`;

  const nft = {
    name: `${Math.floor(1000 + Math.random() * 9000)}`,
    description: "A DiceBot",
    image: `https://avatars.dicebear.com/api/bottts/${uuidv4()}.svg?${queryParams}`,
    properties: {
      color,
      primaryColorLvl: primaryColorLevel,
      secondaryColorLvl: secondaryColorLevel,
    },
  };

  return nft;
};

for (let i = 0; i < 50; i++) nfts.push(getNft());

(async () => {
  if (nfts === [] || nfts == null || nfts == undefined)
    console.log("🛑 No NFTs found.");
  else console.log("🤖 NFTs found:", nfts.length);
})();

export default nfts;
