import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { ClientesService } from './clientes.service';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Cliente)
export class ClientesResolver {
  constructor(private readonly clientesService: ClientesService) {}

  @Mutation(() => Cliente)
  createCliente(@Args('createClienteInput') createClienteInput: CreateClienteInput) {
    return this.clientesService.create(createClienteInput);
  }

  @Query(() => [Cliente], { name: 'clientes' })
  findAll() {
    return this.clientesService.findAll();
  }

  @Query(() => Cliente, { name: 'cliente' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.clientesService.findOne(id);
  }
  @ResolveField((returns)=> Usuario)
  async tipoUsuario(@Parent() cliente: Cliente): Promise<Usuario>{
    const usuario = await this.clientesService.getUsuario(cliente.usuario_id);

    //Esta comprobacion se hace para que en caso de que no haya un tipo de usuario
    //Se devuelva una alternativa de respuesta y no solo null
    if (usuario){

      return usuario;

    } else {
      throw new NotFoundException('No hay un usuario asociado a este cliente')
    } 


  }


  /*
  @Mutation(() => Cliente)
  updateCliente(@Args('updateClienteInput') updateClienteInput: UpdateClienteInput) {
    return this.clientesService.update(updateClienteInput.id, updateClienteInput);
  }

  @Mutation(() => Cliente)
  removeCliente(@Args('id', { type: () => Int }) id: number) {
    return this.clientesService.remove(id);
  }
  */
}
