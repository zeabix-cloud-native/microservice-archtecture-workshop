/**
 * Demo for DDD, Value Object
 * The PostStatus is considered the Object Values
 * - Does not have identifier
 * - Immutable
 * - Create new instance to replace old instance instead of modify the old value
 * - No setXXX() methods required 
 */

export class PostStatus {
    status: string

    constructor(status: string){
        this.status = status;
    }
}