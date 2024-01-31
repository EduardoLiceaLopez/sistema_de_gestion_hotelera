import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';
import * as bcrypt from 'bcrypt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { CreateUsuarioInput } from 'src/usuarios/dto/create-usuario.input';
import { UsuariosAccesoService } from 'src/usuarios_acceso/usuarios_acceso.service';
import { UsuariosAcceso } from 'src/usuarios_acceso/entities/usuarios_acceso.entity';
import { CreateUsuariosAccesoInput } from 'src/usuarios_acceso/dto/create-usuarios_acceso.input';


@Injectable()
export class AuthService {

    constructor(
            private jwtService: JwtService,

            private usuariosAccesoService: UsuariosAccesoService,
        ){}

    async validateUser(nombre_usuario: string, contrasenia: string): Promise <any>{

        const usuario = await this.usuariosAccesoService.findOneByNombreUsuario(nombre_usuario);

        if(usuario){
            
            const valid = await bcrypt.compare(contrasenia, usuario?.contrasenia);

            if(usuario && valid){
                const {contrasenia, ...result} = usuario;
                return result;
            }
                return null;
        } else{
            throw new NotFoundException(`El usario con el usuario ${nombre_usuario}`);
        }


    }

    async login(usuarioAcceso: UsuariosAcceso){
        return {
            access_token: this.jwtService.sign({
                nombre_usuario: usuarioAcceso.nombre_usuario,
                user_id: usuarioAcceso.usuario_id,
                role: usuarioAcceso.role
            }),
            usuarioAcceso,
        };
    }

    async signup(signupUserAccessInput: CreateUsuariosAccesoInput){
        const usuarioAcceso = await this.usuariosAccesoService.findOneByNombreUsuario(signupUserAccessInput.nombre_usuario);

        if (usuarioAcceso){
            
            throw new ConflictException('Este usuario ya está registrado!');
        }

        const contrasenia = await bcrypt.hash(signupUserAccessInput.contrasenia, 10);
        
        return this.usuariosAccesoService.create({
            ...signupUserAccessInput,
            contrasenia,
        });
    }
}
