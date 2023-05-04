import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosResolver } from './usuarios.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { TipoUsuariosModule } from '../tipo_usuarios/tipo_usuarios.module';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), TipoUsuariosModule],
  providers: [UsuariosResolver, UsuariosService],
  exports: [UsuariosService]
})
export class UsuariosModule {
}
