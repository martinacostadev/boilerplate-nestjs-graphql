import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class CreatePostInput {
    @Field(() => String, { description: 'Title of the post' })
    title: string;
    @Field(() => String, { description: 'Description of the post' })
    description: string;
}