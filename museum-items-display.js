const museumItems = `
{
    "items": [
      {
        "name": "A vase from ancient Greece",
        "location": "Gallery 1",
        "floor": "Lower Level"
      },
      {
        "name": "A dinosaur fossil",
        "location": "Gallery 2",
        "floor": "Lower Level"
      },
      {
        "name": "A painting by Vincent van Gogh",
        "location": "Gallery 1",
        "floor": "Floor 1"
      },
      {
        "name": "A suit of armor from the Middle Ages",
        "location": "Gallery 2",
        "floor": "Floor 1"
      },
      {
        "name": "An Egyptian sarcophagus",
        "location": "Gallery 3",
        "floor": "Floor 1"
      },
      {
        "name": "A sculpture by Michelangelo",
        "location": "Gallery 4",
        "floor": "Floor 1"
      },
      {
        "name": "A model of the solar system",
        "location": "Gallery 5",
        "floor": "Floor 1"
      },
      {
        "name": "A samurai sword from Japan",
        "location": "Gallery 6",
        "floor": "Floor 1"
      },
      {
        "name": "A musical instrument from the Renaissance",
        "location": "Gallery 7",
        "floor": "Floor 1"
      },
      {
        "name": "A feather from a dodo bird",
        "location": "Gallery 8",
        "floor": "Floor 1"
      },
      {
        "name": "A map of the world",
        "location": "Gallery 1",
        "floor": "Floor 2"
      },
      {
        "name": "A necklace made of shells",
        "location": "Gallery 1",
        "floor": "Lower Level"
      },
      {
        "name": "A telescope from the 1800s",
        "location": "Gallery 2",
        "floor": "Lower Level"
      },
      {
        "name": "A set of pottery from the Ming Dynasty",
        "location": "Gallery 1",
        "floor": "Lower Level"
      },
      {
        "name": "A clock from the Industrial Revolution",
        "location": "Gallery 2",
        "floor": "Lower Level"
      },
      {
        "name": "A fossilized tree",
        "location": "Gallery 1",
        "floor": "Lower Level"
      },
      {
        "name": "A fossilized insect",
        "location": "Gallery 1",
        "floor": "Floor 1"
      },
      {
        "name": "A quilt from the American Civil War",
        "location": "Gallery 2",
        "floor": "Floor 1"
      },
      {
        "name": "A piece of Moon rock",
        "location": "Gallery 3",
        "floor": "Floor 1"
      },
      {
        "name": "A vintage car",
        "location": "Gallery 4",
        "floor": "Floor 1"
      }
    ]
  }
`;


// Parse the JSON string and store the resulting object in a variable
const itemsData = JSON.parse(museumItems);

// Create empty arrays to hold the items for each floor
const lowerLevelItems = [];
const floor1Items = [];
const floor2Items = [];

// Loop through the items in the "items" array
for (const item of itemsData.items) {
  // Check the item's "floor" property and add it to the appropriate array
  if (item.floor === "Lower Level") {
    lowerLevelItems.push(item);
  } else if (item.floor === "Floor 1") {
    floor1Items.push(item);
  } else if (item.floor === "Floor 2") {
    floor2Items.push(item);
  }
}

// Generate HTML code for the items on each floor
const lowerLevelHTML = lowerLevelItems.map(item => `
  <li>
    ${item.name} (located in ${item.location})
  </li>
`);
const floor1HTML = floor1Items.map(item => `
  <li>
    ${item.name} (located in ${item.location})
  </li>
`);
const floor2HTML = floor2Items.map(item => `
  <li>
    ${item.name} (located in ${item.location})
  </li>
`);

// Export the items data and generated HTML code as a module
export { itemsData, lowerLevelHTML, floor1HTML, floor2HTML };
