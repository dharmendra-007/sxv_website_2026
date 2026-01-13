import { BackendEvent } from "@/services/eventService";
import { EventItems } from "@/types/Event";

// Map backend event types to frontend categories
const EVENT_TYPE_TO_CATEGORY: Record<string, string> = {
  "technical": "Technical",
  "cultural": "Cultural", 
  "fun": "Fun",
  "sports": "Fun",
  "workshop": "Technical",
  "competition": "Technical",
  "entertainment": "Cultural",
  "gaming": "Fun"
};

// Map day numbers to day labels
const DAY_NUMBER_TO_LABEL: Record<number, string> = {
  1: "Day 1",
  2: "Day 2", 
  3: "Day 3"
};

export function transformBackendEventToFrontend(backendEvent: BackendEvent): EventItems & { image: string; japaneseTitle: string } {
  // Generate a consistent category based on event type
  const category = EVENT_TYPE_TO_CATEGORY[backendEvent.eventType.toLowerCase()] || "Technical";
  
  // Generate day label
  const day = DAY_NUMBER_TO_LABEL[backendEvent.day] || `Day ${backendEvent.day}`;
  
  // Format time range
  const time = `${backendEvent.startTime} - ${backendEvent.endTime}`;
  
  // Generate placeholder image based on category
  const categoryImages: Record<string, string> = {
    "Technical": "https://placehold.co/600x400/1a1a2e/16213e?text=TECH",
    "Cultural": "https://placehold.co/600x400/2d1b69/0f3460?text=CULTURE", 
    "Fun": "https://placehold.co/600x400/e94560/0f3460?text=FUN"
  };
  
  // Generate Japanese titles based on category
  const japaneseCategories: Record<string, string> = {
    "Technical": "技術",
    "Cultural": "文化",
    "Fun": "楽しい"
  };

  return {
    id: backendEvent._id,
    orgId: backendEvent.orgId,
    title: backendEvent.eventName,
    category: category,
    day: day,
    program: backendEvent.eventType,
    time: time,
    venue: backendEvent.venue,
    organizingClub: backendEvent.organiser,
    shortDescription: backendEvent.eventDescription.substring(0, 100) + "...",
    description: backendEvent.eventDescription,
    registrationLink:backendEvent.registrationLink,
    rules: [
      "Follow event guidelines",
      "Respect organizers and participants", 
      "Decision of judges is final"
    ], // Default rules since backend doesn't have this field
    contact: {
      name: "Event Coordinator",
      phone: "Contact organizers"
    }, // Default contact since backend doesn't have this field
    image: backendEvent.posterUrl || categoryImages[category] || "https://placehold.co/600x400/050000/050000?text=SxV",
    japaneseTitle: japaneseCategories[category] || "イベント"
  };
}

export function getUniqueCategories(events: (EventItems & { image: string; japaneseTitle: string })[]): string[] {
  const categories = events.map(event => event.category);
  return Array.from(new Set(categories));
}

export function getUniqueDays(events: (EventItems & { image: string; japaneseTitle: string })[]): string[] {
  const days = events.map(event => event.day);
  return Array.from(new Set(days)).sort();
}