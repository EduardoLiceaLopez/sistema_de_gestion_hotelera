import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosResolver } from './usuarios.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { TipoUsuariosModule } from '../tipo_usuarios/tipo_usuarios.module';
import { Reservacion } from 'src/reservacion/entities/reservacion.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Reservacion]), TipoUsuariosModule],
  providers: [UsuariosResolver, UsuariosService],
  exports: [UsuariosService]
})
export class UsuariosModule {
}
