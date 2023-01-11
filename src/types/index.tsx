export interface Colection {
  name: string;
  id: number;
  series: Series[];
}

export interface Series {
  name: string;
  id: number;
  colection?: Book[];
  games?: Game[];
  title?: Title[];
  edition?: Edition[];
}

export interface Book {
  userId: number;
  image: string;
  title: string;
  author: string;
  cover_art: string;
  interior_art: string;
  sections?: number;
  published: number;
  id: number;
  description:string;
}

export interface Game {
  userId: number;
  image?: string;
  title: string;
  genre: any;
  developer: string;
  publisher: string;
  description: string;
  id: number;
}

export interface Title {
  name: string;
  id: number;
  comics: Comic[];
}

export interface Comic {
  image: string;
  title: string;
  creators: string[];
  published: number;
  id: number;
}

export interface Edition {
  name: string;
  id: number;
  cards: Card[];
}

export interface Card {
  image: string;
  name: string;
  id: number;
  series?: Series[];
}

export interface Series {
  image: string;
  name: string;
  // colection?: 
}

export interface Posts {
  title: string;
  name: string;
  avatar: string;
  message: string;
  id: number;
}

export type User = {
  avatar: string;
  email: string;
  name: string;
  id: number;
  likedPosts?: object[];
  myCollection?: string[];
};

export interface AllUsers {
  avatar: string;
  email: string;
  name: string;
  id: number;
}