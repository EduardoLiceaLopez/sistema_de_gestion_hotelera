import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTipoHabitacionInput {
  @Field(()=>String)
  tipo: string;
}
