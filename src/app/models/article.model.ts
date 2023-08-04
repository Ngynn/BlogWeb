import { User } from "./user.model";

export interface Article {
    title: string;
    description: string;
    cover_image: string;
    url: string;
    readable_publish_date: string;
    user: User
    
}