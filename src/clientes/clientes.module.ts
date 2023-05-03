import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesResolver } from './clientes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Cliente } from './entities/cliente.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Cliente]), UsuariosModule],
  providers: [ClientesResolver, ClientesService],
})
export class ClientesModule {}
