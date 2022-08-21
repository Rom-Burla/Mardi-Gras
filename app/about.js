"use strict" 
let section = document.getElementsByTagName("section")[0];
let article= document.getElementsByTagName("article")[0];
let aboutHeading = document.createElement("h1");
let firstP = document.createElement("p");
let secP = document.createElement("p");
let trdP = document.createElement("p");
let fortP = document.createElement("p");
let articleP = document.createElement("p");
let mydiv = document.createElement("div");
let img = document.createElement("img");






aboutHeading.textContent="----------- About Mardi Gras -----------";
aboutHeading.className="about-first-header";
section.appendChild(aboutHeading)

firstP.textContent = "The holiday of Mardi Gras is celebrated in all of Louisiana, including the city of New Orleans. Celebrations are concentrated for about two weeks before and through Shrove Tuesday, the day before Ash Wednesday (the start of lent in the Western Christian tradition). Usually there is one major parade each day (weather permitting); many days have several large parades. The largest and most elaborate parades take place the last five days of the Mardi Gras season. In the final week, many events occur throughout New Orleans and surrounding communities, including parades and balls (some of them masquerade balls).";
firstP.className="about-header";
section.appendChild(firstP);

secP.textContent="he parades in New Orleans are organized by social clubs known as krewes; most follow the same parade schedule and route each year. The earliest-established krewes were the Mistick Krewe of Comus, the earliest, Rex, the Knights of Momus and the Krewe of Proteus. Several modern super krewes are well known for holding large parades and events, such as the Krewe of Endymion (which is best known for naming celebrities as grand marshals for their parades), the Krewe of Bacchus (similarly known for naming celebrities as their Kings), as well as the Zulu Social Aid & Pleasure Club—a predominantly African American krewe. Float riders traditionally toss throws into the crowds. The most common throws are strings of colorful plastic beads, doubloons, decorated plastic throw cups, Moon Pies, and small inexpensive toys. Major krewes follow the same parade schedule and route each year.";
secP.className="about-secheader";
section.appendChild(secP);

trdP.textContent="Shrove Tuesday is a day to be remembered by strangers in New Orleans, for that is the day for fun, frolic, and comic masquerading. All of the mischief of the city is alive and wide awake in active operation. Men and boys, women and girls, bond and free, white and black, yellow and brown, exert themselves to invent and appear in grotesque, quizzical, diabolic, horrible, strange masks, and disguises. Human bodies are seen with heads of beasts and birds, beasts and birds with human heads; demi-beasts, demi-fishes, snakes' heads and bodies with arms of apes; man-bats from the moon; mermaids; satyrs, beggars, monks, and robbers parade and march on foot, on horseback, in wagons, carts, coaches, cars,in rich confusion, up and down the streets, wildly shouting, singing, laughing, drumming, fiddling, fifeing, and all throwing flour broadcast as they wend their reckless way.";
trdP.className="about-trdheader";
section.appendChild(trdP);

fortP.textContent="Traditional colors A flag in the traditional colors, as specified in the Rex organization's original edict and in compliance with the rule of tincture.The colors traditionally associated with Mardi Gras in New Orleans are purple, green, and gold. The colors were first specified in proclamations by the Rex organization during the lead-up to their inaugural parade in 1872, suggesting that balconies be draped in banners of these colors. It is unknown why these specific colors were chosen; some accounts suggest that they were initially selected solely on their aesthetic appeal, as opposed to any true symbolism.Errol Laborde, author of Marched the Day God: A History of the Rex Organization, presented a theory that the colors were based on heraldry: all three colors correspond to a heraldic tincture, and Rex's goal may have been to create a tricolor to represent their kingdom. Purple was widely associated with royalty, while white was already heavily used on other national flags, and was thus avoided. Furthermore, he noted that a flag in green, gold and purple in that order complies with the rule of tincture, which states that metals (gold or silver) can only be placed on or next to other colors, and that colors cannot be placed on or next to other colors.Following a color-themed Rex parade in 1892 that featured purple, green, and gold-colored floats themed around the concepts, the Rex organization retroactively declared that the three colors in that order symbolized justice, power, and faith. The traditional colors are commonly addressed as purple, green, and gold, in that order—even though this order technically violates the rule of tincture.";
fortP.className="about-fortheader";
section.appendChild(fortP);



article.appendChild(articleP);
mydiv.className="mayor-img";
img.src = "../images/Logos of contributars/mayor.jpg";
mydiv.appendChild(img);
articleP.appendChild(mydiv);
articleP.className="about-mayor";
articleP.innerHTML+=`Cantrell was born as LaToya Wilder in Los Angeles. She moved to New Orleans in 1990.
"We ARE NOT canceling Mardi Gras," Cantrell said in a prepared statement. 
As Mayor of the great City of New Orleans, I invite you to visit our city to experience the excitement of Mardi Gras!

Mayor of New Orleans

The Carnival season officially begins each year on Jan. 6 -- the Feast of the Epiphany, also called Twelfth Night or Kings Day. Traditional balls are held in the weeks leading up to the big event.

Spectacular parades with colorful, creative floats start rolling before Mardi Gras Day. Our private Carnival clubs, called krewes, take on royalty status and throw beads, doubloons and toys to parade goers. Visitors quickly learn to say, "Throw me something mister!"

The culmination of Mardi Gras in New Orleans begins early on Mardi Gras Day when the Zulu Social Aid & Pleasure Club and the Rex Organization parade through the city. Music, food and elaborate costumes add to the fun-filled day of excitement for revelers of all ages.

New Orleans, with its unmatched culture and world-famous music and cuisine, is an exciting place to be at any time of the year. We invite everyone to experience Mardi Gras at least once in their lifetime. Make your plans now to be a part of this great tradition and see firsthand why we say, "Laissez les bon temps rouler!"

Sincerely,

LaToya Cantrell
Mayor of New Orleans`










