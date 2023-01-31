import type { ShowWithEmbedded } from "~/types"

export const shows: ShowWithEmbedded[] = [
  {
    id: 1,
    url: "https://www.tvmaze.com/shows/1/under-the-dome",
    name: "Under the Dome",
    genres: ["Drama", "Science-Fiction", "Thriller"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2013-06-24",
    officialSite: "http://www.cbs.com/shows/under-the-dome/",
    schedule: {
      time: "22:00",
      days: ["Thursday"],
    },
    rating: {
      average: 6.5,
    },
    weight: 98,
    network: {
      id: 2,
      name: "CBS",
      officialSite: "https://www.cbs.com/",
    },
    externals: {
      tvrage: 25988,
      thetvdb: 264492,
      imdb: "tt1553656",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
    },
    summary:
      "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    _embedded: {
      images: [
        {
          id: 1,
          type: "poster",
          main: false,
          resolutions: {
            original: {
              url: "https://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg",
              width: 680,
              height: 1000,
            },
            medium: {
              url: "https://static.tvmaze.com/uploads/images/medium_portrait/0/1.jpg",
              width: 210,
              height: 295,
            },
          },
        },
        {
          id: 200838,
          type: "poster",
          main: true,
          resolutions: {
            original: {
              url: "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
              width: 680,
              height: 1000,
            },
            medium: {
              url: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
              width: 210,
              height: 295,
            },
          },
        },
      ],
      cast: [
        {
          person: {
            id: 1,
            name: "Mike Vogel",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg",
            },
          },
          character: {
            id: 1,
            name: 'Dale "Barbie" Barbara',
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/0/3.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/0/3.jpg",
            },
          },
        },
        {
          person: {
            id: 2,
            name: "Rachelle Lefevre",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/82/207417.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/82/207417.jpg",
            },
          },
          character: {
            id: 2,
            name: "Julia Shumway",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/0/6.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/0/6.jpg",
            },
          },
        },
        {
          person: {
            id: 3,
            name: "Alexander Koch",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/205/513325.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/205/513325.jpg",
            },
          },
          character: {
            id: 3,
            name: "Junior Rennie",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/0/10.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/0/10.jpg",
            },
          },
        },
      ],
      episodes: [
        {
          id: 1,
          name: "Pilot",
          season: 1,
          number: 1,
          airdate: "2013-06-24",
          runtime: 60,
          rating: {
            average: 7.1,
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg",
          },
          summary:
            "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
        },
        {
          id: 2,
          name: "The Fire",
          season: 1,
          number: 2,
          airdate: "2013-07-01",
          runtime: 60,
          rating: {
            average: 6.7,
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/1/4389.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/1/4389.jpg",
          },
          summary:
            "<p>While the residents of Chester's Mill face the uncertainty of life in the dome, panic is heightened when a house goes up in flames and their fire department is outside of the dome.</p>",
        },
        {
          id: 3,
          name: "Manhunt",
          season: 1,
          number: 3,
          airdate: "2013-07-08",
          runtime: 60,
          rating: {
            average: 6.6,
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/1/4390.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/1/4390.jpg",
          },
          summary:
            "<p>When a former deputy goes rogue, Big Jim recruits Barbie to join the manhunt to keep the town safe. Meanwhile, Junior is determined to escape the dome by going underground.</p>",
        },
      ],
    },
  },
  {
    id: 2,
    url: "https://www.tvmaze.com/shows/2/person-of-interest",
    name: "Person of Interest",
    genres: ["Action", "Crime", "Science-Fiction"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2011-09-22",
    officialSite: "http://www.cbs.com/shows/person_of_interest/",
    schedule: {
      time: "22:00",
      days: ["Tuesday"],
    },
    rating: {
      average: 8.8,
    },
    weight: 98,
    network: {
      id: 2,
      name: "CBS",
      officialSite: "https://www.cbs.com/",
    },
    externals: {
      tvrage: 28376,
      thetvdb: 248742,
      imdb: "tt1839578",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg",
    },
    summary:
      "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
    _embedded: {
      images: [
        {
          id: 11,
          type: "poster",
          main: false,
          resolutions: {
            original: {
              url: "https://static.tvmaze.com/uploads/images/original_untouched/0/11.jpg",
              width: 680,
              height: 1000,
            },
            medium: {
              url: "https://static.tvmaze.com/uploads/images/medium_portrait/0/11.jpg",
              width: 210,
              height: 295,
            },
          },
        },
        {
          id: 88128,
          type: "poster",
          main: false,
          resolutions: {
            original: {
              url: "https://static.tvmaze.com/uploads/images/original_untouched/35/89093.jpg",
              width: 813,
              height: 1200,
            },
            medium: {
              url: "https://static.tvmaze.com/uploads/images/medium_portrait/35/89093.jpg",
              width: 210,
              height: 295,
            },
          },
        },
        {
          id: 404836,
          type: "poster",
          main: false,
          resolutions: {
            original: {
              url: "https://static.tvmaze.com/uploads/images/original_untouched/163/407678.jpg",
              width: 680,
              height: 1000,
            },
            medium: {
              url: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407678.jpg",
              width: 210,
              height: 295,
            },
          },
        },
      ],
      cast: [
        {
          person: {
            id: 88,
            name: "James Caviezel",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/2/6581.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/2/6581.jpg",
            },
          },
          character: {
            id: 64,
            name: "John Reese",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/0/13.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/0/13.jpg",
            },
          },
        },
        {
          person: {
            id: 93,
            name: "Michael Emerson",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/2/6590.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/2/6590.jpg",
            },
          },
          character: {
            id: 69,
            name: "Harold Finch",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/0/12.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/0/12.jpg",
            },
          },
        },
        {
          person: {
            id: 90,
            name: "Kevin Chapman",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/2/6588.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/2/6588.jpg",
            },
          },
          character: {
            id: 66,
            name: "Lionel Fusco",
            image: {
              medium:
                "https://static.tvmaze.com/uploads/images/medium_portrait/0/1165.jpg",
              original:
                "https://static.tvmaze.com/uploads/images/original_untouched/0/1165.jpg",
            },
          },
        },
      ],
      episodes: [
        {
          id: 28,
          name: "Pilot",
          season: 1,
          number: 1,
          airdate: "2011-09-22",
          runtime: 60,
          rating: {
            average: 7.6,
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/35/89344.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/35/89344.jpg",
          },
          summary:
            "<p>John Reese is a former CIA operative living off the grid in NYC. When Reese is hauled into NYPD's 8th Precinct for a skirmish on the subway, he's bailed out by a man he doesn't know: Mr. Finch, a mysterious billionaire. Finch offers Reese a choice: stay on the streets and drink himself to death -- or join him in his mission to stop violent crimes before they happen. Finch has access to a secret source of information, one that identifies people who are about to be involved in violent crimes. There's just one catch: he doesn't know if these people will be the victims or the perpetrators. Skeptical but intrigued, Reese agrees to help. Together, Reese and Finch work to discover what danger is about to befall Assistant District Attorney Diane Hansen. Their actions garner the unwanted attention of NYPD homicide detective Carter -- a dedicated veteran cop who's not fond of vigilantes -- and Detective Fusco, a precinct detective who stands in the way of Reese's plans.</p>",
        },
        {
          id: 29,
          name: "Ghosts",
          season: 1,
          number: 2,
          airdate: "2011-09-29",
          runtime: 60,
          rating: {
            average: 7.3,
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/35/89355.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/35/89355.jpg",
          },
          summary:
            "<p>Finch gives Reese another social security number from the machine -- another chance to stop something terrible from happening. But there's something strange about this number. It belongs to Theresa Whitaker -- a teenage girl who was murdered two years ago. Finch claims his machine is never wrong. So why is it pointing them toward someone that it's too late to save? What does the machine know that they don't? With Detective Carter still hunting them down, Reese and Finch begin to find out what really happened to Theresa -- and discover that they might still have a chance to be there in time.</p>",
        },
        {
          id: 30,
          name: "Mission Creep",
          season: 1,
          number: 3,
          airdate: "2011-10-06",
          runtime: 60,
          rating: {
            average: 7,
          },
          image: {
            medium:
              "https://static.tvmaze.com/uploads/images/medium_landscape/35/89358.jpg",
            original:
              "https://static.tvmaze.com/uploads/images/original_untouched/35/89358.jpg",
          },
          summary:
            "<p>Reese goes undercover to find the threat surrounding the next person on Finch's list: a young army veteran named Joey Durban. Fresh out of the service, Joey seems to be adjusting well to life back home. He has a good job, a beautiful girlfriend, and his whole life ahead of him. But Reese and Finch soon discover that even though Joey's off the battlefield, he's still putting himself in the line of fire. It seems Joey and his army buddies are using the skills they learned in combat to commit daring heists in New York. According to Finch's machine, Joey's about to kill or be killed -- so Reese infiltrates the group to find out which. With Detective Carter hot on his trail, Reese is closer to getting captured than ever before as he goes on a high-risk mission that puts his life -- and Finch's -- in danger.</p>",
        },
      ],
    },
  },
]
