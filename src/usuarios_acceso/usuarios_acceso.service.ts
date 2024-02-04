import { ConflictException, Inject, Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { CreateUsuariosAccesoInput } from './dto/create-usuarios_acceso.input';
import { UpdateUsuariosAccesoInput } from './dto/update-usuarios_acceso.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosAcceso } from './entities/usuarios_acceso.entity';
import { Repository } from 'typeorm';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class UsuariosAccesoService {

  constructor(

    @InjectRepository(UsuariosAcceso)
    private usuariosAccesoReporitorio: Repository<UsuariosAcceso>,

    @Inject(forwardRef(()=>UsuariosService))
    private usuariosService: UsuariosService,

  ){};

  async create(createUsuariosAccesoInput: CreateUsuariosAccesoInput) {
    
    await this.usuariosService.findOne(createUsuariosAccesoInput.usuario_id);
    const usuarioAcceso = this.usuariosAccesoReporitorio.create(createUsuariosAccesoInput);
    return this.usuariosAccesoReporitorio.save(usuarioAcceso);


  }

  findAll() {
    return this.usuariosAccesoReporitorio.find();
  }

  /**   
   * 
   *   async findOne(id: number) {
   const clothe = await this.clotheRepository.findOneBy({id: id});

   if(!clothe){
    throw new NotFoundException('Any one clothe found');
   }
   return clothe;
  }
   */
  async findOne(usuario_id: number) {
    const usuarioAcceso = await this.usuariosAccesoReporitorio.findOneBy({usuario_id:usuario_id});
    if(!usuarioAcceso){
      throw new NotFoundException('Ningun usuario de acceso encontrado');
    }
    return usuarioAcceso;
  };


  async findOneByNombreUsuario(nombre_usuario: string) {
    const usuarioAcceso = await this.usuariosAccesoReporitorio.findOneBy(
      {nombre_usuario:nombre_usuario});
    return usuarioAcceso;
    
  }

/**
 *   async update(id: number, updateClotheInput: UpdateClotheInput) {
      await this.findOne(id);
      const clothe = await this.clotheRepository.update(id, updateClotheInput);
      if(!clothe){
        throw new ConflictException('Error updating this clothe');
      }
      return this.findOne(id)
  }
 */
  async update(usuario_id: number, updateUsuariosAccesoInput: UpdateUsuariosAccesoInput) {
    await this.findOne(usuario_id);
    const usuarioAcceso = await this.usuariosAccesoReporitorio.update(usuario_id, updateUsuariosAccesoInput);
    if(!usuarioAcceso){
      throw new ConflictException('Error actualizando usuario de accesso');
    }
    return this.findOne(usuario_id);
  }
  /**
   *  async remove(id: number) {
    await this.findOne(id);
    try{
      const result = await this.clotheRepository.delete(id);
      return result.affected !==0;

    }catch(err){
      throw new ConflictException(err);
    }
  }
   */

  async remove(usuario_id: number) {
    await this.findOne(usuario_id);
    try{
      const result = await this.usuariosAccesoReporitorio.delete(usuario_id);
      return result.affected !==0;

    }catch(err){
      throw new ConflictException(err);
    }
}

  async getUser(user_id: number){
    return this.usuariosService.findOne(user_id);
  };

}
