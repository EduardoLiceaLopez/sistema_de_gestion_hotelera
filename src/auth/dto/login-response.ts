import { Field, ObjectType } from "@nestjs/graphql";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { UsuariosAcceso } from "src/usuarios_acceso/entities/usuarios_acceso.entity";

@ObjectType()
export class LoginResponse{

    @Field()
    access_token: string;

    @Field(()=> UsuariosAcceso)
    usuarioAcceso: UsuariosAcceso;
}