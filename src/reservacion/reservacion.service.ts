import { ConflictException, Injectable } from '@nestjs/common';
import { CreateReservacionInput } from './dto/create-reservacion.input';
import { UpdateReservacionInput } from './dto/update-reservacion.input';
import { ResponseReservacionOutput } from './dto/response-reservacion-output';
import { Repository } from 'typeorm';
import { Reservacion } from './entities/reservacion.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReservacionService {

  constructor(

    @InjectRepository(Reservacion)
    private reservacionRepositorio: Repository<Reservacion>,
  ){

  }


  create(createReservacionInput: CreateReservacionInput) {
    return 'This action adds a new reservacion';
  }

  findAll() {
    return `This action returns all reservacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservacion`;
  }

  update(id: number, updateReservacionInput: UpdateReservacionInput) {
    return `This action updates a #${id} reservacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservacion`;
  }

  async nuevaReservacion(createReservacionInput: CreateReservacionInput, responseRO: ResponseReservacionOutput){

    const pre_reservacion = await this.reservacionRepositorio.create(createReservacionInput);
    
    if(pre_reservacion){

      const response = Object.assign(responseRO, createReservacionInput);

      if(response){

      //Obtiene la fecha actual del sistema
      //Atender formatos de hora
      const fecha_hoy = new Date();
      fecha_hoy.setHours(0,0,0,0);
      responseRO.fecha_reserva = fecha_hoy;

      //Obtener la hora
      const hora = new Date();
      const hora_actual = `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`;
      responseRO.hora = hora_actual;

      





      }

      throw new ConflictException('Ocurrió un error al registrar su reservacion')

    }


  }
}
