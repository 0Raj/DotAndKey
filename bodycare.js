import { createProductCard } from "./Scripts/main.js";
console.log(createProductCard);


let bodyScrubData = [
  {
    DispName: "Vitamin C & Avalon Lemon",
    dNameSub: "Sugar Body Scrub",
    name: "VITAMIN C AVALON LEMON SUGAR BODY SCRUB",
    price: 545.0,
    size: 200,
    discription:
      "Time to get flirty in the shower! A slushy sugar scrub with Avalon Lemon & Verbena to gently exfoliate dead skin cells for softer skin that glows.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: ["Brightens Skin", "Exfoliates Skin", "Breaks Down Cellulite"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/5-Lemon-Scrub_28f524ab-b639-4447-8eb7-9c6d0b481c52.png?v=1636540893",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_scrub_1.jpg?v=1636541769",
    review: 20,
    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_2_1800x1800.jpg?v=1641964139",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_2_1800x1800.jpg?v=1641964139",
    ],
  },
  {
    DispName: "Damask Rose & Lavender",
    dNameSub: "Gel Body Scrub",
    name: "DAMASK ROSE GEL BODY SCRUB ",
    price: 545.0,
    size: 200,
    review: 19,
    discription:
      "A soft gel scrub lovingly curated with Damask Rose, French Lavender Oil & crushed walnut shells to buff away dead skin cells for smooth, soft & rosy bright skin.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Dewey_Glow.png?v=1636458476",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Calms_Soothes.png?v=1636458476",
    ],
    features: ["Adds a Dewy Glow", "Exfoliates Skin", "Calms And Soothes"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4-Rose-Scrub_a089f825-eea5-44f6-96ef-bf606c830d17.png?v=1636541997",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/rose_scrub.jpg?v=1636541859",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_1_1800x1800.jpg?v=1644862614",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1_1800x1800.jpg?v=1644862614",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_1_1800x1800.jpg?v=1644862614",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_1_1800x1800.jpg?v=1644862614",
    ],
  },
];
let bodySerumData = [
  {
    DispName: "Damask Rose & Lavender",
    dNameSub: "Hydrating Hyaluronic Body Lotion",
    name: "ROSE HYDRATING HYALURONIC BODY LOTION (DAMASK ROSE & LAVENDER)",
    price: 595.0,
    size: 300,
    review: 23,
    discription:
      "With nourishing Damask Rose oil, lavender & hyaluronic acid, this body serum lotion spreads evenly for hydrated, soft & dewy glowing skin.",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Dark_Spots.png?v=1636459850",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Fades_Fine_Lines_Wrinkles.png?v=1636459850",
    ],
    features: ["Intensely moisturizes", "Evens SKIN TONE", "Reduces redness"],
    features: ["Hydrates Skin", "Reduces Dark Spots", "Fades Fine line"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/6-Rose-Serum_e0b52d98-eb8c-4a7e-84b0-2970679d63c2.png?v=1636540251",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Artboard_1-6_6.jpg?v=1636540346",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_f9452183-3e22-4fdc-9ef6-3cc2adab66c6_1800x1800.jpg?v=1644862572",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1_9e39328e-9390-4fab-b1c8-9a33b778c3c5_1800x1800.jpg?v=1644862572",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_16463eb2-7c5f-4f69-85ff-13e94417d461_1800x1800.jpg?v=1644862572",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_1_81c8c36d-146a-44d9-a88f-43a22307d808_1800x1800.jpg?v=1644862572",
    ],
  },
  {
    DispName: "Avalon Lemon & Verbena",
    dNameSub: "Vitamin C Glow Body Lotion",
    name: "VITAMIN C GLOW BODY LOTION (AVALON LEMON & VERBENA) ",
    price: 595.0,
    size: 300,
    review: 13,
    discription:
      "Citrusy & lightweight body serum lotion with 3 types of vitamin C that hydrates & tones for soft, bright & glowing skin. ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Natural_Glow.png?v=1636460322",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Calms_Soothes.png?v=1636458476",
    ],
    features: ["Hydrates Skin", "Adds Natural Glow", "Calm & Soothes Skin"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/7-Lemon-Serum_bbf78342-bda8-4ac3-bc9b-42b4bb036a6c.png?v=1636543472",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_serum_lotion.jpg?v=1636543398",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_4_1800x1800.jpg?v=1641964129",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_4_1800x1800.jpg?v=1641964129",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_4_1800x1800.jpg?v=1641964129",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_4_1800x1800.jpg?v=1641964129",
    ],
  },
];
let bodyButterData = [
  {
    DispName: "Cocoa & French Vanilla",
    dNameSub: "Rich Body Butter With 10% SHEA",
    name: "VITAMIN C GLOW BODY LOTION (AVALON LEMON & VERBENA) ",
    price: 595.0,
    size: 200,
    review: 27,
    discription:
      "A warm, melt-in-your-skin body butter with the goodness of 10% shea & cocoa butter for intense hydration leaving skin ultra-soft, smooth & glowing with the lingering essence of vanilla.  ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Skin_Damage.png?v=1636455537",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Fades_Strech_Marks.png?v=1636455741",
    ],
    features: [
      "Intensely moisturizes",
      "Reduces Skin Damage",
      "Fades Strech Marks",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Cocoa-Body-Butter_1cdb3a0d-ce99-468a-98c9-55130b91542f.png?v=1638788914",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/cocoa_butter.jpg?v=1638789166",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_1800x1800.jpg?v=1644862704",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_15_1800x1800.jpg?v=1644862704",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_1800x1800.jpg?v=1644862704",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_1800x1800.jpg?v=1644862704",
    ],
  },
  {
    DispName: "Damask Rose & Lavender",
    dNameSub: "Velvet Body Butter With 5% SHEA",
    name: "VELVET ROSE BODY BUTTER WITH 5% SHEA  ",
    price: 595.0,
    size: 200,
    review: 32,
    discription:
      "A luxurious body butter lovingly whipped with 5% Shea Butter to moisturize, handpicked damask roses to add a dewy glow & lavender oil to keep your senses calm  ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/12.png?v=1636614450",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/6_2383de78-f32e-4870-a46c-3f56ce769df0.png?v=1636614450",
    ],
    features: ["Intensely moisturizes", "Evens SKIN TONE", "Reduces redness"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Rose-Body-Butter_638146c1-a774-448e-bc2d-4636ce05fda9.png?v=1636542687",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/rose_butter_1.jpg?v=1636542538",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_2_1800x1800.png?v=1644862556",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_1_1800x1800.png?v=1644862556",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_1_1800x1800.png?v=1644862556",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_1_1800x1800.png?v=1644862556",
    ],
  },
  {
    DispName: "Avalon Lemon & Vitamin C",
    dNameSub: "Yoghurt Glow Body Moisturizer",
    name: "Yoghurt GLOW Body Moisturizer WITH Avalon Lemon VITAMIN C   ",
    price: 495.0,
    size: 200,
    review: 20,
    discription:
      "Get happy, bouncy skin with lemony zing! A soft cushiony body yoghurt squeezed with Avalon Lemon & Verbena, it hydrates & pampers for even-toned, fresh & glowing skin.   ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Intensely_Moisturize.png?v=1636455493",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
    ],
    features: [
      "Intensely moisturizes",
      "Brightens SKIN",
      "Breaks DownCellulite",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-Lemon-Moisturizer.png?v=1636543528",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/lemon_moist_1.jpg?v=1636543651",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-6_5_1800x1800.jpg?v=1641964153",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_5_1800x1800.jpg?v=1641964153",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_5_1800x1800.jpg?v=1641964153",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_5_1800x1800.jpg?v=1641964153",
    ],
  },
];
let comboData = [
  {
    DispName: "Citrus Crush Combo",
    name: "Citrus Crush Combo  ",
    price: 1140.0,
    review: 8,
    discription:
      "Tease & tickle your senses with the citrus zing! Meet our Citrus Crush Combo, freshly squeezed with lemony goodness and vitamin C, both the products work together to smoothen, soften and brighten your skin leaving it fresh and energized.    ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Breaks_Down_Cellulite.png?v=1636458132",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Natural_Glow.png?v=1636460322",
    ],
    features: [
      "Exfoliates skin",
      "Breaks Down Cellulite",
      "Adds a Natural Glow",
    ],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3.2.gif?v=1643717611",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3.5.jpg?v=1643717611",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_8_1800x1800.jpg?v=1643717568",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3.1_2_1800x1800.jpg?v=1643717570",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_8_1800x1800.jpg?v=1643717568",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3.1_2_1800x1800.jpg?v=1643717570",
    ],
  },
  {
    DispName: "Rosy Affair Combo",
    name: "Rosy Affair Combo  ",
    price: 1140.0,
    review: 8,
    discription:
      "Get ready for some serious rosy romance with the Rosy Affair Combo. Curated lovingly with our all-time indulgent rose body serum lotion and rose gel scrub, wrap your body and your senses with the goodness of handpicked Damask Roses for nourished, glowing skin that smells sensual yet sweet like roses.    ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Exfoliates_Skin.png?v=1636458477",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Adds_Dewey_Glow.png?v=1636458476%20style=",
    ],
    features: ["Exfoliates skin", "Brightens skin", "Adds a Dewy Glow"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2.2.gif?v=1643715435",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2.5.jpg?v=1643715674",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_9_1800x1800.jpg?v=1643714860",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2.1_2_1800x1800.jpg?v=1643714860",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2_9_1800x1800.jpg?v=1643714860",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/2.1_2_1800x1800.jpg?v=1643714860",
    ],
  },
  {
    DispName: "Soft & Glow Combo",
    name: "Soft & Glow Combo  ",
    price: 1190.0,
    review: 7,
    discription:
      "Searching for the key to Happy Body? Find it with Soft & Glow Combo. Curated with our hydrating body serum lotions, this combo is ideal for all skin types. Whether your body is craving for a floral freshness or citrus zing, we have got you (or your body) covered all day, every day!   ",
    featurHead: "Feel the Love",
    featuresImg: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Hydrates_Skin.png?v=1636459852",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Brightens_Skin.png?v=1636458023",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Reduces_Dark_Spots.png?v=1636459850",
    ],
    features: ["Hydrates skin", "Brightens skin", "Reduces Dark spots"],
    promo0: "Made With Love",
    promo2: "Slather not Slurp",
    promo1:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1.2.gif?v=1643713243",
    promo3:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1.5.jpg?v=1643713223",

    prodImgUrl: [
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7_1800x1800.jpg?v=1643713066",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1.1_3_1800x1800.jpg?v=1643713067",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_7_1800x1800.jpg?v=1643713066",
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1.1_3_1800x1800.jpg?v=1643713067",
    ],
  },
];

let scrubParent = document.querySelector("#scrubCard")
let serumParent = document.querySelector("#serumCard")
let butterParent = document.querySelector("#butterCard")
let comboParent = document.querySelector("#comboCard")
createProductCard(bodyScrubData,scrubParent);
createProductCard(bodySerumData,serumParent);
createProductCard(bodyButterData,butterParent);
createProductCard(comboData,comboParent);

document.querySelector("#mainProduct>div:nth-child(1)").addEventListener("click",()=>{
  location.href = "#butter";
});
document.querySelector("#mainProduct>div:nth-child(2)").addEventListener("click",()=>{
  location.href = "#serum";
})
document.querySelector("#mainProduct>div:nth-child(3)").addEventListener("click",()=>{
  location.href = "#scrub";
})
