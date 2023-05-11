import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHabitacionInput } from './dto/create-habitacion.input';
import { UpdateHabitacionInput } from './dto/update-habitacion.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Habitacion } from './entities/habitacion.entity';
import { Repository } from 'typeorm';
import { TipoHabitacion } from '../tipo_habitacion/entities/tipo_habitacion.entity';
import { TipoHabitacionService } from '../tipo_habitacion/tipo_habitacion.service';

@Injectable()
export class HabitacionService {

  constructor(
    
    @InjectRepository(Habitacion)
    private habitacionRepositorio: Repository<Habitacion>,

    private tipoHabitacionServicio: TipoHabitacionService,
  ){};

  //CREATE
  create(habitacion: CreateHabitacionInput): Promise<Habitacion>{
    const newHabitacion =  this.habitacionRepositorio.create(habitacion)
    return this.habitacionRepositorio.save(newHabitacion);
  }


  //READ

  //Muestra todos los usuarios
  findAll(): Promise<Habitacion[]> {
    return this.habitacionRepositorio.find();
  }

  //Muestra solo uno (según el id dado) de los usuarios
  async findOne(num_habitacion: number): Promise<Habitacion> {
    const usuario = await this.habitacionRepositorio.findOne({
      where:{
        num_habitacion,
      }
    })
    if(usuario){
      return usuario;
    } else{
      throw new NotFoundException(`La habitación  ${num_habitacion} no fue econtrada o no existe`);
    }
  }

  //Invoca el servicio del repositorio de tipo de usuario para conseguir sus datos
  getTipoHabitacion(tipo_habitacion_id: number): Promise<TipoHabitacion>{
    return this.tipoHabitacionServicio.findOne(tipo_habitacion_id);

  };

  //Fin READ


  //UPDATE
  async update(num_habitacion: number, updateHabitacionInput: UpdateHabitacionInput): Promise<Habitacion> {
    const habitacion = await this.habitacionRepositorio.findOneBy({num_habitacion: num_habitacion})

    if(habitacion){
      await this.habitacionRepositorio.update(num_habitacion, updateHabitacionInput);
      return this.habitacionRepositorio.findOneBy({num_habitacion: num_habitacion})
    } else {
      throw new NotFoundException (`La habitacion ${num_habitacion} no fue econtrada o no existe`);
    }
  }

  //DELETE
  async remove(num_habitacion: number): Promise<Boolean> {
    const habitacion = await this.habitacionRepositorio.findOne({
      where: {num_habitacion}
    })

    if (habitacion){
      const resultado = await this.habitacionRepositorio.delete(num_habitacion);
      
      if (resultado.affected !==0){
        return true;
      }
    } else {
      throw new NotFoundException(`Habitacion con el ID ${num_habitacion} no fue econtrado o no existe`);
    }

  }
}
