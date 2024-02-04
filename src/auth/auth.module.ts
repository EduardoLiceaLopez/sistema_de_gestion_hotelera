import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { UsuariosAccesoModule } from 'src/usuarios_acceso/usuarios_acceso.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosAcceso } from 'src/usuarios_acceso/entities/usuarios_acceso.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario, UsuariosAcceso]),
    PassportModule, 
    UsuariosModule, UsuariosAccesoModule,
    JwtModule.register({

    signOptions: {expiresIn: '3600s'},
    secret: 'hide-me',
  }), 
  ],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}