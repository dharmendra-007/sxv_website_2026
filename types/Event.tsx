export type EventItems = {
  id: string
  orgId:string
  title: string
  category: string
  day: string
  program: string
  time: string
  venue: string
  organizingClub: string
  shortDescription: string
  description: string
  rules: string[]
  registrationLink?: string
  contact: {
    name: string
    phone: string
  }
}
