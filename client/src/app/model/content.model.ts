import { Tag } from './tag.model';
import { User } from './user.model';

export interface Content {
    tag: Tag[],
    _id: string,
    title: string,
    gambar: string,
    content: string,
    creator: User,
    createdAt?: Date,
    updatedAt?: Date
}