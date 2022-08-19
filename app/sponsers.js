"use strict";
const sponsers = [
  {
    name: "Walk-On's Bistreaux and Bar",
    logo: "../images/Logos of contributars/walkons-logo.svg",
    image:
      "https://3bcykr1cbmqn3uptf510bh8e-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/top-general-contractor-tampa-florida-restaurant.jpg",
    description: `Walk-On’s founders Brandon Landry and Jack Warner became fast friends as a pair of walk-ons (unrecruited and unsigned athletes who are unwilling to give up on their dream of being college athletes) on the Louisiana State University basketball team. Both worked hard and practiced even harder to earn and keep their spots on the team. Without a lot of true playing time, though, Brandon and Jack were able to discover that their shared interests and hopes went beyond the basketball court. While living out their dreams as members of the LSU basketball team, Brandon and Jack traveled across the country. During these trips, they were able to visit some of the best restaurants and sports bars in the country and began to recognize the need for such a concept in Baton Rouge, especially near LSU. Their idea began to take shape 35,000 feet above the earth as they sketched their vision for a floor plan on the back of a napkin while the team flew home from a road game at the University of Tennessee. Despite having little business experience and even less financial backing, Brandon and Jack incorporated the traits they learned on the basketball court – hard work, dedication and a commitment to excellence - into their vision.
        <p>On September 9, 2003, their shared dream became a reality as Walk-On’s Bistreaux & Bar opened for business in the shadows of LSU’s Tiger Stadium. Over the next 9 years, hard work and dedication helped expand the Walk-On’s footprint to locations across south Louisiana. As Walk-On’s success grew, so too did its reputation in the industry and across the country. In 2012, ESPN took notice and named Walk-On’s the #1 Sports Bar in America. The most significant year in Walk-On’s growth followed two years of preparations focused on expanding the concept across the country through franchising. At the same time, NFL All-Pro Quarterback Drew Brees expressed an interest in the business and ultimately joined the Walk-On’s team as a co-owner."</p>`,
    website: "https://walk-ons.com",
  },
  {
    name: "Sheraton New Orleans Hotel",
    logo: "../images/Logos of contributars/Sheraton New Orleans Hotel logo.webp",
    image:
      "https://www.louisianatravel.com/sites/default/files/styles/listing_slideshow/public/listing_images/profile/4821/exterior.jpg?itok=ssGj3Fqt",
    description: `Brimming with style and grounded in our community, Sheraton New Orleans Hotel is the perfect home base for your downtown escape. Located on Canal Street, our hotel is steps from the buzz of the French Quarter, and also offers seamless access to notable NOLA points of interest including the Ernest N. Morial Convention Center, Caesars Superdome and Smoothie King Center. Relax in our refined guest rooms and suites, which boast plush bedding, spacious work areas, modern technology and floor-to-ceiling windows overlooking the French Quarter and the Mississippi River. Upgrade your stay with premium Sheraton Club Lounge access or reboot in our fully-equipped Sheraton Fitness Center. Kick start your day in New Orleans at Starbucks® in our atrium lobby or wind down with refreshing cocktails and local cuisine at Pelican Bar. A leading meeting and events destination in downtown New Orleans, our hotel features 105,000 square feet of flexible venue space, including several expansive ballrooms.`,
    website:
      "https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/",
  },
  {
    name: "Ace Hotel New Orleans",
    logo: "../images/Logos of contributars/Ace Hotel New Orleans logo.png",
    image:
      "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v12699089-1440.jpg",
    description: `Located in the Warehouse District of New Orleans, within a 5-minute walk to Harrah's Casino, Ace Hotel New Orleans boasts a rooftop bar and award-winning restaurant. The hotel has a seasonal outdoor pool, fitness centre, and guests can enjoy live music on-site.
        <p>Rooms offer a flat-screen TV, refrigerator and fully-stocked minibar. A seating area is included for your convenience. Every room has a private bathroom with bathrobes and upgraded bath products.</P>
        <p>The hotel is decorated with artwork from local artists and friends of the property. You will find gift shops and several meeting spaces at the property. Valet parking is available on site day and night. Room service is available.</p>
        <p>Stumptown Coffee Roasters, the on-site coffee shop, offers coffee drinks and refreshments. Josephine Estelle serves Italian cuisine with a Southern flare. Guests can enjoy oysters and craft cocktails at SeaWorthy.</p>
        <p>The French Quarter is 1.6 km from the property.We are 10 minutes walk from The Mercedes-Benz Superdome. The nearest airport is Louis Armstrong New Orleans International Airport, 18 km from the property.</p>
        <p>Couples particularly like the location — they rated it 9.3 for a two-person trip.</p>`,
    website: "https://acehotel.com/new-orleans/",
  },
  {
    name: "The Ritz-Carlton, New Orleans",
    logo: "../images/Logos of contributars/The Ritz-Carlton New Orleans logo.jpg",
    image:
      "https://s7d2.scene7.com/is/image/ritzcarlton/RCNWORL_00098_conversion",
    description: `Rich in history and personality, New Orleans is unlike any other US city. Honoring its spirit and elegance, The Ritz-Carlton, New Orleans invites visitors to its French Quarter retreat, set within a 1908 Beaux Arts building. Here, one can bask in the silence of the hotel’s beautiful courtyard, experience the mysticism of the city through the spa’s Voodoo Ritual or learn how to play the trumpet with in-house jazz musician Jeremy Davenport.`,
    website: "https://www.ritzcarlton.com/en/hotels/new-orleans",
  },
  {
    name: "Premium Parking - P402",
    logo: "../images/Logos of contributars/Premium_Parking_Logo.jpg",
    image:
      "https://www.way.com/way-service/images/listing_image/Listing_1821652_img",
    description: `We live at the intersection of parking and technology. We are a technology company, a parking operator, and network of parking advisors to bring it all together. We built our own custom cloud-based parking management software to run our locations—now you can use it to upgrade yours. We offer an enterprise-class agile solution that's simpler, more powerful and more affordable than the disconnected hardware and app-based offerings of the legacy parking industry giants and venture capital dorm room startups.`,
    website: "https://www.premiumparking.com/P402",
  },
  {
    name: "Louisiana Children's Museum",
    logo: "../images/Logos of contributars/Louisiana Children's Museum logo.png",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_80,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/neworleans/NOTMC_612940-21b851d15056b36_21b855aa-5056-b365-ab6a363394a150bf.jpg",
    description: `When you make a child’s potential visible, wonderful things happen. So we created a place where kids use play, shared exploration, and conversation to connect with the people and world around them. A place where kids can be the amazing humans they are. A place where wonderful things happen daily.`,
    website: "https://lcm.org/",
  },
  {
    name: "Museum of Death",
    logo: "./images/Logos of contributars/Museum of Death New Orleans logo.jpg",
    image:
      "https://i.natgeofe.com/n/6bdc9fe6-0c74-4c05-a0c7-61aba0a0453c/museum-of-death_2x1.jpg",
    description: `The World Famous Museum of Death was founded in June, 1995 when JD Healy and Cathee Shultz decided to fill the void in death education in this country and made death their life’s work.
        <p>Evolving from the controversial Rita Dean art gallery, the Museum of Death was originally located in San Diego’s 1st mortuary- the building itself once owned by Wyatt Earp. Now located in Hollywood, California and New Orleans, Louisiana, the Museum of Death houses the world’s largest collection of serial killer artwork, antique funeral ephemera, mortician and coroners instruments, Manson Family memorabilia, pet death taxidermy, crime scene photographs and so much more! Each location is entirely unique as the museum does not feature any replicas or duplicates of the exhibits or artifacts.</p>
        <p>The Museum of Death experience is a self guided tour lasting approximately 45 minutes to an hour, however those who can stomach it may stay as long as they like, as there are hundreds of items on display. To ensure that you experience the entire museum we recommend arriving no later than an hour before the posted closing time for that day.</p>
        <p>There is no age limit for the Museum of Death because death affects us all, however we STRONGLY recommend the museum only for MATURE AUDIENCES! Some content within the exhibits may be too graphic or explicit for children, and no children will be allowed inside without a parent being present. There have been a number of “falling down ovations” (people fainting) throughout the years so we encourage you to prepare yourself before arriving!</p>`,
    website: "http://www.museumofdeath.net",
  },
  {
    name: "Bloody Mary's Haunted Museum",
    logo: "../images/Logos of contributars/Haunted Museum New Orleans logo.png",
    image:
      "https://www.onlyinyourstate.com/wp-content/uploads/2021/09/1-14.jpeg",
    description: `Join Voodoo Queen Bloody Mary and her mystic staff for tours, ghost hunting, séance, psychic readings, events and mystic shopping in a 200-year-old haunted house featured on Ghost Adventures, Paranormal Lockdown and Buzzfeed Unsolved. Explore even further with sightseeing, Voodoo and weddings.`,
    website: "https://www.bloodymarystours.com/",
  },
];

export { sponsers };
