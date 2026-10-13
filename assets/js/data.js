/**
 * Balloon Decoration Patna - Catalogue & Service Data
 * Service catalogue & lead-generation data.
 * Client Phone / WhatsApp: +91 91358 23576
 * Note: Prices are starting estimates for standard home setups in Patna.
 */

const BUSINESS_CONFIG = {
    businessName: "Balloon Decoration Patna",
    phoneDisplay: "+91 91358 23576",
    phoneRaw: "+919135823576",
    whatsappNumber: "919135823576",
    city: "Patna, Bihar",
    address: "Boring Road & Bailey Road Hub, Patna, Bihar 800001",
    googleMapsUrl: "https://maps.google.com/?q=Patna,+Bihar",
    hours: "Open Everyday: 8:00 AM - 10:00 PM",
    rating: 4.9,
    reviewsCount: "500+",
    yearsInService: "5+",
    startingPrice: 1499
};

const OCCASIONS = [
    { id: "all", name: "All Designs", count: 29, icon: "grid", image: "./assets/images/hero/hero-balloon-banner.webp" },
    { id: "birthday", name: "Birthday", count: 9, icon: "cake", image: "./assets/images/categories/cat-birthday.webp" },
    { id: "anniversary", name: "Anniversary", count: 5, icon: "heart", image: "./assets/images/categories/cat-anniversary.webp" },
    { id: "room-decoration", name: "Room Decoration", count: 4, icon: "home", image: "./assets/images/categories/cat-room.webp" },
    { id: "baby-welcome", name: "Baby Welcome", count: 5, icon: "smile", image: "./assets/images/categories/cat-baby-welcome.webp" },
    { id: "baby-shower", name: "Baby Shower", count: 2, icon: "gift", image: "./assets/images/categories/cat-baby-shower.webp" },
    { id: "balloon-arches", name: "Balloon Arches", count: 4, icon: "sparkles", image: "./assets/images/categories/cat-balloon-arches.webp" }
];

const PATNA_SERVICE_AREAS = [
    { name: "Boring Road", landmark: "Chauraha & AN College Area" },
    { name: "Bailey Road", landmark: "Saguna More to High Court" },
    { name: "Kankarbagh", landmark: "Tempo Stand & Doctors Colony" },
    { name: "Danapur", landmark: "Danapur Cantt & Station Road" },
    { name: "Patliputra Colony", landmark: "Golambar & Industrial Area" },
    { name: "Rajendra Nagar", landmark: "Stadium & Terminal Area" },
    { name: "Saguna More", landmark: "Khagaul Road & Rukanpura" },
    { name: "Ashiana Nagar", landmark: "Ashiana-Digha Road" },
    { name: "Fraser Road & Dak Bungalow", landmark: "Central Patna" },
    { name: "Exhibition Road", landmark: "Gandhi Maidan Vicinity" },
    { name: "Anisabad & Phulwari Sharif", landmark: "Airport bypass" },
    { name: "Gola Road", landmark: "Danapur-Bailey Road link" },
    { name: "Patna City", landmark: "Mangal Talab & Chowk" },
    { name: "Digha & Kurji", landmark: "Ganga Path / Marine Drive" }
];

const FAQS_DATA = [
    {
        q: "How do I book a balloon decoration in Patna?",
        a: "Simply find a design you like on our catalogue and click the 'Enquire on WhatsApp' button, or call us at +91 91358 23576. Our team will verify your event date, confirm your address in Patna, discuss color customisations, and reserve your decorator slot. No online payment is required on this website."
    },
    {
        q: "Do you provide same-day balloon decoration in Patna?",
        a: "Yes! We offer same-day decoration services across major areas in Patna (Boring Road, Kankarbagh, Bailey Road, Danapur, Patliputra, etc.). We recommend booking at least 3 to 4 hours before your planned celebration so our decorators can arrive and style your setup on time."
    },
    {
        q: "Will the balloons and tape damage our room wall paint?",
        a: "Not at all. We strictly use premium wall-safe removable masking tape and gentle glue dots that leave zero marks or residue on home walls, wallpapers, and false ceilings. Our decorators are professionally trained in damage-free party installations."
    },
    {
        q: "Can I customise the balloon colors and theme?",
        a: "Absolutely! Every setup is 100% customisable. You can select your preferred color palette (Pastel pink, royal blue, chrome gold, metallic silver, black & champagne, etc.), add customized name letters, age foil digits, or special LED neon signs upon request via WhatsApp."
    },
    {
        q: "How does pricing and payment work? Why is there no checkout on this website?",
        a: "This website is a direct service catalogue and lead-generation portal designed to connect you with our local Patna decorators with zero middlemen commissions. Prices shown are estimated starting packages. The final quote is confirmed directly with you on WhatsApp depending on your custom requirements and venue, and payment is settled conveniently via cash or UPI directly with the decorator after the setup is completed to your satisfaction."
    },
    {
        q: "Do you decorate hotel rooms or banquet halls in Patna?",
        a: "Yes, we regularly decorate hotel rooms and suites across Patna (Hotel Maurya, Lemon Tree, The Panache, Patliputra Continental, fronting Ganga Marine Drive, etc.) as well as banquet halls and restaurants. We adhere to hotel policies and use non-damaging materials."
    }
];

const REVIEWS_DATA = [
    {
        name: "Pooja Sharma",
        location: "Boring Road, Patna",
        rating: 5,
        date: "2 weeks ago",
        review: "Booked the surprise birthday setup for my husband at midnight. The decorators arrived punctually, were extremely polite, and set up everything in just 1.5 hours without damaging our wall paint. He was completely shocked! Highly recommended in Patna.",
        occasion: "Birthday Surprise"
    },
    {
        name: "Amitabh Kumar",
        location: "Kankarbagh, Patna",
        rating: 5,
        date: "1 month ago",
        review: "Super smooth WhatsApp booking. I enquired for my baby girl's welcome home decoration. The pastel balloon arch was even prettier than the photo. Transparent pricing and very humble staff.",
        occasion: "Baby Welcome"
    },
    {
        name: "Sneha & Rahul",
        location: "Bailey Road, Patna",
        rating: 5,
        date: "3 weeks ago",
        review: "The circular metal ring anniversary setup with warm fairy lights made our 5th anniversary celebration magical. Clean work and no mess left behind.",
        occasion: "Anniversary Ring Arch"
    },
    {
        name: "Vikram Singh",
        location: "Danapur, Patna",
        rating: 5,
        date: "Just yesterday",
        review: "Needed urgent same-day balloon decoration within 3 hours for my kid's birthday. Balloon Decoration Patna arranged everything promptly. Great quality chrome balloons that stayed inflated for 3 days!",
        occasion: "Same-Day Kids Birthday"
    }
];

const PRODUCTS_DATA = [
    {
        "id": "surprise-birthday-decoration-for-husband",
        "title": "Surprise Birthday Decoration for Husband",
        "category": "Birthday",
        "startingPrice": 6499,
        "originalPrice": 7999,
        "badge": "Best Seller",
        "rating": 5.0,
        "reviewsCount": 48,
        "image": "./assets/images/products/surprise-birthday-decoration-for-husband.webp",
        "additionalImages": [
            "./assets/images/products/surprise-birthday-decoration-for-husband.webp",
            "./assets/images/products/premium-birthday-room-decoration.webp",
            "./assets/images/products/birthday-background-decoration.webp"
        ],
        "shortDescription": "Romantic midnight birthday surprise setup with metallic foil balloons, ambient fairy lights, and personalized photo clips.",
        "detailedDescription": "Plan an unforgettable surprise for your husband in Patna! This premium setup features elegant metallic black, chrome gold, and deep burgundy balloons, complemented by glowing warm-white fairy lights, personalized Happy Birthday bunting, and hanging memory photo clips.",
        "inclusions": [
            "200 Chrome Gold, Black & Champagne Latex Balloons",
            "Happy Birthday Foil Banner (Golden / Rose Gold)",
            "2 Large Champagne Bottle & Glass Foil Balloons",
            "15 Hanging Photo Clips with fairy LED lights (send photos to decorator)",
            "10 Floating Helium-look Ceiling Balloons with Curly Ribbons",
            "Electric blower setup by trained Patna decorator"
        ],
        "setupTime": "2 - 2.5 hours",
        "customisation": "Color palette customizable (Black & Gold, Blue & Silver, or Rose Gold). Age foil numbers can be added.",
        "safetyNote": "Damage-free masking tape and glue dots that leave zero marks on home walls."
    },
    {
        "id": "birthday-celebration-decoration-home",
        "title": "Birthday Celebration Decoration at Home",
        "category": "Birthday",
        "startingPrice": 2299,
        "originalPrice": 2999,
        "badge": "Popular in Patna",
        "rating": 4.9,
        "reviewsCount": 62,
        "image": "./assets/images/products/birthday-celebration-decoration-home.webp",
        "additionalImages": [
            "./assets/images/products/birthday-celebration-decoration-home.webp",
            "./assets/images/products/birthday-balloon-decoration-home.webp",
            "./assets/images/products/happy-birthday-decoration-at-home.webp"
        ],
        "shortDescription": "Classic home birthday balloon backdrop with colorful organic cluster garland and Happy Birthday banner.",
        "detailedDescription": "A cheerful, vibrant birthday balloon setup perfect for living rooms, drawing rooms, or terrace halls anywhere in Patna. Creates an instant party atmosphere for all age groups.",
        "inclusions": [
            "120 Pastel & Metallic Balloons (Pink, Purple, Silver or custom choice)",
            "1 'Happy Birthday' Foil Banner",
            "4 Star Foil Balloons (18 inches)",
            "1 LED Pixel Fairy String Light (10 meters)",
            "Ceiling and wall styling with curls"
        ],
        "setupTime": "1.5 hours",
        "customisation": "Available in 6 different color combinations upon request on WhatsApp.",
        "safetyNote": "100% wall-safe adhesive dots used."
    },
    {
        "id": "birthday-background-decoration",
        "title": "Grand Birthday Background Arch Decoration",
        "category": "Balloon Arches",
        "startingPrice": 6999,
        "originalPrice": 7999,
        "badge": "Premium Setup",
        "rating": 5.0,
        "reviewsCount": 35,
        "image": "./assets/images/products/birthday-background-decoration.webp",
        "additionalImages": [
            "./assets/images/products/birthday-background-decoration.webp",
            "./assets/images/products/anniversary-balloon-arch-decoration.webp",
            "./assets/images/products/rainbow-theme-birthday-decoration.webp"
        ],
        "shortDescription": "Full metallic circle ring backdrop with cascading organic balloon garland, neon signage, and artificial florals.",
        "detailedDescription": "Make your celebration in Patna look straight out of Pinterest! Features a sturdy circular arch frame enveloped with lush multi-sized balloons, delicate eucalyptus/flower accents, and bright neon light.",
        "inclusions": [
            "Complete Round Metal Arch Ring (on rental for event)",
            "250+ Organic Garland Balloons in custom tones",
            "Neon 'Happy Birthday' or 'Party' Signboard",
            "Artificial Floral & Pampas Grass accents",
            "Cake table balloon bunches & spotlight effect"
        ],
        "setupTime": "2.5 - 3 hours",
        "customisation": "Choose any pastel, metallic, or retro balloon color scheme. Name cutout can be arranged.",
        "safetyNote": "Freestanding metal ring requires zero wall nailing or drilling."
    },
    {
        "id": "baby-birthday-decoration",
        "title": "Cute Baby 1st Birthday Balloon Decor",
        "category": "Birthday",
        "startingPrice": 2299,
        "originalPrice": 2499,
        "badge": "Kids Favorite",
        "rating": 4.9,
        "reviewsCount": 54,
        "image": "./assets/images/products/baby-birthday-decoration.webp",
        "additionalImages": [
            "./assets/images/products/baby-birthday-decoration.webp",
            "./assets/images/products/birthday-decorations-for-kids.webp"
        ],
        "shortDescription": "Sweet pastel celebration for your baby boy or girl's 1st birthday milestone.",
        "detailedDescription": "Designed specifically for gentle baby celebrations in Patna homes. Includes pastel baby tones, jumbo digit '1' foil balloon, cute star & heart foils, and baby-friendly soft balloon floor bunches.",
        "inclusions": [
            "100 Pastel Pink/Baby Blue & Cream Latex Balloons",
            "1 Jumbo 32-inch Digit '1' Foil Balloon",
            "Baby Crown / Star foil balloons",
            "Happy 1st Birthday card bunting",
            "Floor balloon fill for photoshoot fun"
        ],
        "setupTime": "1.5 hours",
        "customisation": "Can be adapted for 2nd, 3rd, or 5th birthdays with matching digit foils.",
        "safetyNote": "Safe non-toxic latex balloons; gentle wall adhesives."
    },
    {
        "id": "simple-birthday-decoration-home",
        "title": "Simple Birthday Decoration at Home",
        "category": "Birthday",
        "startingPrice": 1499,
        "originalPrice": 1999,
        "badge": "Best Value",
        "rating": 4.8,
        "reviewsCount": 89,
        "image": "./assets/images/products/simple-birthday-decoration-home.webp",
        "additionalImages": [
            "./assets/images/products/simple-birthday-decoration-home.webp",
            "./assets/images/products/simple-birthday-decoration-room.webp"
        ],
        "shortDescription": "Quick, budget-friendly balloon wall backdrop for low-key home celebrations across Patna.",
        "detailedDescription": "The perfect starting package for intimate family gatherings, midnight cake cuttings, or roommate surprises in Patna. Clean, neat, and highly photogenic.",
        "inclusions": [
            "80 High-quality Metallic Balloons",
            "Happy Birthday Golden Foil Banner",
            "2 Foil Curtains (Golden/Silver/Rose Gold)",
            "2 Star Foil Balloons",
            "Curling ribbons and floor balloons"
        ],
        "setupTime": "1 hour",
        "customisation": "Choice of Golden-Black, Pink-White, Blue-Silver, or Red-Gold themes.",
        "safetyNote": "Easy peel-off wall tape included."
    },
    {
        "id": "birthday-decoration-for-wife",
        "title": "Romantic Birthday Decoration for Wife",
        "category": "Birthday",
        "startingPrice": 2499,
        "originalPrice": 2999,
        "badge": "Trending",
        "rating": 5.0,
        "reviewsCount": 44,
        "image": "./assets/images/products/birthday-decoration-for-wife.webp",
        "additionalImages": [
            "./assets/images/products/birthday-decoration-for-wife.webp",
            "./assets/images/products/surprise-birthday-decoration.webp"
        ],
        "shortDescription": "Heart foils, rose petals styling, fairy lights, and romantic rose-gold balloons to delight your wife.",
        "detailedDescription": "Treat your wife to a magical surprise in Patna with this dreamy romantic setup. Features rose gold and blush pink balloons, heart foil accents, soft LED lights, and lovely ceiling danglers.",
        "inclusions": [
            "130 Rose Gold, White & Metallic Pink Balloons",
            "5 Large Red/Pink Heart Foil Balloons",
            "Happy Birthday Rose Gold Foil Letters",
            "Warm LED Rice Fairy Lights (10m)",
            "Bed & Floor balloon clusters with curling ribbons"
        ],
        "setupTime": "1.5 - 2 hours",
        "customisation": "Optional artificial rose petal pathway and tea-light candles upon WhatsApp request.",
        "safetyNote": "Wall-safe tape safe for wallpaper and paint."
    },
    {
        "id": "rainbow-theme-birthday-decoration",
        "title": "Pastel Rainbow Theme Birthday Arch",
        "category": "Balloon Arches",
        "startingPrice": 3499,
        "originalPrice": 4299,
        "badge": "Trending",
        "rating": 4.9,
        "reviewsCount": 38,
        "image": "./assets/images/products/rainbow-theme-birthday-decoration.webp",
        "additionalImages": [
            "./assets/images/products/rainbow-theme-birthday-decoration.webp",
            "./assets/images/products/car-theme-birthday-decor.webp"
        ],
        "shortDescription": "Multi-colored pastel organic balloon arch creating a dreamy rainbow backdrop for kids & teens.",
        "detailedDescription": "Bring vibrant joy to your child's birthday with this whimsical pastel rainbow balloon arch in Patna. Muted macaron pastel tones of mint, peach, lavender, pastel yellow, and sky blue make stunning photos.",
        "inclusions": [
            "180 Macaron Pastel Balloons in 5 rainbow shades",
            "Half-arch / L-shaped organic wall garland",
            "1 Large Rainbow Foil / Cloud Foil Balloon",
            "Happy Birthday 3D Banner",
            "Floor cluster clouds"
        ],
        "setupTime": "2 hours",
        "customisation": "Customizable size depending on your living room or party venue wall.",
        "safetyNote": "Damage-free adhesive hooks and wall-safe dots."
    },
    {
        "id": "car-theme-birthday-decor",
        "title": "Kids Car Theme Birthday Decoration",
        "category": "Birthday",
        "startingPrice": 3999,
        "originalPrice": 4799,
        "badge": "Kids Theme",
        "rating": 4.9,
        "reviewsCount": 27,
        "image": "./assets/images/products/car-theme-birthday-decor.webp",
        "additionalImages": [
            "./assets/images/products/car-theme-birthday-decor.webp",
            "./assets/images/products/birthday-decorations-for-kids.webp"
        ],
        "shortDescription": "Racing cars, traffic track balloons, and bold colors for boys and girls who love vehicles.",
        "detailedDescription": "Rev up the celebration! Includes checkered racing flag foil banners, 3D sports car foils, tire-style balloon bunches, and bold red, black, and yellow accents.",
        "inclusions": [
            "150 Red, Black & Yellow Glossy Balloons",
            "2 Large Racing Sports Car Foil Balloons",
            "Checkered Flag Backdrop / Bunting",
            "Traffic light balloon column",
            "Digit foil balloon for child's age"
        ],
        "setupTime": "2 hours",
        "customisation": "Choice of Lightning McQueen theme or Hot Wheels style.",
        "safetyNote": "Sturdy indoor freestanding stands used where possible."
    },
    {
        "id": "happy-birthday-decoration-home",
        "title": "Golden Glam Happy Birthday Decor",
        "category": "Birthday",
        "startingPrice": 1999,
        "originalPrice": 2599,
        "badge": "Best Seller",
        "rating": 4.8,
        "reviewsCount": 73,
        "image": "./assets/images/products/happy-birthday-decoration-home.webp",
        "additionalImages": [
            "./assets/images/products/happy-birthday-decoration-home.webp",
            "./assets/images/products/birthday-wall-decoration-home.webp"
        ],
        "shortDescription": "Shimmering gold and silver balloon backdrop for elegant birthdays of all ages.",
        "detailedDescription": "Sleek and classy! A timeless combination of metallic gold, chrome silver, and pearl white balloons with shimmering foil curtains for effortless Instagram-ready photos.",
        "inclusions": [
            "100 Metallic Gold & Silver Latex Balloons",
            "2 Golden Shimmer Foil Tinsel Curtains",
            "Golden Happy Birthday Foil Letters",
            "4 Star Foil Accents",
            "Ceiling balloon bunches with ribbons"
        ],
        "setupTime": "1.5 hours",
        "customisation": "Black & Gold or Rose Gold & Champagne variations available.",
        "safetyNote": "Gentle peel-off tape."
    },
    {
        "id": "best-anniversary-balloon-decoration",
        "title": "Best Anniversary Balloon Decoration",
        "category": "Anniversary",
        "startingPrice": 2199,
        "originalPrice": 2799,
        "badge": "Best Seller",
        "rating": 5.0,
        "reviewsCount": 94,
        "image": "./assets/images/products/best-anniversary-balloon-decoration.webp",
        "additionalImages": [
            "./assets/images/products/best-anniversary-balloon-decoration.webp",
            "./assets/images/products/anniversary-balloon-decoration.webp",
            "./assets/images/products/balloon-decoration-for-anniversary-in-room.webp"
        ],
        "shortDescription": "Dreamy red and gold anniversary balloon setup with 'Happy Anniversary' foil banner & fairy lights.",
        "detailedDescription": "Celebrate your milestone anniversary with Patna's top-rated romantic setup. Perfect for surprising your spouse at home, in a hotel room, or a private dining area in Patna.",
        "inclusions": [
            "120 Metallic Red, Gold & Pearl White Balloons",
            "1 Complete 'Happy Anniversary' Foil Letter Set",
            "4 Jumbo Heart Foil Balloons (Red & Golden)",
            "10m Warm Glowing LED String Lights",
            "Floor balloon fill & ceiling hanging curls"
        ],
        "setupTime": "1.5 hours",
        "customisation": "Add anniversary year foil numbers (e.g. 1st, 5th, 10th, 25th Silver Jubilee) upon request.",
        "safetyNote": "Wall-safe tape ensures no peel of paint or wallpaper."
    },
    {
        "id": "anniversary-balloon-decoration",
        "title": "Romantic Heart Canopy Anniversary Decor",
        "category": "Anniversary",
        "startingPrice": 2299,
        "originalPrice": 2799,
        "badge": "Popular in Patna",
        "rating": 4.9,
        "reviewsCount": 51,
        "image": "./assets/images/products/anniversary-balloon-decoration.webp",
        "additionalImages": [
            "./assets/images/products/anniversary-balloon-decoration.webp",
            "./assets/images/products/balloon-anniversary-decoration.webp"
        ],
        "shortDescription": "Romantic bedroom balloon canopy with fairy light cascades and heart dangles.",
        "detailedDescription": "Transform your master bedroom into a romantic getaway in Patna! Features balloon canopy hanging ribbons, soft warm ambient lighting, heart foil accents, and pillow bunches.",
        "inclusions": [
            "130 Romantic Red & Rose Gold Balloons",
            "Ceiling Balloon Fill with hanging curl ribbons",
            "Heart Foil Balloons (Red)",
            "Happy Anniversary Golden Foil Banner",
            "LED Rice Light net / curtain"
        ],
        "setupTime": "1.5 - 2 hours",
        "customisation": "Custom message or couple name initials available on WhatsApp enquiry.",
        "safetyNote": "Zero damage to walls or false ceiling."
    },
    {
        "id": "anniversary-balloon-arch-decoration",
        "title": "Grand Anniversary Ring Arch Decoration",
        "category": "Balloon Arches",
        "startingPrice": 3999,
        "originalPrice": 4999,
        "badge": "Premium Decor",
        "rating": 5.0,
        "reviewsCount": 36,
        "image": "./assets/images/products/anniversary-balloon-arch-decoration.webp",
        "additionalImages": [
            "./assets/images/products/anniversary-balloon-arch-decoration.webp",
            "./assets/images/products/balloon-decoration-for-anniversary-party.webp"
        ],
        "shortDescription": "Luxurious circular ring metal arch with dual-tone organic balloons and romantic signage.",
        "detailedDescription": "Ideal for 1st, 10th, or 25th milestone anniversaries celebrated in Patna banquets, hotel suites, or living rooms. The freestanding metal ring creates an enchanting photo booth.",
        "inclusions": [
            "Freestanding Metal Circular Ring Arch Frame (Rental)",
            "200+ Organic Balloons (Rose Gold, Champagne, Burgundy & White)",
            "Neon 'Better Together' or 'Happy Anniversary' Sign",
            "Delicate Floral & Pampas accents",
            "Decorator team setup & removal coordination in Patna"
        ],
        "setupTime": "2 - 2.5 hours",
        "customisation": "Personalized acrylic couple name board can be organized.",
        "safetyNote": "Freestanding frame \u2014 100% independent of walls."
    },
    {
        "id": "balloon-decoration-for-anniversary-in-room",
        "title": "Hotel / Room Anniversary Surprise Decor",
        "category": "Room Decoration",
        "startingPrice": 2499,
        "originalPrice": 2999,
        "badge": "Same-Day Setup",
        "rating": 4.9,
        "reviewsCount": 42,
        "image": "./assets/images/products/balloon-decoration-for-anniversary-in-room.webp",
        "additionalImages": [
            "./assets/images/products/balloon-decoration-for-anniversary-in-room.webp",
            "./assets/images/products/1-month-anniversary-decoration.webp"
        ],
        "shortDescription": "Discrete, quick setup for hotel rooms and private suites across Patna hotels (Maurya, Lemon Tree, Panache, etc.).",
        "detailedDescription": "Planning a surprise staycation in Patna? Our punctual decorators coordinate discreetly with you or hotel reception to set up an enchanting balloon wonderland before your arrival.",
        "inclusions": [
            "100 Premium Metallic & Pearl Balloons",
            "Heart Foils & Happy Anniversary Banner",
            "Bed decoration with heart balloon arrangement",
            "Ceiling floating effect balloons with curly ribbons",
            "LED fairy light bottle accents"
        ],
        "setupTime": "1 hour fast setup",
        "customisation": "Special setup coordination for Patna hotel rooms.",
        "safetyNote": "Zero trace, hotel-compliant removable tapes only."
    },
    {
        "id": "1-month-anniversary-decoration",
        "title": "1 Month / Milestone Love Celebration Decor",
        "category": "Anniversary",
        "startingPrice": 1999,
        "originalPrice": 2499,
        "badge": "Budget Friendly",
        "rating": 4.8,
        "reviewsCount": 31,
        "image": "./assets/images/products/1-month-anniversary-decoration.webp",
        "additionalImages": [
            "./assets/images/products/1-month-anniversary-decoration.webp",
            "./assets/images/products/balloon-anniversary-decoration.webp"
        ],
        "shortDescription": "Sweet and thoughtful celebration for newly married couples or relationship milestones.",
        "detailedDescription": "Celebrate your first month of marriage or dating anniversary with this charming, cozy setup tailored for cozy spaces.",
        "inclusions": [
            "80 Red, White & Rose Pink Balloons",
            "'I Love You' / 'Happy Anniversary' foil balloons",
            "2 Heart Shape Foils",
            "Fairy LED lights",
            "Floor balloon fill"
        ],
        "setupTime": "1 hour",
        "customisation": "Number '1' or customized month tag.",
        "safetyNote": "Wall-safe removable adhesives."
    },
    {
        "id": "room-birthday-balloon-decoration",
        "title": "Full Room Birthday Balloon Fill & Ceiling Ribbons",
        "category": "Room Decoration",
        "startingPrice": 1999,
        "originalPrice": 2499,
        "badge": "Best Seller",
        "rating": 4.9,
        "reviewsCount": 67,
        "image": "./assets/images/products/room-birthday-balloon-decoration.webp",
        "additionalImages": [
            "./assets/images/products/room-birthday-balloon-decoration.webp",
            "./assets/images/products/simple-birthday-decoration-room.webp",
            "./assets/images/products/premium-birthday-room-decoration.webp"
        ],
        "shortDescription": "Fill the entire room with colorful ceiling balloons, trailing ribbons, and a festive wall centerpiece.",
        "detailedDescription": "Step into a wonderland! This setup distributes balloons across your entire ceiling with dangling metallic ribbons, scatters bouncy balloons on the floor, and anchors the room with a sparkling wall banner.",
        "inclusions": [
            "150 Mixed Metallic & Glossy Latex Balloons",
            "50 Ceiling Balloons with sparkling ribbon curls",
            "50 Floor Balloons for playful ambiance",
            "Happy Birthday Foil Banner on focal wall",
            "2 Foil Stars or Hearts"
        ],
        "setupTime": "1.5 hours",
        "customisation": "Choose any dual-tone color scheme (e.g., Blue & Silver, Purple & Pink, Black & Gold).",
        "safetyNote": "Gentle wall dots that peel cleanly without peeling paint."
    },
    {
        "id": "premium-birthday-room-decoration",
        "title": "Premium Luxury Bedroom Birthday Makeover",
        "category": "Room Decoration",
        "startingPrice": 4999,
        "originalPrice": 5999,
        "badge": "Luxury Pick",
        "rating": 5.0,
        "reviewsCount": 29,
        "image": "./assets/images/products/premium-birthday-room-decoration.webp",
        "additionalImages": [
            "./assets/images/products/premium-birthday-room-decoration.webp",
            "./assets/images/products/surprise-birthday-decoration-for-husband.webp"
        ],
        "shortDescription": "Lavish room styling with chrome balloon clusters, LED curtain, personalized photo wall, and foil ceiling danglers.",
        "detailedDescription": "When only the best will do! Designed to turn any standard bedroom or suite in Patna into an opulent VIP lounge. Ideal for 18th, 21st, 25th, 30th, or 50th golden birthdays.",
        "inclusions": [
            "200 Chrome Metallic Balloons in luxury finishes",
            "Full LED fairy curtain backdrop (3m x 2m)",
            "Happy Birthday Neon Sign (Warm White)",
            "Champagne bottle & glass jumbo foils",
            "20 Photo prints hung with illuminated clips",
            "Floor bunches & door entrance balloon garland"
        ],
        "setupTime": "2.5 hours",
        "customisation": "Custom photo printing included (share 20 photos via WhatsApp).",
        "safetyNote": "Safe electrical connections and wall-safe adhesives."
    },
    {
        "id": "simple-birthday-decoration-room",
        "title": "Minimalist Room Balloon Setup",
        "category": "Room Decoration",
        "startingPrice": 1499,
        "originalPrice": 1899,
        "badge": "Budget Friendly",
        "rating": 4.8,
        "reviewsCount": 58,
        "image": "./assets/images/products/simple-birthday-decoration-room.webp",
        "additionalImages": [
            "./assets/images/products/simple-birthday-decoration-room.webp",
            "./assets/images/products/birthday-wall-decoration-home.webp"
        ],
        "shortDescription": "Neat, modern, clutter-free room decor with focused wall accent and floor balloons.",
        "detailedDescription": "A clean, modern balloon concept focusing on one primary photography wall. Great for compact flats, PG rooms, or hostel birthdays in Patna.",
        "inclusions": [
            "70 Pastel & Chrome Balloons",
            "Foil Happy Birthday lettering",
            "2 Star Foil Accents",
            "Floor balloon fill",
            "Wall-safe styling"
        ],
        "setupTime": "1 hour",
        "customisation": "Available in Pastel Lilac, Mint Green, Baby Blue, or Rose Gold.",
        "safetyNote": "Damage-free wall stickers."
    },
    {
        "id": "birthday-wall-decoration-home",
        "title": "Accent Wall Photo-Booth Balloon Decor",
        "category": "Room Decoration",
        "startingPrice": 1799,
        "originalPrice": 2299,
        "badge": "Popular in Patna",
        "rating": 4.8,
        "reviewsCount": 47,
        "image": "./assets/images/products/birthday-wall-decoration-home.webp",
        "additionalImages": [
            "./assets/images/products/birthday-wall-decoration-home.webp",
            "./assets/images/products/birthday-celebration-decoration-home.webp"
        ],
        "shortDescription": "Create a dedicated selfie and cake-cutting accent wall in your living room.",
        "detailedDescription": "Focus all decoration energy on your best living room wall to create a breathtaking backdrop behind the cake cutting table.",
        "inclusions": [
            "90 Metallic Balloons in curated colors",
            "2 Shimmer Foil Fringe Curtains",
            "Happy Birthday Banner",
            "Fairy Lights across the backdrop",
            "Two balloon side pillars"
        ],
        "setupTime": "1.25 hours",
        "customisation": "Curtain colors: Rose Gold, Silver, Golden, or Royal Blue.",
        "safetyNote": "Zero damage to paint or wallpaper."
    },
    {
        "id": "welcome-decoration-for-new-born-baby",
        "title": "Welcome Home Newborn Baby Decoration",
        "category": "Baby Welcome",
        "startingPrice": 2699,
        "originalPrice": 3299,
        "badge": "Best Seller",
        "rating": 5.0,
        "reviewsCount": 81,
        "image": "./assets/images/products/welcome-decoration-for-new-born-baby.webp",
        "additionalImages": [
            "./assets/images/products/welcome-decoration-for-new-born-baby.webp",
            "./assets/images/products/new-born-baby-welcome-decor.webp",
            "./assets/images/products/welcome-home-balloon-decoration.webp"
        ],
        "shortDescription": "Heartfelt balloon homecoming welcome for mother and newborn from the hospital.",
        "detailedDescription": "Make the magical homecoming moment unforgettable! When mum and baby return home from the hospital in Patna, surprise them with a gentle pastel balloon setup featuring baby bottle foils, baby feet foils, and a 'Welcome Home Baby' banner.",
        "inclusions": [
            "120 Pastel Blue / Pink & White Soft Latex Balloons",
            "'Welcome Baby' Foil Letter Banner",
            "1 Cute Baby Footprint Foil Balloon",
            "1 Baby Bottle / Milk Cart Foil Balloon",
            "Gentle fairy string lights",
            "Door entrance greeting arch / garland"
        ],
        "setupTime": "1.5 hours",
        "customisation": "Customized for Baby Boy (Blue/Cloud), Baby Girl (Pink/Pastel), or Neutral (Yellow/Mint).",
        "safetyNote": "Wall-safe adhesives; decorators use electric blowers outside baby room for calm arrival."
    },
    {
        "id": "new-born-baby-welcome-decor",
        "title": "Grand Royal Newborn Welcome Balloon Arch",
        "category": "Baby Welcome",
        "startingPrice": 3999,
        "originalPrice": 4500,
        "badge": "Premium Setup",
        "rating": 5.0,
        "reviewsCount": 39,
        "image": "./assets/images/products/new-born-baby-welcome-decor.webp",
        "additionalImages": [
            "./assets/images/products/new-born-baby-welcome-decor.webp",
            "./assets/images/products/welcome-decoration-for-new-born-baby.webp"
        ],
        "shortDescription": "Deluxe homecoming setup with cradle decor, entrance arch, and jumbo baby foils.",
        "detailedDescription": "Celebrate the newest blessing in the family with a grand celebration across your Patna residence. Includes cradle/crib balloon styling, entrance balloon garland, and room ceiling fills.",
        "inclusions": [
            "180 Macaron Pastel Balloons",
            "Entrance Gate / Doorway Balloon Arch",
            "Baby Pram / Stroller 3D Foil Balloon",
            "'Welcome Little Prince / Princess' signage",
            "Crib & sofa accent styling with soft ribbons"
        ],
        "setupTime": "2 - 2.5 hours",
        "customisation": "Baby's name cutout or letter balloons can be included.",
        "safetyNote": "Safe, non-toxic, thoroughly wiped clean setups."
    },
    {
        "id": "welcome-decoration-for-new-born-girl",
        "title": "Welcome Home Decor for Baby Girl (Princess Theme)",
        "category": "Baby Welcome",
        "startingPrice": 2799,
        "originalPrice": 3499,
        "badge": "Popular in Patna",
        "rating": 4.9,
        "reviewsCount": 45,
        "image": "./assets/images/products/welcome-decoration-for-new-born-girl.webp",
        "additionalImages": [
            "./assets/images/products/welcome-decoration-for-new-born-girl.webp",
            "./assets/images/products/welcome-home-decoration-for-new-born-baby.webp"
        ],
        "shortDescription": "Dreamy blush pink, peach, and golden balloon fairytale welcome for a baby girl.",
        "detailedDescription": "Welcome your little angel home with this delicate pink dream. Includes princess crown foil balloon, 'It's a Girl' / 'Welcome Baby Girl' banner, and pastel balloon clusters.",
        "inclusions": [
            "130 Blush Pink, Peach, Cream & Chrome Gold Balloons",
            "1 Golden Princess Crown Foil Balloon",
            "'Welcome Little Princess' or 'It's a Girl' Banner",
            "2 Heart Shape Foils",
            "Warm LED lights along the focal wall"
        ],
        "setupTime": "1.5 hours",
        "customisation": "Name letter balloons can be added.",
        "safetyNote": "Damage-free wall stickers."
    },
    {
        "id": "home-decoration-for-new-baby-born",
        "title": "Cozy Home Decoration for Baby Boy (Prince Theme)",
        "category": "Baby Welcome",
        "startingPrice": 2499,
        "originalPrice": 2999,
        "badge": "Trending",
        "rating": 4.9,
        "reviewsCount": 38,
        "image": "./assets/images/products/home-decoration-for-new-baby-born.webp",
        "additionalImages": [
            "./assets/images/products/home-decoration-for-new-baby-born.webp",
            "./assets/images/products/room-decoration-for-new-born-baby.webp"
        ],
        "shortDescription": "Soft sky blue, pastel yellow, and white cloud balloon theme for welcoming a baby boy.",
        "detailedDescription": "Gentle, cheerful, and photo-ready! Designed to bring pure happiness to family members as they greet the new little boy.",
        "inclusions": [
            "120 Sky Blue, Pastel Yellow & Pearl White Balloons",
            "Cloud & Moon Foil Balloons",
            "'Welcome Baby Boy' Foil Banner",
            "Floor and ceiling cluster arrangements",
            "Fairy light backdrop"
        ],
        "setupTime": "1.5 hours",
        "customisation": "Palette adjustable to royal blue or mint green.",
        "safetyNote": "Zero damage removable tapes."
    },
    {
        "id": "welcome-home-balloon-decoration",
        "title": "Welcome Home Balloon Arch & Banner",
        "category": "Baby Welcome",
        "startingPrice": 2999,
        "originalPrice": 3699,
        "badge": "Same-Day Setup",
        "rating": 4.9,
        "reviewsCount": 41,
        "image": "./assets/images/products/welcome-home-balloon-decoration.webp",
        "additionalImages": [
            "./assets/images/products/welcome-home-balloon-decoration.webp",
            "./assets/images/products/welcome-home-decoration-for-new-born-baby.webp"
        ],
        "shortDescription": "Versatile welcome home balloon arrangement for new babies, returning family, or housewarmings.",
        "detailedDescription": "A welcoming arch that can be placed right at your flat's main gate or living room entrance to set a celebratory tone from the first step.",
        "inclusions": [
            "140 Dual-Tone Glossy Balloons",
            "Full Entrance Garland / Half-Arch",
            "'Welcome Home' Foil Lettering",
            "4 Star Foil Accents",
            "Fairy LED lights"
        ],
        "setupTime": "1.5 hours",
        "customisation": "Customizable banner text and color scheme.",
        "safetyNote": "Wall-safe adhesives and door-friendly mounting."
    },
    {
        "id": "baby-shower-balloon-decoration-at-home",
        "title": "Baby Shower Balloon Decoration at Home (Oh Baby!)",
        "category": "Baby Shower",
        "startingPrice": 2999,
        "originalPrice": 3699,
        "badge": "Best Seller",
        "rating": 5.0,
        "reviewsCount": 72,
        "image": "./assets/images/products/baby-shower-balloon-decoration-at-home.webp",
        "additionalImages": [
            "./assets/images/products/baby-shower-balloon-decoration-at-home.webp",
            "./assets/images/products/baby-shower-theme-decoration-home.webp"
        ],
        "shortDescription": "Elegant 'Oh Baby' pastel organic balloon backdrop with Mom-to-Be chair styling.",
        "detailedDescription": "Celebrate the Mom-to-Be in Patna with this picture-perfect Godh Bharai / Baby Shower balloon backdrop! Features soft pastel tones, golden 'Baby Shower' or 'Oh Baby' foil letters, delicate fairy lights, and a beautifully decorated seat for the mother.",
        "inclusions": [
            "150 Macaron Pastel Balloons (Peach, Mint, Blush Pink & Gold)",
            "'Oh Baby' or 'Baby Shower' Foil Banner / Cutout",
            "2 Large Baby Bottle / Pram Foil Balloons",
            "Special Mom-to-Be chair balloon garland & sash accent",
            "Fairy light warm glow backdrop"
        ],
        "setupTime": "2 hours",
        "customisation": "Custom gender-neutral, baby boy (blue), or baby girl (pink) color schemes available.",
        "safetyNote": "Damage-free wall tapes safe for home walls."
    },
    {
        "id": "baby-shower-theme-decoration-home",
        "title": "Deluxe Godh Bharai / Baby Shower Ring Setup",
        "category": "Baby Shower",
        "startingPrice": 3499,
        "originalPrice": 4299,
        "badge": "Trending",
        "rating": 4.9,
        "reviewsCount": 49,
        "image": "./assets/images/products/baby-shower-theme-decoration-home.webp",
        "additionalImages": [
            "./assets/images/products/baby-shower-theme-decoration-home.webp",
            "./assets/images/products/baby-shower-balloon-decoration-at-home.webp"
        ],
        "shortDescription": "Traditional and modern fusion baby shower decor with pastel balloons and floral accents.",
        "detailedDescription": "A favorite for traditional Godh Bharai ceremonies across Patna. Harmoniously blends modern pastel balloons with festive marigold / artificial jasmine florals for authentic cultural warmth.",
        "inclusions": [
            "180 Pastel & Chrome Metallic Balloons",
            "Round arch or semi-circle garland structure",
            "Golden 'Mom to Be' Sash included",
            "Floral garland interweaves with balloons",
            "Cake cutting stand styling"
        ],
        "setupTime": "2.25 hours",
        "customisation": "Choice of marigold garland or english rose artificial flowers.",
        "safetyNote": "Non-staining adhesives and freestanding options."
    },
    {
        "id": "rainbow-theme-organic-arch",
        "title": "Organic Spiral Pastel Balloon Entrance Arch",
        "category": "Balloon Arches",
        "startingPrice": 3499,
        "originalPrice": 4199,
        "badge": "Popular in Patna",
        "rating": 4.9,
        "reviewsCount": 56,
        "image": "./assets/images/products/rainbow-theme-birthday-decoration.webp",
        "additionalImages": [
            "./assets/images/products/rainbow-theme-birthday-decoration.webp",
            "./assets/images/products/anniversary-balloon-arch-decoration.webp"
        ],
        "shortDescription": "Stunning organic asymmetrical balloon arch framing doorways, gates, or stage backdrops.",
        "detailedDescription": "Organic balloon arches are the hottest trend in event styling! Using mixed sizes from 5-inch mini balloons to 18-inch jumbo balloons, this arch delivers a luxurious, magazine-worthy texture.",
        "inclusions": [
            "200+ Multi-Sized Organic Balloons (5\", 9\", 12\", 18\")",
            "Sturdy arch frame or wall-mount organic structure",
            "Custom color scheme matching your event theme",
            "Accent foil stars / confetti balloons integrated",
            "Setup & balancing by experienced Patna stylists"
        ],
        "setupTime": "2 hours",
        "customisation": "Full arch, half L-shape arch, or circle ring arch configuration.",
        "safetyNote": "Safe rigging with zero structural drilling."
    },
    {
        "id": "birthday-party-decorations-at-home",
        "title": "Dual-Tone Organic Balloon Garland & Pillars",
        "category": "Balloon Arches",
        "startingPrice": 2499,
        "originalPrice": 2999,
        "badge": "Best Seller",
        "rating": 4.8,
        "reviewsCount": 63,
        "image": "./assets/images/products/birthday-party-decorations-at-home.webp",
        "additionalImages": [
            "./assets/images/products/birthday-party-decorations-at-home.webp",
            "./assets/images/products/birthday-party-decorations.webp"
        ],
        "shortDescription": "Two freestanding balloon pillars with connecting top arch garland.",
        "detailedDescription": "Ideal for flanking the entrance of an apartment, stage, or lawn venue in Patna. Creates an impressive welcoming portal for all guests.",
        "inclusions": [
            "160 Chrome & Pastel Balloons",
            "2 Freestanding Balloon Pillar Bases",
            "Connecting ceiling/wall balloon garland",
            "Star foil toppers on each pillar",
            "Curling ribbons and lights"
        ],
        "setupTime": "1.75 hours",
        "customisation": "Color choices: Royal Blue-Silver, Rose Gold-White, Pink-Purple, Black-Gold.",
        "safetyNote": "Weighted bases prevent tipping."
    },
    {
        "id": "car-boot-decoration-for-birthday",
        "title": "Surprise Car Boot / Trunk Balloon Decoration",
        "category": "Birthday",
        "startingPrice": 2499,
        "originalPrice": 3199,
        "badge": "Trending",
        "rating": 5.0,
        "reviewsCount": 40,
        "image": "./assets/images/products/car-boot-decoration-for-birthday.webp",
        "additionalImages": [
            "./assets/images/products/car-boot-decoration-for-birthday.webp",
            "./assets/images/products/surprise-trunk-party-decor.webp",
            "./assets/images/products/balloon-decoration-in-car.webp"
        ],
        "shortDescription": "Surprise your loved one in any parking, rooftop, or drive-in spot in Patna with a decked-out car boot!",
        "detailedDescription": "The ultimate portable surprise in Patna! Pop open the car trunk at midnight by the Ganga Marine Drive (Ganga Path) or outside your loved one's house to reveal glowing fairy lights, balloon cascades, banners, and photo memories.",
        "inclusions": [
            "100 Metallic & Pastel Balloons styled in boot",
            "Happy Birthday / Love Bunting Banner",
            "Battery-operated Warm LED Fairy String Lights",
            "Hanging Photo Clips with customized prints",
            "2 Star / Heart Foil Balloons",
            "Decorated at your chosen Patna location"
        ],
        "setupTime": "1 hour setup on site",
        "customisation": "Compatible with hatchbacks, sedans, and SUVs. Available for Anniversaries and Proposals too.",
        "safetyNote": "Vehicle-safe tape that leaves zero residue on car upholstery or paint."
    },
    {
        "id": "marry-me-car-boot-decoration",
        "title": "Marry Me Romantic Proposal Car Boot Decor",
        "category": "Anniversary",
        "startingPrice": 3499,
        "originalPrice": 4299,
        "badge": "Special Proposal",
        "rating": 5.0,
        "reviewsCount": 26,
        "image": "./assets/images/products/marry-me-car-boot-decoration.webp",
        "additionalImages": [
            "./assets/images/products/marry-me-car-boot-decoration.webp",
            "./assets/images/products/car-boot-decoration-for-birthday.webp"
        ],
        "shortDescription": "'Marry Me' lighted letter setup with red roses, heart balloons, and fairy lights inside car trunk.",
        "detailedDescription": "A dream proposal by Patna's Marine Drive or Eco Park! Includes glowing LED 'MARRY ME' letters, lush red balloon bunches, and romantic artificial flower styling.",
        "inclusions": [
            "120 Deep Red, White & Rose Gold Balloons",
            "Illuminated 'MARRY ME' / 'LOVE' LED marquee lights",
            "Jumbo Ring & Heart Foil Balloons",
            "Fairy light canopy inside trunk lid",
            "Red rose petal scatter effect"
        ],
        "setupTime": "1 hour on-location setup",
        "customisation": "Includes music playlist assistance and sparklers on request.",
        "safetyNote": "100% car-safe setup."
    }
];
