import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostDto } from './dto/post.dto';
import { CreatePostInput } from './dto/create-post.input';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
@Resolver()
export class PostsResolver {
  constructor (
    private postService:PostsService
  ){}

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('postId', { type: () => String }) postId: string) {
    return this.postService.findOne(postId);
  }

  @Query(() => PostDto)
  getPost(@Args('input') input: CreatePostInput) {
    return {
        _id: 'id',
        title: input.title,
        description: input.description,
    }
  }

  @Mutation(() => Post)
  createPost(@Args('input') input: CreatePostInput) {
    return this.postService.create(input)
  }
}