import { iCollectionItem } from "../contextDashboard";

export interface iForum {
}

export interface iUserDetail {
    admin?:         boolean;
    age:            number;
    avatar:         string;
    email:          string;
    followed?:      iUserDetail[];
    id:             number;
    likedPosts?:    iPost[];
    myCollection?:  iCollectionItem[];
    name:           string;
    password:       string;
}

interface iPost {
    userId:  number;
    title:   string;
    message: string;
    id:      number;
}