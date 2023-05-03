import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClienteInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  usuario_id: number;
}
