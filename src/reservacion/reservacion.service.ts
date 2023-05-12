import { ConflictException, Injectable } from '@nestjs/common';
import { CreateReservacionInput } from './dto/create-reservacion.input';
import { UpdateReservacionInput } from './dto/update-reservacion.input';
import { Repository } from 'typeorm';
import { Reservacion } from './entities/reservacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseReservacionOutput } from './dto/response-reservacion.output';
import { response } from 'express';


@Injectable()
export class ReservacionService {

  constructor(

    @InjectRepository(Reservacion)
    private reservacionesRepository: Repository<Reservacion>
  ){}


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

  reservacionCliente(createReservacionInput: CreateReservacionInput, responseReservacionOutput: ResponseReservacionOutput){

    const reservacion = this.reservacionesRepository.create(createReservacionInput);

    if(!reservacion){
      throw new ConflictException('Ocurrió un error al registrar su reservacion')

    } else{

      //Obtener el día
      const fechaActual = new Date();
      responseReservacionOutput.fecha_reserva = fechaActual.toLocaleDateString('es-ES');

      //Obtener la hora
      const hora = new Date();
      const hora_actual = `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`;
      responseReservacionOutput.hora = hora_actual;
      
    }
  }


}
