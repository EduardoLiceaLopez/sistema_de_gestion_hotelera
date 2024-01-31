import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './gql-auth.guard';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { CreateUsuarioInput } from 'src/usuarios/dto/create-usuario.input';
import { UsuariosAccesoService } from 'src/usuarios_acceso/usuarios_acceso.service';
import { CreateUsuariosAccesoInput } from 'src/usuarios_acceso/dto/create-usuarios_acceso.input';
import { UsuariosAcceso } from 'src/usuarios_acceso/entities/usuarios_acceso.entity';

@Resolver()
export class AuthResolver {

    constructor(private authService: AuthService,
                
                private usuariosAccesoService: UsuariosAccesoService,
                ){}

    //@UseGuards(GqlAuthGuard)
    @Query(()=> LoginResponse, {nullable: true})
    async login(@Args('loginUserAccessInput') loginUserAccessInput: LoginUserInput): Promise<LoginResponse>{

        const usuarioAcces = await this.usuariosAccesoService.findOneByNombreUsuario(loginUserAccessInput.nombre_usuario);

        return this.authService.login(usuarioAcces);
    }
    
    @Mutation(()=> UsuariosAcceso, {name: 'usuarioAccesoCreate'})
    signup(@Args('signupUserInput') signupUserInput: CreateUsuariosAccesoInput){
        return this.authService.signup(signupUserInput)
    }

}
