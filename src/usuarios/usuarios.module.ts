import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosResolver } from './usuarios.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { TipoUsuariosService } from 'src/tipo_usuarios/tipo_usuarios.service';
import { TipoUsuariosModule } from 'src/tipo_usuarios/tipo_usuarios.module';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Cliente]), TipoUsuariosModule],
  providers: [UsuariosResolver, UsuariosService],
  exports: [UsuariosService]
})
export class UsuariosModule {
}
