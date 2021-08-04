// Here, you'll create the 'database' of information that will be used
// to populate the website with information for each character

// Use the main Overwatch site as your reference for hero information
// https://playoverwatch.com/en-us/heroes/

// The value for the "img" key refers to the name of the image file
// in the "assets" folder. Feel free to use the ones provided, or
// download your own!

// 1) Create 3 of the following 6 objects based on the corresponding hero:
// sombra, doomfist, mercy, lucio, orisa, dVa 
// Note: The first hero is provided for you

// The structure for each hero object is as follows:
// NOTE: the "abilities" key stores an array of objects!

// const someHero = {
//     name:"someName",
//     type:"offense, defense, tank, or support",
//     difficulty:"1/3",
//     img:"somePic.png",
//     saying:"blah blah some saying",
//     story:"blah blah some story",
//     abilities:[
//         {
//             name:"ability1",
//             description:"blah blah about ability1"
//         },
//         {
//             name:"ability2",
//             description:"blah blah about ability2"
//         }
//     ]
// }

const sombra = {
    name:"sombra",
    type:"offense",
    difficulty:"3/3",
    img:"sombra.png",
    saying:"EVERYTHING CAN BE HACKED… AND EVERYONE.",
    story:"Doomfist’s cybernetics make him a highly-mobile, powerful frontline fighter. In addition to dealing ranged damage with his Hand Cannon, Doomfist can slam the ground, knock enemies into the air and off balance, or charge into the fray with his Rocket Punch. When facing a tightly packed group, Doomfist leaps out of view, then crashes down to earth with a spectacular Meteor Strike.",
    abilities:[
        {
            name:"MACHINE PISTOL",
            description:"Sombra’s fully-automatic machine pistol fires in a short-range spread."
        },
        {
            name:"HACK",
            description:"Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents."
        },
        {
            name:"STEALTH",
            description:"Sombra becomes invisible for a short period of time, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage."
        },
        {
            name:"TRANSLOCATOR",
            description:"Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight)."
        },
        {
            name:"EMP",
            description:"Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast."
        },
        {
            name:"MACHINE PISTOL",
            description:"Sombra’s fully-automatic machine pistol fires in a short-range spread."
        },
    ],
};

const doomfist = {
    name:"doomfist",
    type:"offense",
    difficulty:"3/3",
    img:"doomfist.png",
    saying:"ONLY THROUGH CONFLICT DO WE EVOLVE.",
    story:"Mercy’s Valkyrie Suit helps keep her close to teammates like a guardian angel; healing, resurrecting or strengthening them with the beams emanating from her Caduceus Staff.",
    abilities:[
        {
            name: "HAND CANNON",
            description:"Doomfist fires a short-range burst from the knuckles of his fist. Its ammunition is automatically regenerated over a short time."
        },
        {
            name:"SEISMIC SLAM",
            description:"Doomfist leaps forward and smashes into the ground, knocking nearby enemies toward him."
        },
        {
            name:"RISING UPPERCUT",
            description:"Doomfist uppercuts enemies in front of him into the air."
        },
        {
            name:"ROCKET PUNCH",
            description:"After charging up, Doomfist lunges forward and knocks an enemy back, dealing additional damage if they impact a wall."
        },
        {
            name:"METEOR STRIKE",
            description:"Doomfist leaps into the sky, then crashes to the ground, dealing significant damage."
        },
    ],
};

const mercy = {
    name:"mercy",
    type:"defense",
    difficulty:"1/3",
    img:"mercy.png",
    saying:"HEROS NEVER DIE.",
    story:"Mercy’s Valkyrie Suit helps keep her close to teammates like a guardian angel; healing, resurrecting or strengthening them with the beams emanating from her Caduceus Staff.",
    abilities:[
        {
            name: "CADUCEUS STAFF",
            description:"Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal."
        },
        {
            name:"CADUCEUS BLASTER",
            description:"Mercy shoots a round from her sidearm."
        },
        {
            name:"GUARDIAN ANGEL",
            description:"Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments."
        },
        {
            name:"RESURRECT",
            description:"Mercy brings a dead ally back into the fight with full health."
        },
        {
            name:"ANGELIC DESCENT",
            description:"Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights."
        },
        {
            name:"VALKYRIE",
            description:"Gain the ability to fly. Mercy’s abilities are enhanced."
        },
    ],
};

// 2) Create an array called "heroes" and store all of the hero object in the array
let heroes = [sombra, doomfist, mercy];

// 3) In "index.html", create a form that allows the user to create 
// and add a new hero (add it under the "#gridDiv").
// For simplicity, the form should just include: name, type, difficulty, and saying
// The form should have a "Submit" button

// 4) At the bottom of "events.js", give the "Submit" button an on click event handler 


// BONUS: add 3 more Overwatch heroes from Overwatch (remember to add 
// them to the "heroes" array!)

// BONUS: Since the "type" only has 4 valid options, try using a
// radio button instead of the standard text input
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

// BONUS: In "style.css", style your form to look more like the rest
// of the website
