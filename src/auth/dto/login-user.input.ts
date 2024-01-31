import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class LoginUserInput{

    @Field(()=> String)
    nombre_usuario: string;
  
    @Field(()=> String)
    contrasenia: string;
}