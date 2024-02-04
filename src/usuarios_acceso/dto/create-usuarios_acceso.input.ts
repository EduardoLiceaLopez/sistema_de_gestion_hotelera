import { InputType, Int, Field } from '@nestjs/graphql';
import { Matches, MinLength } from 'class-validator';

@InputType()
export class CreateUsuariosAccesoInput {

  @Field(()=> Int)
  usuario_id: number;

  @Field(()=> String)
  nombre_usuario: string;
  
  @MinLength(9, {message: 'La contraseña debe tener más de 8 caracteres'})
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'La contraseña debe contener al menos una mayúscula, una minúscula, un número o caracter especial'})
  @Field(()=> String)
  contrasenia: string;

  @Field(()=> String)
  role: string;
}