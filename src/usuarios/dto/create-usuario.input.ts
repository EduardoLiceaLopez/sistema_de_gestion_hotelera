import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsInt, IsMobilePhone, IsNotEmpty, IsPhoneNumber, MaxLength, MinLength } from "class-validator";



@InputType()
export class CreateUsuarioInput {

  @MinLength(9, {message: 'La contraseña debe tener más de 8 caracteres'})
  @Field()
  nombre: string;

  @Field()
  apPaterno: string;

  @Field({nullable: true})
  apMaterno?: string;

  @Field()
  fech_nacimiento: string;
  
  @IsMobilePhone()
  @Field()
  numTelefono: string;

  
  //Datos de acceso
  // @Field()
  // correo: string;

  // @Field()
  // contrasenia: string;

  // @IsOptional()
  // @Field()
  // role_usuario: string = 'cliente';
  
}
