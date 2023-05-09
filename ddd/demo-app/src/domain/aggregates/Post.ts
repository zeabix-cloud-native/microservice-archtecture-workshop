/**
 * Demo for DDD (Aggregate)
 */

import { IUser } from "../factory/IUser"
import {v4 as uuidv4} from 'uuid';
import { PostStatus } from "./PostStatus";

export class Post {
    id: string
    topic: string
    content: string

    // Contains Entities (IUser)
    author: IUser

    // Contains Object Values
    status: PostStatus

    constructor() {
        // Aggregate can have has unique identifier and it should not be changed
        // similar to Entities
        this.id = uuidv4();

        this.topic = '';
        this.content = '';
        this.author = null as unknown as IUser
        this.status = null as unknown as PostStatus
    }

    setTopic(topic: string): void {
        this.topic = topic;
    }

    setContent(content: string): void {
        this.content = content;
    }

    setAuthor(author: IUser): void {
        this.author = author;
    }

    publish(): void {

        // PostStatus is Value Object, we just simply replace the 
        // old status with the new one
        // PostStatus is immutable
        this.status = new PostStatus('PUBLISHED')
    }
}