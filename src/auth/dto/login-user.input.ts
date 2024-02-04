import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class LoginUserInput{

    @Field()
    nombre_usuario: string;
  
    @Field()
    contrasenia: string;
}