export interface Show {
  id: number
  name: string
  url: string
  summary: string
  rating: {
    average?: number
  }
  genres: string[]
  weight: number
  image?: ShowImage
}

export interface ShowImage {
  medium: string
  large: string
}

export interface SearchItem {
  score: number
  show: Show
}
