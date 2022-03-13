import { Field, ID, ObjectType } from '@nestjs/graphql'
@ObjectType()
export class PostDto {
    @Field(() => ID)
    _id: string;
    @Field()
    readonly title: string;
    @Field()
    readonly description: string;
}