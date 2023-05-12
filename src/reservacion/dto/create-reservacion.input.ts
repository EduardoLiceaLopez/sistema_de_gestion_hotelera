import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReservacionInput {

  @Field()
  id_persona: number;

  @Field()
  numero_huespedes: number;

  @Field()
  fecha_inicio: string;

  @Field()
  fecha_final: string;

}
