export type BookingLocationKey = 'willington' | 'long-eaton'

export interface BookingLocation {
  key: BookingLocationKey
  name: string
  postcode: string
  contentfulId: string
}

export interface TableBookingPayload {
  name: string
  email: string
  phone: string
  dateTime: string
  people: number
  details: string
  location: BookingLocationKey
  website: string
  turnstileToken: string
}

export const bookingLocations: Record<BookingLocationKey, BookingLocation> = {
  willington: {
    key: 'willington',
    name: 'Willington',
    postcode: 'DE65',
    contentfulId: 'LRgSzXGPkfFfp0j7YQoPU',
  },
  'long-eaton': {
    key: 'long-eaton',
    name: 'Long Eaton',
    postcode: 'NG10',
    contentfulId: '2QkbTXsJQlcWg0F5gLVoCj',
  },
}

export const bookingLimits = {
  minPeople: 1,
  maxPeople: 30,
  maxDaysAhead: 180,
  maxNameLength: 100,
  maxDetailsLength: 1000,
  maxPhoneLength: 30,
} as const

export const emailPattern: RegExp = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/

export const isBookingLocationKey = (value: unknown): value is BookingLocationKey =>
  typeof value === 'string' && value in bookingLocations
