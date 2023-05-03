import { Injectable } from '@nestjs/common';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class ClientesService {

  constructor(
  
    @InjectRepository(Cliente)
    private clienteRepositorio : Repository<Cliente>,
    private usuarioServicio: UsuariosService,
  ){
  }


  async create(createClienteInput: CreateClienteInput) {
    const cliente = await this.clienteRepositorio.create(createClienteInput);

    return this.clienteRepositorio.save(cliente);
  }

  findAll() {
    this.clienteRepositorio.find();
  }

  findOne(id: number) {
    return this.clienteRepositorio.findOneBy({usuario_id: id});
  }
  getUsuario(usuario_id: number): Promise<Usuario>{
    return this.usuarioServicio.findOne(usuario_id)
  };
  /*
  update(id: number, updateClienteInput: UpdateClienteInput) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
  */
 
}
