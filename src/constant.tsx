import {
  DropdownContent,
  DropdownSourceData,
  Info,
  InformationContent,
  RelatedAnimeInfo,
  Score,
  staffData,
  VAData,
  CharacterData,
  SongData,
  Review,
  Recommendation,
  News,
  ForumDiscussions,
  FeaturedArticle,
} from "./types";

export const buttonList = [
  "Details",
  "Videos",
  "Episodes",
  "Reviews",
  "Recommendations",
  "Stats",
  "Characters & Staff",
  "News",
  "Forum",
  "Featured",
  "Clubs",
  "Pictures",
  "More Info",
];

export const breadcrumbsNavList = [
  { text: "Top", link: "/" },
  { text: "Anime", link: "/" },
  { text: "Mob Psycho 100", link: "/" },
];

export const cardContent = [
  { image: undefined, description: "Content 1 Description" },
  { image: undefined, description: "Content 2 Description" },
  { image: undefined, description: "Content 3 Description" },
];

export const characterList: [CharacterData, VAData][] = [
  [
    {
      firstName: "Arataka",
      lastName: "Reigen",
      type: "Main",
      link: "/",
      image: "/",
    },
    {
      firstName: "Takahiro",
      lastName: "Sakurai",
      nationality: "Japanese",
      link: "/",
      image: "/",
    },
  ],
  [
    {
      firstName: "Shigeo",
      lastName: "Kageyama",
      type: "Main",
      link: "/",
      image: "/",
    },
    {
      firstName: "Setsio",
      lastName: "Itou",
      nationality: "Japanese",
      link: "/",
      image: "/",
    },
  ],
  [
    { firstName: "Ekubo", lastName: null, type: "Main", link: "/", image: "/" },
    {
      firstName: "Akio",
      lastName: "Ootsuka",
      nationality: "Japanese",
      link: "/",
      image: "/",
    },
  ],
  [
    {
      firstName: "Teruki",
      lastName: "Hanazawa",
      type: "Main",
      link: "/",
      image: "/",
    },
    {
      firstName: "Yoshitsugu",
      lastName: "Matsuoka",
      nationality: "Japanese",
      link: "/",
      image: "/",
    },
  ],
  [
    {
      firstName: "Ritsu",
      lastName: "Kageyama",
      type: "Main",
      link: "/",
      image: "/",
    },
    {
      firstName: "Miyu",
      lastName: "Irino",
      nationality: "Japanese",
      link: "/",
      image: "/",
    },
  ],
  [
    {
      firstName: "Musashi",
      lastName: "Gouda",
      type: "Supporting",
      link: "/",
      image: "/",
    },
    {
      firstName: "Toshiko",
      lastName: "Seki",
      nationality: "Japanese",
      link: "/",
      image: "/",
    },
  ],
  [
    {
      firstName: "Tome",
      lastName: "Kurata",
      type: "Supporting",
      link: "/",
      image: "/",
    },
    {
      firstName: "Atsume",
      lastName: "Tanizaki",
      nationality: "Japanese",
      link: "/",
      image: "/",
    },
  ],
  [
    {
      firstName: "Shou",
      lastName: "Suzuki",
      type: "Supporting",
      link: "/",
      image: "/",
    },
    {
      firstName: "Sachi",
      lastName: "Kokuryu",
      nationality: "Japanese",
      link: "/",
      image: "/",
    },
  ],
  [
    {
      firstName: "Tenga",
      lastName: "Onigawara",
      type: "Supporting",
      link: "/",
      image: "/",
    },
    {
      firstName: "Yoshimasa",
      lastName: "Hosoya",
      nationality: "Japanese",
      link: "/",
      image: "/",
    },
  ],
];
export const score: Score = {
  overall: 8.48,
  users: 957231,
  rank: 122,
  popularity: 35,
  members: 1596082,
};
export const infos: {
  season: Info;
  category: Info;
  studio: Info;
} = {
  season: {
    text: "Summer 2016",
    link: "/",
  },
  category: {
    text: "TV",
    link: "/",
  },
  studio: {
    text: "Bones",
    link: "/",
  },
};
export const synopsis = `Eighth-grader Shigeo "Mob" Kageyama has tapped into his inner wellspring of psychic prowess at a young age. But the power quickly proves to be a liability when he realizes the potential danger in his skills. Choosing to suppress his power, Mob's only present use for his ability is to impress his longtime crush, Tsubomi, who soon grows bored of the same tricks.
      In order to effectuate control on his skills, Mob enlists himself under the wing of Arataka Reigen, a con artist claiming to be a psychic, who exploits Mob's powers for pocket change. Now, exorcising evil spirits on command has become a part of Mob's daily, monotonous life. However, the psychic energy he exerts is barely the tip of the iceberg; if his vast potential and unrestrained emotions run berserk, a cataclysmic event that would render him completely unrecognizable will be triggered. The progression toward Mob's explosion is rising and attempting to stop it is futile.
      [Written by MAL Rewrite]`;
export const relatedAnime: RelatedAnimeInfo[] = [
  {
    contentName: "Adaptation",
    text: "Mob Psycho 100",
    link: "/",
  },
  {
    contentName: "Summary",
    text: "Mob Psycho 100: Reigen - Shirarezaru Kiseki no Reinouryokusha",
    link: "/",
  },
  {
    contentName: "Side Story",
    text: "Mob Psycho Mini",
    link: "/",
  },
  {
    contentName: "Sequel",
    text: "Mob Psycho 100 II",
    link: "/",
  },
];
export const background: string | null = null;
export const staffList: staffData[] = [
  {
    firstName: "Yuzuru",
    lastName: "Tachikawa",
    contributions: ["Director", "Episode Director", "Storyboard"],
    link: "/",
    image: "",
  },
  {
    firstName: "Kazuhiro",
    lastName: "Wakabayashi",
    contributions: ["Sound Director"],
    link: "/",
    image: "",
  },
  {
    firstName: "Kenishi",
    lastName: "Fujisawa",
    contributions: [
      "Episode Director",
      "Storyboard",
      "Animation Director",
      "Key Animation",
    ],
    link: "/",
    image: "",
  },
  {
    firstName: "Takefumi",
    lastName: "Anzai",
    contributions: ["Episode Director", "Storyboard"],
    link: "/",
    image: "",
  },
];

export const openingThemeList: SongData[] = [
  { title: "99", singer: "Mob Choir", episode: null },
];
export const endingThemeList: SongData[] = [
  { title: "Refrain Boy", singer: "ALL OFF", episode: "1-7, 9-11" },
  { title: "Refrain Boy -english ver-", singer: "ALL OFF", episode: "8" },
  { title: "Refrain Boy -tekina remix-", singer: "ALL OFF", episode: "12" },
];

export const alternativesTitles: InformationContent[] = [
  {
    contentName: "Synonyms",
    description: [
      { text: "Mob Psycho Hyaku", link: null },
      { text: "Mob Psycho One Hundred", link: "/" },
    ],
  },
  {
    contentName: "Japanese",
    description: "モブサイコ100",
  },
  {
    contentName: "English",
    description: "Mob Psycho 100",
  },
];

export const information: InformationContent[] = [
  { contentName: "Type", description: "TV" },
  { contentName: "Episode", description: "12" },
  { contentName: "Status", description: "Finished Airing" },
  { contentName: "Aired", description: "Jul 11, 2016 to Sep 27, 2016" },
  {
    contentName: "Premiered",
    description: [{ text: "Summer 2016", link: "/" }],
  },
  { contentName: "Broadcast", description: "Tuesdays at 00:00 (JST)" },
  {
    contentName: "Producers",
    description: [
      { text: "Warner Bros. Japan", link: "/" },
      { text: "KlockWorx", link: "/" },
      { text: "BS Fuji", link: "/" },
      { text: "Hakuhodo DY Music & Pictures", link: "/" },
      { text: "Shogakukan", link: "/" },
    ],
  },
  {
    contentName: "Licensors",
    description: [
      { text: "Funimation", link: "/" },
      { text: "Crunchyroll", link: "/" },
    ],
  },
  { contentName: "Studios", description: "Bones" },
  { contentName: "Source", description: "Web Manga" },
  {
    contentName: "Genres",
    description: [
      { text: "Action", link: "/" },
      { text: "Comedy", link: "/" },
      { text: "Slice of Life", link: "/" },
      { text: "Supernatural", link: "/" },
    ],
  },
  { contentName: "Duration", description: "24 min. per ep." },
  { contentName: "Rating", description: "PG-13 - Teens 13 or older" },
];
export const statistics: InformationContent[] = [
  {
    contentName: "Score",
    description: "8.48 (scored by 957,231 users)",
  },
  {
    contentName: "Ranked",
    description: "#121",
  },
  {
    contentName: "Popularity",
    description: "#35",
  },
  {
    contentName: "Members",
    description: "1,599,342",
  },
  {
    contentName: "Favorites",
    description: "34,737",
  },
];

export const externalLinks: { text: string; link: string }[] = [
  { text: "Official Sites", link: "/" },
  { text: "AnimeDB", link: "/" },
  { text: "AnimeNewsNetwork", link: "/" },
  { text: "Wikipedia", link: "/" },
];
//#region Dropdown Content
export const animeDropdownContent: DropdownContent[] = [
  { description: "Anime Search" },
  { description: "Top Anime" },
  { description: "Seasonal Anime" },
  { description: "Reviews" },
  { description: "Recommendations" },
  { description: "2021 Challenge" },
  { description: "Fantasy Anime League" },
];
export const mangaDropdownContent: DropdownContent[] = [
  { description: "Manga Search" },
  { description: "Top Manga" },
  { description: "Manga Store" },
  { description: "Reviews" },
  { description: "Recommendations" },
  { description: "2021 Challenge" },
];
export const communityDropdownContent: DropdownContent[] = [
  { description: "Forums" },
  { description: "Clubs" },
  { description: "Blogs" },
  { description: "Users" },
];
export const industryDropdownContent: DropdownContent[] = [
  { description: "News" },
  { description: "Featured Articles" },
  { description: "People" },
  { description: "Characters" },
  { description: "MALXJapan" },
];
export const watchDropdownContent: DropdownContent[] = [
  { description: "Episode Videos" },
  { description: "Anime Trailers" },
];
export const readDropdownContent: DropdownContent[] = [
  { description: "Manga Store" },
];
export const helpDropdownContent: DropdownContent[] = [
  { description: "About" },
  { description: "Support" },
  { description: "Advertising" },
  { description: "FAQ" },
  { description: "Report" },
  { description: "Staff" },
  { description: "MAL Supporter" },
];
//#endregion
export const dropdownList: DropdownSourceData[] = [
  { text: "Anime", dropdownContent: animeDropdownContent, variant: "Small" },
  { text: "Manga", dropdownContent: mangaDropdownContent, variant: "Small" },
  {
    text: "Community",
    dropdownContent: communityDropdownContent,
    variant: "Large",
  },
  {
    text: "Industry",
    dropdownContent: industryDropdownContent,
    variant: "Medium",
  },
  { text: "Watch", dropdownContent: watchDropdownContent, variant: "Small" },
  {
    text: "Read",
    dropdownContent: readDropdownContent,
    variant: "Extra Small",
  },
  {
    text: "Help",
    dropdownContent: helpDropdownContent,
    variant: "Extra Small",
  },
];
export const optionsList = [
  "All",
  "Anime",
  "Manga",
  "Character",
  "Manga Store",
  "News",
  "Featured Articles",
  "Forum",
  "Clubs",
  "Users",
];

export const reviewsList: Review[] = [
  {
    date: new Date(2016, 9, 26),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo tempore tempora, inventore alias ducimus itaque earum iure placeat repellat qui eligendi similique omnis harum mollitia quo nam officia? Molestias, quia.",
    episodesSeen: 12,
    helpfulCount: 500,
    image: "/",
    overallRating: 10,
    profileLink: "/",
    username: "start200",
  },
  {
    date: new Date(2016, 9, 26),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo tempore tempora, inventore alias ducimus itaque earum iure placeat repellat qui eligendi similique omnis harum mollitia quo nam officia? Molestias, quia.",
    episodesSeen: 12,
    helpfulCount: 500,
    image: "/",
    overallRating: 10,
    profileLink: "/",
    username: "start200",
  },
];

export const recommendationList: Recommendation[] = [
  { image: "/", title: "One Punch Man", users: 100, animeId: "OPM1" },
  { image: "/", title: "One Punch Man", users: 100, animeId: "OPM2" },
  { image: "/", title: "No Game No Life", users: 2, animeId: "NGNL1" },
  { image: "/", title: "One Punch Man", users: 100, animeId: "OPM3" },
  { image: "/", title: "One Punch Man", users: 100, animeId: "OPM4" },
  { image: "/", title: "One Punch Man", users: 100, animeId: "OPM5" },
  { image: "/", title: "One Punch Man", users: 100, animeId: "OPM6" },
  { image: "/", title: "One Punch Man", users: 100, animeId: "OPM7" },
  { image: "/", title: "One Punch Man", users: 100, animeId: "OPM8" },
  { image: "/", title: "One Punch Man", users: 100, animeId: "OPM9" },
];

export const recentNewsList: News[] = [
  {
    title: "North American Anime & Manga Releases for June",
    content: {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati nesciunt vitae saepe repudiandae accusantium doloribus sunt ducimus, harum atque non voluptatum eaque architecto veritatis nostrum, nulla quam earum optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati nesciunt vitae saepe repudiandae accusantium doloribus sunt ducimus, harum atque non voluptatum eaque architecto veritatis nostrum, nulla quam earum optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati nesciunt vitae saepe repudiandae accusantium doloribus sunt ducimus, harum atque non voluptatum eaque architecto veritatis nostrum, nulla quam earum optio?",
      link: "/",
    },
    date: new Date(2020, 12, 12, 10, 5),
    discussion: {
      count: 13,
      link: "/",
    },
    image: "/",
    publisher: {
      username: "Bai Ning Bing",
      link: "/",
    },
  },
  {
    title: "Q4 2018 Anime & Manga Licenses [Update 12/31]",
    content: {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati nesciunt vitae saepe repudiandae accusantium doloribus sunt ducimus, harum atque non voluptatum eaque architecto veritatis nostrum, nulla quam earum optio?",
      link: "/",
    },
    date: new Date(2020, 12, 12, 12, 12),
    discussion: {
      count: 28,
      link: "/",
    },
    image: "/",
    publisher: {
      username: "Fang Yuan",
      link: "/",
    },
  },
];

export const forumDiscussionsList: ForumDiscussions[] = [
  {
    title: "Is mob psycho gonna get better..?",
    category: "Discussion",
    link: "/",
    answer: {
      username: "bob",
      link: "/",
      date: new Date(2020, 12, 12, 2, 43),
    },
    repliesCount: 37,
    ask: {
      username: "Boi",
      link: "/",
      date: new Date(2019, 12, 12, 2, 43),
    },
  },
  {
    title: "Mob Psycho 100 Episode 12 Discussion",
    category: "Poll",
    link: "/",
    answer: {
      username: "bob",
      link: "/",
      date: new Date(2020, 12, 12, 2, 43),
    },
    repliesCount: 37,
    ask: {
      username: "Boboboi",
      link: "/",
      date: new Date(2019, 12, 12, 2, 43),
    },
  },
];

export const featuredArticlesList: FeaturedArticle[] = [
  {
    title: {
      description: "In Numbers: The Best Anime of the Decade",
      link: "/",
    },
    image: "/",
    summary:
      "What's the #1 anime of the 2010s? Which year was the best? What studio had the most hits? We have the answers to all these questions and more!",
    postedBy: { username: "bob123", link: "/" },
    totalViews: 100000,
    tags: [],
  },
  {
    title: { description: "Top 20 Best Anime of 2016", link: "/" },
    image: "/",
    summary:
      "2016 was weird, but it was a great year for our favorite medium! We were spoiled with a variety of excellent series. Now let’s take a look at the top 20 best anime of 2016!",
    postedBy: { username: "bob123", link: "/" },
    totalViews: 100000,
    tags: [
      { name: "Recommendation", link: "/" },
      { name: "Collection", link: "/" },
    ],
  },
];
