export interface Show {
  id: number
  name: string
  url: string
  summary: string
  genres: string[]
  weight: number
  image?: Image
  status: "Running"
  premiered: string
  runtime: number
  averageRuntime: number
  schedule: {
    time: string
    days: string[]
  }
  rating: Rating
  network: {
    name: string
    officialSite: string
  }
  externals: {
    tvrage: number
    thetvdb: number
    imdb: number
  }
}

export interface Rating {
  average?: number
}

export interface Image {
  medium: string
  original: string
}

export interface ShowImage {
  id: number
  type: "poster" | "background" | "banner"
  main: boolean
  resolutions: {
    original: ShowImageResolution
    medium: ShowImageResolution
  }
}

export interface ShowImageResolution {
  url: string
  width: number
  height: number
}

export interface Cast {
  person: Person
  character: Character
}

export interface Person {
  id: string
  name: string
  image?: Image
}

export interface Character {
  id: number
  name: string
  image?: Image
}

export interface Episode {
  id: number
  name: string
  summary: string
  image: Image
  airdate: string
  season: number
  runtime: number
  number: number
  rating: Rating
}

export interface SearchItem {
  score: number
  show: Show
}

export interface ShowWithEmbedded extends Show {
  _embedded: {
    cast: Cast[]
    episodes: Episode[]
    images: ShowImage[]
  }
}
