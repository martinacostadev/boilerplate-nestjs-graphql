import { Injectable, NotFoundException, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/create-post.input'

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
      ) {}

    async create(createPostInput: CreatePostInput): Promise<Post> {
      const post = this.postRepository.create(createPostInput);
      return await this.postRepository.save(post);
    }

    async findAll(): Promise<Array<Post>> {
      try {
        return await this.postRepository.find();
      } catch (error) {
        throw new HttpException('500', error.message)
      }
      
    }

    async findOne(postId: string): Promise<Post> {
      const post = await this.postRepository.findOne(postId);
      if (!post) {
        throw new NotFoundException(`post #${postId} not found`);
      }
      return post;
    }
}
