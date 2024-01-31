import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UsuariosAccesoService } from './usuarios_acceso.service';
import { UsuariosAcceso } from './entities/usuarios_acceso.entity';
import { CreateUsuariosAccesoInput } from './dto/create-usuarios_acceso.input';
import { UpdateUsuariosAccesoInput } from './dto/update-usuarios_acceso.input';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => UsuariosAcceso)
export class UsuariosAccesoResolver {
  constructor(private readonly usuariosAccesoService: UsuariosAccesoService) {}

  @Mutation(() => UsuariosAcceso, { name: 'usuarioAccesoCreate' })
  createUsuariosAcceso(@Args('createUsuariosAccesoInput') createUsuariosAccesoInput: CreateUsuariosAccesoInput) {
    return this.usuariosAccesoService.create(createUsuariosAccesoInput);
  }

  @Query(() => [UsuariosAcceso], { name: 'usuariosAccesoRead' })
  findAll() {
    return this.usuariosAccesoService.findAll();
  }

  @Query(() => UsuariosAcceso, { name: 'usuarioAccesoRead' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usuariosAccesoService.findOne(id);
  }

  @Mutation(() => UsuariosAcceso, { name: 'usuarioAccesoUpdate' })
  updateUsuariosAcceso(@Args('updateUsuariosAccesoInput') updateUsuariosAccesoInput: UpdateUsuariosAccesoInput) {
    return this.usuariosAccesoService.update(updateUsuariosAccesoInput.usuario_id, updateUsuariosAccesoInput);
  }

  @Mutation(() => UsuariosAcceso, { name: 'usuarioAccesoDelete' })
  removeUsuariosAcceso(@Args('id', { type: () => Int }) id: number) {
    return this.usuariosAccesoService.remove(id);
  }

  @ResolveField((returns)=> Usuario)
  async usuario(@Parent() userAccess: UsuariosAcceso){
  const usuario = await this.usuariosAccesoService.getUser(userAccess.usuario_id);
  
    if (usuario){
      return usuario;
    }else{
      throw new NotFoundException('User not found for this user_access');
    }

  }
}
