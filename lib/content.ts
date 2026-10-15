export const nutrition = {
  protein: "20g",
  caffeine: "80mg",
};

export const hero = {
  titleWords: ["Meet", "Pocket", "Puddings"],
  subhead: "Serious nutrition. Squeezably delicious.",
  body: "A protein-packed, caffeinated pudding made for people with places to be, companies to build, and absolutely no time for another sad protein bar.",
  kicker: "Toss it in your bag. Squeeze whenever. Conquer whatever.",
  cta: "Pre-order now!",
  ctaNote: "Get 20% off your first order!",
};

export const preorder = {
  title: "Get first dibs.",
  subtitle: "Two ways to get your hands on the very first pouches.",
  order: {
    label: "Option 1",
    title: "Pre-order now",
    pack: "Pack of 6 pouches",
    fullPrice: "$30",
    price: "$24",
    priceNote: "paid today",
    explainer: "That\u2019s 20% off the $30 pack price for paying upfront. We\u2019ll ship your 6 pouches as soon as the first batch is ready.",
    cta: "Pre-order for $24",
    secure: "Secure checkout with Stripe",
    unavailable: "Pre-orders open very soon",
  },
  list: {
    label: "Option 2",
    title: "Join the mailing list",
    body: "Not ready to commit? Get launch news, restock alerts, and the occasional pudding pun.",
    placeholder: "you@company.com",
    cta: "Join the list",
    pending: "Joining\u2026",
    fine: "No spam. Unsubscribe anytime.",
  },
};

export const marquee = [
  "squeeze.",
  "seal.",
  "carry on.",
  "big goals.",
  "tiny pouch.",
  "no spoon required.",
];

export const benefits = [
  {
    id: "portability",
    eyebrow: "Benefit 01 / Portability",
    title: "Your nutrition now travels business class.",
    paragraphs: [
      "Pocket Puddings delivers grab-and-go nutrition in a portable, resealable pouch. Take a squeeze between meetings, twist the cap back on, and toss it into your bag for later.",
      "No spoon. No shaker bottle. No suspicious powder floating around your laptop.",
    ],
    punchline: "Just squeeze, seal, and carry on.",
  },
  {
    id: "delicious",
    eyebrow: "Benefit 02 / Delicious",
    title: "Good for your body. Even better for your soul.",
    paragraphs: [
      "Rich, creamy pudding that tastes like dessert\u2014and fuels you like it has somewhere important to be.",
      "Because eating well shouldn\u2019t feel like a punishment for having taste buds. Pocket Puddings brings back the joy of your childhood pudding cup, now with grown-up ingredients and considerably better career prospects.",
    ],
  },
  {
    id: "nutrition",
    eyebrow: "Benefit 03 / Nutrition",
    title: "More fuel. Fewer logistics.",
    paragraphs: [
      `Each pouch combines ${nutrition.protein} of protein with ${nutrition.caffeine} of caffeine, giving you an easy way to stay energized and hit your nutrition goals\u2014even when lunch is looking increasingly theoretical.`,
      "It\u2019s breakfast, coffee, and a sweet little treat in one pocket-sized pouch.",
    ],
    list: [
      ["Efficient?", "Extremely."],
      ["Delicious?", "Obviously."],
      ["A personality replacement?", "We\u2019re working on it."],
    ],
  },
] as const;

export const testimonials = {
  title: "Fueling people with aggressively full calendars.",
  items: [
    {
      quote:
        "Pocket Puddings lives in my work bag. It has saved me from more accidental 4 p.m. \u2018lunches\u2019 than I\u2019d like to admit.",
      name: "[Verified Customer Name]",
      role: "Investment Banking Associate",
    },
    {
      quote:
        "I used to choose between coffee, breakfast, and being on time. Now I don\u2019t have to\u2014and my calendar remains deeply unreasonable.",
      name: "[Verified Customer Name]",
      role: "Management Consultant",
    },
    {
      quote:
        "It tastes like dessert, has protein, and requires zero preparation. Frankly, it\u2019s more operationally efficient than most startups.",
      name: "[Verified Customer Name]",
      role: "Series A Founder",
    },
    {
      quote:
        "I keep one beside my laptop for the moment I realize I\u2019ve been debugging for six hours and have eaten nothing.",
      name: "[Verified Customer Name]",
      role: "Software Engineer",
    },
  ],
};

export const howTo = {
  title: "Pudding at the speed of your schedule.",
  steps: [
    {
      title: "Grab it",
      body: "Take a pouch from the fridge and throw it into your bag.",
    },
    {
      title: "Squeeze it",
      body: "Twist open the cap and enjoy it straight from the pouch\u2014no spoon or preparation required.",
    },
    {
      title: "Seal it",
      body: "Not finished? Recap it and save the rest for later.",
    },
    {
      title: "Keep moving",
      body: "Return to your meeting, workout, commute, launch, pitch, or mild professional emergency.",
    },
  ],
};

export const useCases = {
  title: "Fits into your life. Even when lunch doesn\u2019t.",
  items: [
    {
      title: "The Commute",
      body: "Enjoy it on the subway, in an Uber, or during that suspiciously short walk between meetings.",
    },
    {
      title: "The Grab-and-Go Breakfast",
      body: "Breakfast for people who believe \u201cmorning routine\u201d means locating their keys.",
    },
    {
      title: "The Gym-Bag Essential",
      body: "Get protein before or after your workout without carrying a shaker bottle that smells permanently haunted.",
    },
    {
      title: "The Desk-Side Rescue",
      body: "Keep one nearby for back-to-back calls, unexpected deadlines, and calendars designed by your enemies.",
    },
    {
      title: "The Better Topping",
      body: "Squeeze it over yogurt, granola, fruit, or oatmeal for extra flavor, protein, and caffeine.",
    },
    {
      title: "The Meal\u2014or the Plus-One",
      body: "Have it by itself when you\u2019re truly pressed for time, or pair it with a meal whenever your nutrition needs a little backup.",
    },
  ],
};

export const metrics = {
  title: "Small pouch. Overachieving r\u00e9sum\u00e9.",
  items: [
    { value: nutrition.protein, label: "Protein per pouch" },
    { value: nutrition.caffeine, label: "Caffeine per pouch" },
    { value: "1", label: "Resealable, pocket-sized package" },
    { value: "0", label: "Spoons, shakers, or preparation required" },
    {
      value: "Seconds",
      label: "Between \u201cI forgot to eat\u201d and \u201cproblem solved\u201d",
    },
  ],
};

export const story = {
  title: "Born from all-nighters and a very serious sweet tooth.",
  paragraphs: [
    "Pocket Puddings started in college, when I was juggling classes, late-night projects, and the earliest stages of building a company.",
    "My schedule ran on caffeine. My sweet tooth demanded dessert. And somewhere in between, I was still trying to hit my protein goals.",
    "The available options made me choose: nutrition that felt joyless, dessert that did very little for me, or another drink I didn\u2019t particularly want. Nothing brought together the convenience I needed, the nutrition I wanted, and the simple pleasure of eating something genuinely delicious.",
    "So I made Pocket Puddings: a nostalgic treat reimagined for ambitious adult lives.",
    "It\u2019s playful without being childish. Functional without tasting functional. And convenient enough to keep up with people who are always moving\u2014even when their meals aren\u2019t.",
    "Because you shouldn\u2019t have to slow down to fuel yourself. But you should still get to enjoy it.",
  ],
};

export const finalCta = {
  title: "Your calendar is full. Your stomach shouldn\u2019t be empty.",
  body: "Stock your desk. Fill your fridge. Rescue your future self from another protein bar eaten without enthusiasm.",
  offerLead: "Get ",
  offer: "20% off your first bulk order",
  offerTail: " and keep seriously delicious nutrition within squeezing distance.",
  cta: "Try Pocket Puddings",
  signoff: "Big goals. Tiny pouch.",
};
