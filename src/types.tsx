export type Info = {
  text: string;
  link: string;
} | null;

export type RelatedAnimeInfo = {
  contentName: string;
  text: string;
  link: string;
};

export type Score = {
  overall: number;
  users: number;
  rank: number;
  popularity: number;
  members: number;
};

export type InformationContent = {
  contentName: string;
  description: string | { text: string; link: string | null }[];
};

export type DropdownSourceData = {
  text: string;
  dropdownContent: DropdownContent[];
  variant: DropdownWrapperVariant;
};

export type DropdownWrapperVariant =
  | "Extra Small"
  | "Small"
  | "Medium"
  | "Large";
export type DropdownContent = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  description: string;
};
export type staffData = {
  firstName: string;
  lastName: string;
  contributions: string[];
  link: string;
  image: string;
};

export type CharacterData = {
  firstName: string;
  lastName: string | null;
  type: string;
  link: string;
  image: string;
};
export type VAData = {
  firstName: string;
  lastName: string | null;
  nationality: string;
  link: string;
  image: string;
};

export type SongData = {
  title: string;
  singer: string;
  episode: null | string;
};

export type Review = {
  image: string;
  profileLink: string;
  username: string;
  helpfulCount: number;
  date: Date;
  episodesSeen: number;
  overallRating: number;
  description: string;
};

export type Recommendation = {
  animeId: string;
  users: number;
  image: string;
  title: string;
};

export type News = {
  image: string;
  title: string;
  content: {
    description: string;
    link: string;
  };
  date: Date;
  publisher: {
    username: string;
    link: string;
  };
  discussion: {
    count: number;
    link: string;
  };
};

export type ForumDiscussions = {
  title: string;
  category: "Discussion" | "Poll";
  link: string;
  ask: {
    username: string;
    link: string;
    date: Date;
  };
  repliesCount: number;
  answer: {
    username: string;
    link: string;
    date: Date;
  };
};

export type FeaturedArticle = {
  image: string;
  title: {
    description: string;
    link: string;
  };
  summary: string;
  postedBy: {
    username: string;
    link: string;
  };
  totalViews: number;
  tags: { name: string; link: string }[];
};
