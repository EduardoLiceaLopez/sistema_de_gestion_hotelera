import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReservacionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
