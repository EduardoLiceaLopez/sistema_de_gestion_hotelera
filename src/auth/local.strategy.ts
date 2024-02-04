import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super({
            usernameField: 'nombre_usuario',
            passwordField: 'contrasenia',
        });
    }

    async validate(nombre_usuario: string, contrasenia: string): Promise<any>{
        console.log("HOLAAA")
        const usuario = await this.authService.validateUser(nombre_usuario, contrasenia);
        if(usuario){   
            return usuario;
        }else {
            console.log("aqui falla")
            throw new UnauthorizedException();
        } 
    } 

}