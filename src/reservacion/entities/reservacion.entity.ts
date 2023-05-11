import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Reservacion {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
