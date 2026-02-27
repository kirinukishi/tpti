import { TravelType, TravelTypeID } from "./types";

export const travelTypesEn: Record<TravelTypeID, TravelType> = {
    EPOA: {
        id: "EPOA",
        name: "Trailblazing Captain",
        catchCopy: "The one whose plans somehow run everyone's trip",
        description: "The moment you start planning a trip, you've already become the leader. One \"trust me, this place is amazing\" and the whole group's itinerary is set. Before you know it, the shared notes are full of your plans. You skip page one of the guidebook \u2014 you don't start until you've found somewhere that's NOT in it. On arrival, you're the first to chat up locals, Google Translate in hand, somehow booking a mysterious activity nobody asked for. You're already moving before anyone says \"so, what do we do?\" Your plans are meticulous, but your destinations are bold, so everyone around you has this strange experience of being dragged around... and loving every second of it. You're just having fun, but when everyone gets home, their best vacation photos are all from places YOU planned.",
        strengths: [
            "You pull off the impossible combo of \"adventure that feels safe\" with hidden gems and tight schedules",
            "You befriend locals in 3 minutes flat and extract info no guidebook could ever have",
            "You move before the group overthinks, so trips never stall even with indecisive friends"
        ],
        warnings: [
            "Not everyone can match your energy. Check if someone's eyes have glazed over by Day 2 afternoon",
            "Your \"follow me!\" vibe is so fun that you sometimes forget to ask what others want to do"
        ],
        quote: "I always make a plan. But the destination? That's off the guidebook.",
        spots: [
            { name: "Iriomote Island Canoe & Trekking", location: "Okinawa", description: "Paddle through subtropical mangrove forests and hike to waterfalls on Japan's \"Galapagos of the East\"" },
            { name: "Iya Vine Bridges & Oboke Gorge Rafting", location: "Tokushima", description: "Cross a vine-woven suspension bridge in one of Japan's three great secluded regions, then raft through emerald rapids" },
            { name: "Hachimantai Dragon Eye", location: "Iwate / Akita", description: "A snowmelt pond that becomes a \"Dragon's Eye\" for just a few weeks in May\u2013June. Perfect for the planner who nails the timing" }
        ],
        bestPartner: "ESOR",
        compatibleTypes: [
            { id: "ESOR", sharedTraits: ["You both ditch famous restaurants to hunt local gems together", "When something amazing happens, you both want to share it immediately", "A shared thirst for experiences you won't find in any guidebook"] },
            { id: "EPIR", sharedTraits: ["The thrill of discovering a place nobody knows about hits you both the same way", "Fellow research-obsessed trip planners who fall down the same rabbit holes", "Your \"next trip\" wish list never runs out"] },
            { id: "EPIA", sharedTraits: ["You both deep-dive into research on hidden spots before the trip", "Neither of you can sit still once you've landed \u2014 matching stamina", "Plans are tight but destinations are bold \u2014 the same perfect balance"] }
        ],
        color: "orange-500"
    },
    EPOR: {
        id: "EPOR",
        name: "Instinct Navigator",
        catchCopy: "\"How do you even KNOW about this place?\" \u2014 everyone, every trip",
        description: "That caf\u00e9 in a completely overlooked alley, the sunset spot only locals know, ordering the best dish on the menu even when you can't read it \u2014 that's you. \"How did you find this place?\" they ask, and all you can say is \"I just had a feeling.\" But behind that \"feeling\" is 3 hours of secret social media deep-diving. You do all the research, then act effortlessly cool on the day. You want to be with friends, but your ideal activity is \"finding the perfect terrace to watch the sunset with a beer\" rather than hiking all day. You plan, but you don't schedule activities \u2014 you schedule vibes. Like \"4 PM: drinks at that rooftop with the view.\" You're not the organizer, but you absolutely refuse to let anyone else pick the restaurant.",
        strengths: [
            "Your research game is so strong that \"bad restaurant\" and \"bad hotel\" are nearly eliminated from your vocabulary",
            "You are the patron saint of group travel's eternal \"where should we eat?\" dilemma, solving it every single time",
            "Your hidden-gem-meets-chill-vibes combo delivers both Instagram gold and genuine relaxation"
        ],
        warnings: [
            "\"Vibing at a nice spot\" is your top priority, so you might clash with anyone who wants to power through tourist attractions",
            "When someone vetoes your carefully chosen restaurant, you play it cool but your heart takes a small hit"
        ],
        quote: "I'd rather eat somewhere nobody knows about, in peace, than wait in line at a famous place.",
        spots: [
            { name: "Onomichi's Hillside Alleys & Hidden Caf\u00e9s", location: "Hiroshima", description: "A port town where slopes and alleyways are dotted with converted old-house caf\u00e9s \u2014 a paradise for the curious foodie" },
            { name: "Biei & Shirogane Secret Spots", location: "Hokkaido", description: "Beyond the Blue Pond crowds: hilltop farm roads and caf\u00e9s run by local farmers" },
            { name: "Kuramae & Kiyosumi-Shirakawa", location: "Tokyo", description: "Warehouse-turned-caf\u00e9s and craft shops \u2014 Tokyo's hidden Brooklyn" }
        ],
        bestPartner: "CSIA",
        compatibleTypes: [
            { id: "CSIA", sharedTraits: ["You each have what the other lacks, so traveling together expands your horizons", "You share the core value of \"enjoying the trip at your own pace\"", "Once you start swapping travel discoveries, the conversation never ends"] },
            { id: "EPOA", sharedTraits: ["You both have a nose for hidden gems and respect each other's finds", "Your pre-trip research energy peaks at the same time", "Neither of you hesitates to strike up a conversation with a stranger"] },
            { id: "CPOA", sharedTraits: ["You both genuinely enjoy the planning process", "A shared desire to have fun together with everyone", "You trust each other's taste in restaurants completely"] }
        ],
        color: "rose-500"
    },
    EPIA: {
        id: "EPIA",
        name: "Uncharted Hunter",
        catchCopy: "The one who zooms into the edges of Google Maps",
        description: "The most exciting part of trip planning is zooming into Google Maps. Where the road ends, where Street View doesn't reach, where a place has only 3 reviews \u2014 you NEED to know what's there. You genuinely believe there are places you can only reach solo, and you're right. You leave the hotel at 4 AM, summit a mountain, photograph an empty overlook, and by noon you're already heading to the next point. Your itinerary lives in a spreadsheet.",
        strengths: [
            "The triple combo of stamina, planning, and curiosity takes you to places others simply cannot reach",
            "You research terrain, weather, and access routes so thoroughly that even solo trips have fat safety margins",
            "Your travel stories are on a completely different scale, so you always steal the show at post-trip gatherings"
        ],
        warnings: [
            "You keep saying \"just one more spot\" until you've gone an entire day with zero breaks",
            "Solo-trip efficiency has spoiled you so much that group trips feel... slow"
        ],
        quote: "My trip begins where the road ends.",
        spots: [
            { name: "Odaigahara & Osugi Valley", location: "Mie / Nara", description: "A primeval forest born from extreme rainfall, with a chain of waterfalls and cliff-side chain paths \u2014 a true hidden route" },
            { name: "Mt. Tomuraushi", location: "Hokkaido", description: "\"The most remote peak in Japan's 100 Famous Mountains.\" Even reaching the trailhead tests your planning skills" },
            { name: "Ikema Island & Ogami Island", location: "Okinawa (near Miyako)", description: "A sacred island reached by boat from Miyako, with restricted areas beyond the village \u2014 a true holy ground" }
        ],
        bestPartner: "CPOA",
        compatibleTypes: [
            { id: "CPOA", sharedTraits: ["Fellow research-obsessed planners who love falling down the rabbit hole together", "Both of you can't stop moving once you're on the ground", "Your specialties (hidden gems vs. classics) combine to make the trip richer"] },
            { id: "EPOA", sharedTraits: ["You share the drive to find places nobody's been before", "Equally meticulous about planning \u2014 kindred perfectionists", "Once you've landed, you're both the most active people around"] },
            { id: "EPIR", sharedTraits: ["The same burning curiosity to go beyond the guidebook", "You trust each other's pre-trip research completely", "You both value alone time and respect that in each other"] }
        ],
        color: "emerald-600"
    },
    EPIR: {
        id: "EPIR",
        name: "Hideaway Connoisseur",
        catchCopy: "The one who has the best night at a restaurant rated 3.2",
        description: "You have zero interest in restaurants rated 3.5 or above. The places with low scores but a loyal following, the inns with no signage, the restaurants where the only way to book is by phone \u2014 those are your targets. Finding these spots and savoring them in quiet solitude is your idea of life's greatest reward. You plan your trips, but the itinerary only has three things: transit, meals, and accommodation. Tourist attractions? Not on your list.",
        strengths: [
            "Your depth of research is otherworldly \u2014 you uncover legendary hidden restaurants right next to major tourist areas",
            "Since you're self-contained, plan changes happen instantly. \"I want to stay at this place another hour\" \u2014 done",
            "Your \"that place was amazing\" recommendations are so precise that friends constantly ask you for travel advice"
        ],
        warnings: [
            "Your need to \"savor in peace\" is so strong that a noisy table next to you can tank your trip satisfaction by 30%",
            "Your idea of the \"perfect experience\" is so locked in that you sometimes can't take someone else's recommendation at face value"
        ],
        quote: "The best food is never at the famous place. It's at the place someone quietly keeps going back to.",
        spots: [
            { name: "Yunatsuru Onsen", location: "Kumamoto", description: "A fading hot spring hamlet with just a handful of inns, bookable only by phone \u2014 a true old-school retreat" },
            { name: "Mitarai Historic Townscape", location: "Hiroshima (Osaki-Shimojima)", description: "An Edo-era port town preserved almost untouched, with virtually no tourists \u2014 a designated traditional building district" },
            { name: "Narai-juku", location: "Nagano", description: "The longest post town on the Nakasendo trail. Fewer tourists than Tsumago or Magome, with Kiso lacquerware workshops and old inns lining the street" }
        ],
        bestPartner: "ESIR",
        compatibleTypes: [
            { id: "ESIR", sharedTraits: ["You both understand the bliss of a quiet moment in a hidden gem", "The travel experience you seek is fundamentally the same", "Leisurely downtime IS the highlight \u2014 a shared value"] },
            { id: "EPIA", sharedTraits: ["The same explorer's drive to find undiscovered places", "Thorough pre-trip research that you both stake your plans on", "Mutual respect for deep, solitary appreciation"] },
            { id: "EPOR", sharedTraits: ["You trust each other's hidden-gem radar completely", "Both of you believe in planning before traveling", "Unhurried time is precious to both of you"] }
        ],
        color: "violet-500"
    },
    ESOA: {
        id: "ESOA",
        name: "Freewheeling Caravan",
        catchCopy: "\"Let's just go somewhere\" \u2014 and somehow a trip materializes",
        description: "A trip starts when you drop a \"who's free this weekend?\" in the group chat. The destination isn't decided, but the meetup time is. That's your kind of action. You don't read travel guides, but you'll chat up a local and get taken to a \"waterfall only locals know about.\" You have no plan, yet somehow you're managing everyone's mood, and before you know it, you've become the unofficial tour guide.",
        strengths: [
            "Your rallying cry of \"let's go!\" can assemble 5 people in no time",
            "A steel mindset that converts unexpected mishaps into \"hey, that's what travel is about\"",
            "You befriend locals in 3 minutes and extract insider tips with pure charisma"
        ],
        warnings: [
            "When everyone is plan-free, actual getting-lost can happen. Bring at least one friend who can read a map",
            "Behind your \"it'll work out\" attitude, someone is quietly booking the hotel for you. Notice them"
        ],
        quote: "I don't carry a plan. But I always bring my crew.",
        spots: [
            { name: "Amami Oshima Mangrove Canoe", location: "Kagoshima", description: "Impromptu adventure through Japan's second-largest mangrove primeval forest by canoe" },
            { name: "Iya Valley Vine Bridges", location: "Tokushima", description: "\"Secluded region\" is all it takes to rally the squad \u2014 vine suspension bridge plus gorge rafting" },
            { name: "Nozawa Onsen", location: "Nagano", description: "Natural powder skiing and 13 free public baths. Organic interactions with the local community" }
        ],
        bestPartner: "CPOR",
        compatibleTypes: [
            { id: "CPOR", sharedTraits: ["You both care deeply about food when traveling \u2014 fellow foodies", "A shared stance of \"travel is about enjoying it together\"", "Your strengths (adventure vs. planning) combine to complete the trip"] },
            { id: "ESOR", sharedTraits: ["Both of you thrive without a plan \u2014 matching spontaneity", "You want to discover hidden spots together \u2014 shared adventurousness", "At the core, you both just want a good time with good people"] },
            { id: "CSOA", sharedTraits: ["You match each other's \"let's just go\" energy perfectly", "Both of you love engaging with people at your destination", "Unexpected detours? Both of you think that's the best part"] }
        ],
        color: "amber-500"
    },
    ESOR: {
        id: "ESOR",
        name: "Wandering Gourmet",
        catchCopy: "Gets lost constantly, but always finds the best restaurant",
        description: "You have the map app open and STILL take a wrong turn \u2014 that's your special talent. But somehow you find the best hole-in-the-wall diner on the wrong street, so nobody complains. You'll be talking about \"that random noodle shop around the corner\" for three years after the trip. You want to hang out with everyone, but your activities are \"eat, drink, sit\" so your step count stays basically at zero.",
        strengths: [
            "The more lost you get, the better the restaurants you find \u2014 a paradoxical sixth sense",
            "Your hit rate for \"this place is a winner\" is absurdly high",
            "Just being around you raises everyone's dining experience \u2014 a walking foodie contribution"
        ],
        warnings: [
            "\"Just one more place\" repeated 5 times means nobody can walk anymore. Learn the art of stopping at 80%",
            "Don't let your faith in your getting-lost superpower lead you too deep into unfamiliar alleys at night"
        ],
        quote: "At the end of a wrong turn, there's always a great restaurant.",
        spots: [
            { name: "Nagahama & Kurokabe Square", location: "Shiga", description: "A retro townscape of glass workshops where getting lost leads you to hidden foodie treasures" },
            { name: "Beppu Kannawa Onsen", location: "Oita", description: "A hot-spring town with steam rising from every street. Cook your own meal in a \"jigoku-mushi\" (hell-steam) workshop with friends" },
            { name: "Hakodate Bay Area & Morning Market", location: "Hokkaido", description: "Graze on seafood at the morning market, then wander through the red-brick warehouse district" }
        ],
        bestPartner: "EPOA",
        compatibleTypes: [
            { id: "EPOA", sharedTraits: ["You both want to go beyond the guidebook \u2014 matching explorer spirit", "Both of you love meeting people \u2014 open-minded travelers", "Your contrasting travel styles create a great chemical reaction"] },
            { id: "ESOA", sharedTraits: ["You can both pivot on a dime without a plan \u2014 matching agility", "You want to hunt hidden gems together \u2014 shared thrill of discovery", "Fellow mood-makers who keep the group energy high"] },
            { id: "CSOR", sharedTraits: ["You both love free-flowing, mood-driven travel", "Quality time with friends is what matters most to both of you", "You savor the same unhurried pace"] }
        ],
        color: "pink-400"
    },
    ESIA: {
        id: "ESIA",
        name: "Lone Adventurer",
        catchCopy: "The one who boards a plane without booking a return flight",
        description: "Heading to the airport without a return ticket is a move that completely transcends the understanding of everyone around you. You plunge solo into uncharted territory, and yet somehow you always come back alive. When asked about your travel plans, all you say is \"somewhere south, probably.\" On the ground, you're the most active person around \u2014 you pick the trail that isn't a trail during a hike, crash a local festival, and suddenly find yourself on top of a mountain.",
        strengths: [
            "Zero constraints and maximum mobility let you reach places nobody else gets to",
            "Solo means plan changes happen in seconds \u2014 unbeatable decision speed",
            "You treat trouble as \"part of the adventure\" \u2014 pure survival instinct"
        ],
        warnings: [
            "At least decide your return date. Your workplace is genuinely worried",
            "\"I was off the grid for 3 days\" is not adventure \u2014 that's borderline search-and-rescue"
        ],
        quote: "I'll figure out how to get back once I'm there.",
        spots: [
            { name: "Yakushima Jomon Cedar Trek", location: "Kagoshima", description: "A 10-hour round-trip solo trek through primeval forest to meet a 7,200-year-old cedar tree" },
            { name: "Shiretoko Peninsula", location: "Hokkaido", description: "The edge of a World Natural Heritage site. Walk through brown bear territory and gaze at drift ice from the cliffs" },
            { name: "Ogasawara Islands", location: "Tokyo", description: "A paradise in the open ocean, reachable only by a 24-hour ferry \u2014 the ultimate off-the-grid destination" }
        ],
        bestPartner: "CSOA",
        compatibleTypes: [
            { id: "CSOA", sharedTraits: ["You both move on feeling alone, with no fixed plans", "Active and physical at your destination \u2014 matching energy", "If something catches your eye, you both act immediately, guidebook or not"] },
            { id: "ESIR", sharedTraits: ["You share an explorer's instinct for sniffing out hidden gems", "Planless and happy about it \u2014 matching flexibility", "A quiet mutual respect for each other's alone time"] },
            { id: "EPIA", sharedTraits: ["The same adventurer's drive to charge into uncharted territory", "You both prefer to savor travel deeply, solo", "Matching stamina for active, physical experiences"] }
        ],
        color: "teal-600"
    },
    ESIR: {
        id: "ESIR",
        name: "Drifting Poet",
        catchCopy: "Does nothing, yet somehow has the best trip of anyone",
        description: "From the outside, it's hard to tell whether you're traveling or just spacing out. But inside, you're soaking in every detail \u2014 the way light falls into an alley from a caf\u00e9 window, the scent of an unfamiliar city at dusk. You're actually savoring the trip more than anyone. Plans? \"None.\" Destination? \"Nowhere in particular.\" Trip satisfaction? Somehow maxed out. You walk through an unknown city alone, duck into a place that catches your eye, sit down when you're tired, and watch the sky.",
        strengths: [
            "No plans means no plans can go wrong \u2014 an invincible logic",
            "A quiet instinct for finding \"the good spot\" in any city",
            "Your travel expenses are remarkably low (because you don't move much)"
        ],
        warnings: [
            "If you do absolutely nothing, you'll struggle to answer \"so, what did you do on your trip?\" Visit at least ONE tourist spot",
            "Check what city you're in once in a while so you can answer \"where are you right now?\""
        ],
        quote: "A trip where I did nothing is the one I remember best.",
        spots: [
            { name: "Naoshima", location: "Kagawa", description: "An art island in the Seto Inland Sea. Yayoi Kusama's pumpkin, the Chichu Art Museum, and silence" },
            { name: "Inamuragasaki, Kamakura", location: "Kanagawa", description: "Quiet seaside caf\u00e9s and sunsets, off the tourist trail of Kamakura" },
            { name: "Kakunodate", location: "Akita", description: "A serene samurai town with black walls and weeping cherry trees. Walk the streets as if time itself has stopped" }
        ],
        bestPartner: "EPIR",
        compatibleTypes: [
            { id: "EPIR", sharedTraits: ["You both understand the bliss of a quiet moment at a hidden gem", "You want different things on paper, but the experience you seek is the same", "Unhurried downtime IS the highlight \u2014 a shared value"] },
            { id: "ESIA", sharedTraits: ["You both venture beyond the guidebook with a shared explorer's heart", "Fellow free-spirits who thrive without a plan", "A comfortable distance that never intrudes on each other's alone time"] },
            { id: "CSIR", sharedTraits: ["Mood-driven, at-your-own-pace travel \u2014 the same wavelength", "Quiet solo time is the ultimate luxury for both of you", "Your unhurried travel tempo matches perfectly"] }
        ],
        color: "indigo-400"
    },
    CPOA: {
        id: "CPOA",
        name: "Trip Architect",
        catchCopy: "Can't sleep because making the trip itinerary is too fun",
        description: "The instant a trip is decided, Google Sheets opens. You calculate transit times, make restaurant reservations, and build a timetable like \"14:00 Kiyomizu Temple \u2192 14:45 Transit \u2192 15:00 Matcha Experience.\" You export the trip itinerary as a PDF, send it to the group chat, and the night before, share a packing checklist. Your command of classic spots is flawless, and when everyone follows your plan, the trip is genuinely incredible.",
        strengths: [
            "You're standing at the door of a popular restaurant the moment it opens. The payoff of perfect reservations and route planning",
            "Once you're appointed trip organizer, you get a lifetime appointment for every future trip",
            "\"What should I bring?\" \"What's the weather?\" \u2014 every answer is already in the trip itinerary you distributed"
        ],
        warnings: [
            "When things don't go to schedule, your smile doesn't quite reach your eyes. Take a deep breath and allow a detour",
            "A perfectly packed schedule means everyone's legs give out. Build in a slot for \"just doing nothing\""
        ],
        quote: "80% preparation, 20% trip. But that 20% is everything.",
        spots: [
            { name: "Fushimi Inari & Senbon Torii", location: "Kyoto", description: "The ultimate half-day course from the thousand torii gates to Tofuku-ji temple, all connected on foot" },
            { name: "Gunkanjima (Hashima Island)", location: "Nagasaki", description: "An abandoned island accessible only by tour. Your planning skills directly determine the trip's success" },
            { name: "Tateyama Kurobe Alpine Route", location: "Toyama / Nagano", description: "Six vehicles to transfer between, climbing to 2,450m. The joy IS planning the connections" }
        ],
        bestPartner: "EPIA",
        compatibleTypes: [
            { id: "EPIA", sharedTraits: ["Fellow research addicts who love the pre-trip planning deep-dive", "Both of you can't stop moving on the ground \u2014 action-oriented teammates", "Your specialties (classics vs. hidden gems) combine for a richer trip"] },
            { id: "ESIA", sharedTraits: ["You both keep moving actively at your destination", "Each other's contrasting style is refreshing and inspiring", "You both value spontaneous encounters with locals"] },
            { id: "CPOR", sharedTraits: ["Equally meticulous about trip planning \u2014 kindred organizers", "You both know how good the classic spots really are", "A shared open, social approach to group travel"] }
        ],
        color: "blue-500"
    },
    CPOR: {
        id: "CPOR",
        name: "Hospitality Pro",
        catchCopy: "\"You're gonna love this\" \u2014 and it's right, every single time",
        description: "\"Oh, she likes cheesecake.\" While planning the trip, your brain is running a full database of everyone's preferences. You read 200 restaurant reviews to find the one, verify the hotel room view, and choose a caf\u00e9 based on \"she'll definitely want to take a photo here.\" You'd rather sit around a table saying \"this is SO good\" than rush from sight to sight.",
        strengths: [
            "Your restaurant and hotel miss rate is basically zero. The gratitude storm after every trip? That's your invisible labor paying off",
            "You remember your travel companions' preferences, earning genuine \"you remembered?!\" moments of joy",
            "You've never heard \"sorry, we're full\" at a popular restaurant. Because you booked 3 weeks ago"
        ],
        warnings: [
            "When your carefully chosen restaurant is unexpectedly closed, you visibly panic. Always have a Plan B",
            "Your chill-focused itinerary might leave the active types feeling antsy. Throw in some free-roam time"
        ],
        quote: "This place has never let me down. ...Well, I did read 200 reviews.",
        spots: [
            { name: "Yufuin Onsen", location: "Oita", description: "A hot-spring town at the foot of Mt. Yufu, packed with food strolls, caf\u00e9s, and boutique shops" },
            { name: "Kanazawa Higashi Chaya District", location: "Ishikawa", description: "Nodoguro fish, sweet shrimp, Kaga rod tea \u2014 a city of food and beauty with something for everyone" },
            { name: "Oirase Gorge Hotel Area", location: "Aomori", description: "Just sit along the stream, watch the moss and water, and have a genuinely \"good time\"" }
        ],
        bestPartner: "ESOA",
        compatibleTypes: [
            { id: "ESOA", sharedTraits: ["You both love sharing the travel experience with others", "Your complementary strengths create the perfect trip", "A mutual dedication to great food while traveling"] },
            { id: "EPOR", sharedTraits: ["You both go all-in on pre-trip research \u2014 fellow planners", "Social and open about wanting everyone to enjoy the trip", "You share the same value for unhurried, quality time"] },
            { id: "CPIR", sharedTraits: ["Fellow classic-spot lovers who know the real value of the tried and true", "You both love building a meticulous trip plan", "Slow, savored moments matter to both of you"] }
        ],
        color: "sky-400"
    },
    CPIA: {
        id: "CPIA",
        name: "Classic Conqueror",
        catchCopy: "Gives a longer tour than the actual tour guide at famous sites",
        description: "Your trip prep is at exam-study level. Before a museum, you order the catalog. Before a castle, you study its construction history. Before a temple, you memorize the sect lineage. At the venue, you rent the audio guide AND add your own commentary: \"They don't mention this on the audio guide, but actually...\" You go solo because you want to stand in front of your favorite exhibit for 30 minutes without anyone rushing you.",
        strengths: [
            "Travel with this person and you'll see 3x more in everything. Warning: listening stamina required",
            "You arrive 30 minutes before opening, so your photos are crowd-free masterpieces",
            "You cover 5 days' worth of sightseeing in 2 nights and 3 days. A rare breed that converts exhaustion into fulfillment"
        ],
        warnings: [
            "You get so consumed ticking off your checklist that you sometimes miss the breeze and the scent of the place",
            "Being so self-sufficient can mean missing chances to connect with locals"
        ],
        quote: "I'm not a tourist. I did my homework.",
        spots: [
            { name: "Himeji Castle", location: "Hyogo", description: "The pinnacle of surviving castle keeps. A fortress whose stone walls and defense structures you can read like a book" },
            { name: "Koyasan Okunoin", location: "Wakayama", description: "200,000 tombstones under centuries-old cedars. The more you know, the heavier each step becomes in this sacred ground" },
            { name: "Shirakawa-go & Gokayama", location: "Gifu / Toyama", description: "UNESCO gassho-zukuri villages to explore solo, top to bottom. Once you start on the architecture, you can't stop" }
        ],
        bestPartner: "CSOR",
        compatibleTypes: [
            { id: "CSOR", sharedTraits: ["You're both classic-spot lovers who know the real thing", "Your contrasting styles (planned vs. improvised) give each other fresh energy", "You can swap travel knowledge and stories endlessly"] },
            { id: "EPIA", sharedTraits: ["Equally meticulous about pre-trip planning", "A quiet mutual respect for solo deep-dive experiences", "Active, on-the-go travelers who want to see it all"] },
            { id: "CPIR", sharedTraits: ["A shared intellectual curiosity to deeply understand famous spots", "The same pre-trip planning rigor that brings peace of mind", "Both of you prefer quiet, focused solo travel"] }
        ],
        color: "cyan-600"
    },
    CPIR: {
        id: "CPIR",
        name: "Supreme Relaxation Artist",
        catchCopy: "Stops moving the second they check in",
        description: "You spend 3 hours comparing ryokan plans. Room orientation, water quality, dinner menu \u2014 all verified. And the moment you book, 80% of the trip is done. The remaining 20% is \"check in and don't move.\" You walk into the room, brew tea, gaze out the window, and your face already has the look of someone at the story's climax. Three trips to the open-air bath, a photo of every course at dinner, then you pass out.",
        strengths: [
            "Your accommodation selection accuracy is inhuman. You have literally never booked a bad hotel in your life",
            "You return from trips with your HP fully restored. Friends start rethinking whether vacations can actually be restful",
            "Your timing instincts for avoiding crowds are genius. You're at a popular spot with basically nobody around"
        ],
        warnings: [
            "You're so comfortable that you keep rebooking the same place. Try somewhere new at least once a year",
            "You're so immersed in your own world that you barely even talk to the staff"
        ],
        quote: "Everything from check-in to checkout is the highlight.",
        spots: [
            { name: "Ginzan Onsen", location: "Yamagata", description: "Taisho-era wooden ryokans glowing under gas lamps in the snow \u2014 Japan's most beautiful hot-spring town" },
            { name: "Gora & Classic Hakone Ryokans", location: "Kanagawa", description: "90 minutes from Tokyo: a meticulously planned trip where \"doing nothing\" is the luxury" },
            { name: "Taketomi Island", location: "Okinawa", description: "Red-tile roofs, star sand beaches. Just sitting on the veranda feeling the breeze is the whole trip" }
        ],
        bestPartner: "CSIR",
        compatibleTypes: [
            { id: "CSIR", sharedTraits: ["You both appreciate the classics while savoring a slow pace", "Quiet solo time is the ultimate luxury for both of you", "Your unhurried travel tempo is a perfect match"] },
            { id: "EPIR", sharedTraits: ["Fellow thorough researchers who plan before they travel", "The same solo, quiet-enjoyment travel style", "\"A chill trip IS the best trip\" \u2014 a shared conviction"] },
            { id: "CPIA", sharedTraits: ["A shared intellectual curiosity for deeply understanding famous spots", "The same meticulous planning instinct for peace of mind", "Both of you prefer focused, solo-immersion travel"] }
        ],
        color: "purple-400"
    },
    CSOA: {
        id: "CSOA",
        name: "Festival Energizer",
        catchCopy: "When they show up, the trip's energy level goes up a notch",
        description: "The moment you arrive at the meeting spot, your \"LET'S GO!\" energy lifts everyone's spirits. You sort-of have a plan, but when you spot a festival or market you say \"oh, something's happening!\" and the route instantly changes. You cover the classic spots but your way of enjoying them is uniquely yours. Travel isn't travel unless you're having a blast with your crew.",
        strengths: [
            "Even at a quiet off-season tourist spot, your presence somehow creates a \"glad we came\" feeling",
            "You chat up the local auntie and walk away with a list of restaurant recommendations in 5 minutes",
            "\"Might as well!\" is your catchphrase \u2014 you order every local specialty and try every experience"
        ],
        warnings: [
            "A 2-night-3-day trip somehow leaves you feeling like you've been gone a week",
            "Your camera roll overflows with selfies and videos, and your phone storage dies on site"
        ],
        quote: "The number of great memories is proportional to the number of times plans went sideways.",
        spots: [
            { name: "Dotonbori & Shinsekai", location: "Osaka", description: "Glico sign, kushikatsu, takoyaki \u2014 Japan's ultimate \"fun just walking around\" street" },
            { name: "Kanto Festival in Akita", location: "Akita", description: "About 280 bamboo poles with lanterns sway against the night sky. Spectators become part of the Tohoku Big Three festivals" },
            { name: "Mt. Aso & Uchinomaki Onsen", location: "Kumamoto", description: "One of the world's largest calderas plus horseback riding. The kind of scale that naturally amps up group energy" }
        ],
        bestPartner: "ESIA",
        compatibleTypes: [
            { id: "ESIA", sharedTraits: ["You both move on vibes, with a similar free-flowing travel style", "Matching active stamina for moving around all day", "Neither of you is bound by a plan \u2014 you absorb the local atmosphere"] },
            { id: "ESOA", sharedTraits: ["You match each other's \"let's just go\" energy perfectly", "Both of you love engaging with people at your destination", "Active go-getters who want to be on their feet"] },
            { id: "CSOR", sharedTraits: ["Classic spots as a base, then freestyling from there", "Quality time with the group is what matters most", "You share the freedom to move on a whim"] }
        ],
        color: "yellow-500"
    },
    CSOR: {
        id: "CSOR",
        name: "Low-Key Life of the Party",
        catchCopy: "Chill as can be, yet somehow everyone's laughing",
        description: "You're not loud. You're not the organizer. But somehow, everyone around you ends up smiling. At your destination, you camp out at caf\u00e9s, soak in hot springs, and meander through local sweets shops. You hit the famous spots with a \"might as well check it out, I guess?\" level of enthusiasm, and when something goes wrong, your casual \"eh, it's fine\" resets the group's vibe.",
        strengths: [
            "Even when someone takes the wrong train, your presence turns the mishap into a fun story",
            "You pretend you didn't research anything, but somehow nail the best caf\u00e9 and hot spring every time",
            "You save the group from the infinite loop of \"where should we go?\" \"I don't care\" with one subtle suggestion"
        ],
        warnings: [
            "Once you find a cozy spot, you stop moving. You'll realize 90 minutes have passed at a single caf\u00e9",
            "Your relaxed vibe means nobody watches the clock. Your flight time gets a little too close for comfort every time"
        ],
        quote: "The best trip is one where you can't remember what you did, but you know it was great.",
        spots: [
            { name: "Yufuin Onsen", location: "Oita", description: "Sweets strolling on Yunotsubo Street, morning mist on Lake Kinrin, tiny art museums" },
            { name: "Kamakura & Enoden Line", location: "Kanagawa", description: "The Great Buddha, Komachi-dori, seaside caf\u00e9s. Hop off the train whenever you feel like it" },
            { name: "Nikko & Toshogu Shrine", location: "Tochigi", description: "World Heritage grandeur enjoyed at a \"might as well check it out\" temperature" }
        ],
        bestPartner: "CPIA",
        compatibleTypes: [
            { id: "CPIA", sharedTraits: ["You're both classic-spot lovers who appreciate the real thing", "Your contrasting styles (improvised vs. planned) bring fresh energy to each other", "You can swap travel stories and knowledge endlessly"] },
            { id: "CPOR", sharedTraits: ["You both know famous spots inside and out", "Group hangs with a chill pace \u2014 that's both your jam", "You share the same relaxed-time appreciation"] },
            { id: "CSOA", sharedTraits: ["Freestyling from a base of classic spots \u2014 same approach", "Classic destinations, enjoyed at your own pace \u2014 comforting for both", "A shared openness to having fun with everyone"] }
        ],
        color: "lime-400"
    },
    CSIA: {
        id: "CSIA",
        name: "Whimsical Wanderer",
        catchCopy: "\"Just going for a walk\" and ends up in the next prefecture",
        description: "\"I'll just step out for a bit\" is your catchphrase. Then you don't come back for 3 hours. Walking alone through an unfamiliar city is your bliss. Guidebook spots are on a \"if I happen to pass by\" basis. But while walking, one \"what's down that alley?\" and \"what's up that hill?\" later, you're in a completely different place from where you planned.",
        strengths: [
            "You find bakeries nobody's heard of in random back alleys. Your only explanation: \"I was just walking\"",
            "When plans fall apart, you don't flinch. You can't have broken plans when you had no plans",
            "When travel companions tap out from exhaustion, you're still happily strolling"
        ],
        warnings: [
            "\"I'll be back in 30 minutes\" cannot be trusted. Your 30 minutes is a normal person's 2 hours",
            "You walk so much your legs are destroyed, but you insist \"I'm totally fine\" and then can't move the next day"
        ],
        quote: "Once I close the map, the real trip begins.",
        spots: [
            { name: "Onomichi", location: "Hiroshima", description: "A city of hills woven with alleys, cats, and old temples. Before you know it, you're at the summit" },
            { name: "Kumano Kodo (Nakahechi Route)", location: "Wakayama", description: "A UNESCO pilgrimage trail. Walk the same path as travelers from 1,000 years ago, all the way to the next prefecture" },
            { name: "Yanesen Area", location: "Tokyo", description: "A walker's paradise of old-town alleys packed with temples, family shops, public baths, and cats" }
        ],
        bestPartner: "EPOR",
        compatibleTypes: [
            { id: "EPOR", sharedTraits: ["Opposite in style, so your travel world expands dramatically together", "You share the same love for \"discovering\" things while traveling", "Mutual respect for each other's pace \u2014 a mature travel dynamic"] },
            { id: "ESIA", sharedTraits: ["Same mood-driven, no-plan travel style", "You both value your own alone time", "Matching stamina for walking all day"] },
            { id: "CSIR", sharedTraits: ["Classic spots, enjoyed freely at your own whim", "Fellow solo travelers who cherish their own pace", "Flexibility to move whenever the mood strikes"] }
        ],
        color: "slate-500"
    },
    CSIR: {
        id: "CSIR",
        name: "Blissful Napper",
        catchCopy: "Takes a nap at the destination and says it was the best trip ever",
        description: "Your entire travel purpose is \"zone out somewhere nice.\" You arrive at the inn, flop onto the futon, and determine your napping position based on the angle of sunlight from the window. You'll visit famous spots, but if they're crowded, you immediately retreat to a caf\u00e9. Plans are vibes-only, so when you wake up, you still don't know what you're doing today.",
        strengths: [
            "While everyone else is irritated at a crowded tourist spot, you're on a bench, feeling the breeze, perfectly content",
            "Your pickiness about accommodation is extreme. You compare mattress quality, views, and water temperature with surgical precision",
            "Travel with you and somehow everyone starts relaxing more too"
        ],
        warnings: [
            "A nap so good you sleep through your restaurant reservation \u2014 it has happened",
            "\"Still sleeping?\" \"Yep.\" \u2014 This conversation happens at least 3 times per trip"
        ],
        quote: "Traveling far just to sleep. That, I've realized, is the ultimate luxury.",
        spots: [
            { name: "Akiu Onsen", location: "Miyagi", description: "A classic hot-spring village just a short trip from Sendai. Made for the kind of trip where you collapse into futon" },
            { name: "Kusatsu Onsen", location: "Gunma", description: "The king of hot springs. Just sitting and watching the yubatake (hot water field) is a complete experience" },
            { name: "Oirase Gorge", location: "Aomori", description: "Sit on a bench, listen to the water, and nap. Doing nothing here is the ultimate luxury" }
        ],
        bestPartner: "CPIR",
        compatibleTypes: [
            { id: "CPIR", sharedTraits: ["You both appreciate the classics while savoring an unhurried pace", "Quiet solo time is the ultimate luxury for both of you", "Your relaxed travel tempo is a perfect match"] },
            { id: "ESIR", sharedTraits: ["Planless and at your own pace \u2014 the same travel philosophy", "Quiet solo time feels like peak bliss to both of you", "Your unhurried travel rhythm naturally syncs up"] },
            { id: "CSIA", sharedTraits: ["Freestyling based on mood \u2014 matching vibes", "A quiet mutual understanding of the need for solo time", "Classic spots, savored at your own pace \u2014 comforting for both"] }
        ],
        color: "stone-400"
    }
};
