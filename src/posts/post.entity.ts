import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the post' })
  postId: string;
  @Column()
  @Field(() => String, { description: 'Title of the post' })
  title: string;
  @Column()
  @Field(() => String, { description: 'Description of the post' })
  description: string;
}