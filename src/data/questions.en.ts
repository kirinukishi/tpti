import { Question } from "./questions";

export const questionsEn: Question[] = [
    // Adventurousness (EC)
    { id: "EC-1", text: "Before a trip, I'd rather dig through personal blogs and social media for hidden info than read a guidebook", axis: "EC", isReverse: false },
    { id: "EC-2", text: "At my destination, I'm drawn to tiny local eateries that only residents know about, rather than famous restaurants", axis: "EC", isReverse: false },
    { id: "EC-3", text: "I feel most at ease when I book a well-known hotel with consistently good reviews", axis: "EC", isReverse: true },
    { id: "EC-4", text: "In an unfamiliar city, I'm more curious about the back alleys and side streets than my actual destination", axis: "EC", isReverse: false },
    { id: "EC-5", text: "When a place I planned to visit turns out to be closed, I see it as a chance to discover somewhere new", axis: "EC", isReverse: false },
    { id: "EC-6", text: "For souvenirs, I think it's safest to go with the classic bestsellers or top-ranked items", axis: "EC", isReverse: true },
    { id: "EC-7", text: "My best travel memory is always the moment I stumble upon a place nobody else knows about", axis: "EC", isReverse: false },

    // Planning Style (PS)
    { id: "PS-1", text: "As soon as a trip is decided, I start making a list of places I want to visit and prioritizing them", axis: "PS", isReverse: false },
    { id: "PS-2", text: "I can't relax until I've booked tickets and accommodation right after dates are set", axis: "PS", isReverse: false },
    { id: "PS-3", text: "A day on the road is more fun when I decide what to do based on how I feel that morning", axis: "PS", isReverse: true },
    { id: "PS-4", text: "When packing, I make a checklist and plan outfits for each day before putting anything in my bag", axis: "PS", isReverse: false },
    { id: "PS-5", text: "For meals while traveling, I love just walking in wherever catches my eye", axis: "PS", isReverse: true },
    { id: "PS-6", text: "When plans fall apart, I already have backup options ready to switch to immediately", axis: "PS", isReverse: false },
    { id: "PS-7", text: "After a trip, I like to organize my photos and review expenses to put together a record of the journey", axis: "PS", isReverse: false },

    // Social Style (OI)
    { id: "OI-1", text: "When I don't know my way around, I'd rather ask a local for recommendations than look it up on my phone", axis: "OI", isReverse: false },
    { id: "OI-2", text: "When I see a beautiful view while traveling, I immediately want to share it with someone", axis: "OI", isReverse: false },
    { id: "OI-3", text: "I feel more relaxed in a quiet private room than in a place where I'd mingle with other travelers", axis: "OI", isReverse: true },
    { id: "OI-4", text: "If there's a guided tour at a famous spot, I'd jump at the chance to join", axis: "OI", isReverse: false },
    { id: "OI-5", text: "During long transit, I prefer to put in my earphones and sink into my own world", axis: "OI", isReverse: true },
    { id: "OI-6", text: "I enjoy picking out souvenirs while imagining the faces of the people I'll give them to", axis: "OI", isReverse: false },
    { id: "OI-7", text: "After a trip, I can't wait to show my photos and tell travel stories to friends and family", axis: "OI", isReverse: false },

    // Activity Level (AR)
    { id: "AR-1", text: "After checking in, I drop my bags and head straight out to explore the streets", axis: "AR", isReverse: false },
    { id: "AR-2", text: "If I wake up early while traveling, I want to go out and wander the morning streets or hit a local market", axis: "AR", isReverse: false },
    { id: "AR-3", text: "Even if there's a beach or lake nearby, I'd rather just sit and enjoy the view than do water activities", axis: "AR", isReverse: true },
    { id: "AR-4", text: "If the next spot is about 2 km away, I'd rather walk there than take transport", axis: "AR", isReverse: false },
    { id: "AR-5", text: "After seeing the main sights, I just want to find a nearby caf\u00e9 and relax over a cup of tea", axis: "AR", isReverse: true },
    { id: "AR-6", text: "Even on a rainy day, I'd look up indoor spots or markets and still head out", axis: "AR", isReverse: false },
    { id: "AR-7", text: "On the last day of a trip, if there's time, I want to squeeze in as many unvisited places as possible", axis: "AR", isReverse: false },
];
