import api from "@/utils/api";

export interface BackendEvent {
  _id: string;
  orgId: string;
  email?: string;
  day: number;
  eventName: string;
  eventDescription: string;
  posterUrl?: string;
  venue: string;
  organiser: string;
  startTime: string;
  endTime: string;
  registrationLink?:string,
  firstPrize?: string;
  secondPrize?: string;
  thirdPrize?: string;
  eventType: string;
  participants: string[];
  createdAt: string;
  updatedAt: string;
}

export interface EventsResponse {
  message: string;
  events: BackendEvent[];
}

export const eventService = {
  async getAllEvents(): Promise<EventsResponse> {
    try {
      const response = await api.get<EventsResponse>("/api/events/getEvents");
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  },

  async getEventById(eventId: string): Promise<BackendEvent> {
    try {
      const response = await api.get<{ event: BackendEvent }>(`/api/events/getEventById/${eventId}`);
      return response.data.event;
    } catch (error) {
      console.error("Error fetching event by ID:", error);
      throw error;
    }
  },

  async getEventsByClub(club: string): Promise<BackendEvent[]> {
    try {
      const response = await api.get<{ events: BackendEvent[] }>(`/api/events/getEventsByClub/${club}`);
      return response.data.events;
    } catch (error) {
      console.error("Error fetching events by club:", error);
      throw error;
    }
  }
};