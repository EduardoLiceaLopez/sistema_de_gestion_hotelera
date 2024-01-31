import { CreateUsuariosAccesoInput } from './create-usuarios_acceso.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUsuariosAccesoInput extends PartialType(CreateUsuariosAccesoInput) {
  @Field(()=> Int)
  usuario_id: number;
}
