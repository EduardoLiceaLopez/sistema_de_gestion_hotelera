import { Module, forwardRef } from '@nestjs/common';
import { UsuariosAccesoService } from './usuarios_acceso.service';
import { UsuariosAccesoResolver } from './usuarios_acceso.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosAcceso } from './entities/usuarios_acceso.entity';
import { AdminGuard } from 'src/roles/admin.guard';
import { TrabajadorAdminGuard } from 'src/roles/trabajador-admin.guard';
import { TrabajadorGuard } from 'src/roles/trabajador.guard';
import { ClienteGuard } from 'src/roles/cliente.guard';
import { JwtService } from '@nestjs/jwt';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsuariosAcceso, Usuario]), UsuariosModule],
  providers: [UsuariosAccesoResolver, UsuariosAccesoService, AdminGuard, TrabajadorAdminGuard, TrabajadorGuard, ClienteGuard, JwtService],
  exports: [UsuariosAccesoService],
})
export class UsuariosAccesoModule {}
