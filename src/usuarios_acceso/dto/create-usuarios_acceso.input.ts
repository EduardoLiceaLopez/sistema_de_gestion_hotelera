import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUsuariosAccesoInput {

  @Field(()=> Int)
  usuario_id: number;

  @Field(()=> String)
  nombre_usuario: string;

  @Field(()=> String)
  contrasenia: string;

  @Field(()=> String)
  role: string;
}