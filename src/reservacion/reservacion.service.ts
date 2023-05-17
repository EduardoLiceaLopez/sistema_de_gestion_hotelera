import { ConflictException, Injectable } from '@nestjs/common';
import { CreateReservacionInput } from './dto/create-reservacion.input';
import { UpdateReservacionInput } from './dto/update-reservacion.input';
import { Repository } from 'typeorm';
import { Reservacion } from './entities/reservacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { differenceInDays } from 'date-fns';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';
import { HabitacionService } from 'src/habitacion/habitacion.service';

@Injectable()
export class ReservacionService {

  constructor(

    @InjectRepository(Reservacion)
    private reservacionRepositorio: Repository<Reservacion>,

    @InjectRepository(Habitacion)
    private habitacionRepository: Repository<Habitacion>,

    private habitacionService: HabitacionService,
  ){

  }


  async create(createReservacionInput: CreateReservacionInput) {

    const pre_reserva = this.reservacionRepositorio.create(createReservacionInput);
    
    //Obtiene la hora
    const fecha_hoy = new Date();
    fecha_hoy.setHours(0,0,0,0);

    //Obtiene la hora
    const hora = new Date();
    const hora_actual = `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`;


    //Para valor absoluto Math.abs
    const periodo =  Math.abs(differenceInDays(pre_reserva.fecha_inicio, pre_reserva.fecha_final));

    //Calcular el monto
    const habitacion = this.getHabitacion(pre_reserva.habitacion_id);
    const monto = (await habitacion).precio;



  const reservacion = new Reservacion();

  reservacion.fecha_reserva = fecha_hoy;
  reservacion.hora_registro = hora_actual;
  reservacion.fecha_inicio = pre_reserva.fecha_inicio;
  reservacion.fecha_final = pre_reserva.fecha_final;
  reservacion.num_huespedes = pre_reserva.num_huespedes;
  reservacion.cantidad_habitaciones = pre_reserva.cantidad_habitaciones;
  reservacion.habitacion_id = pre_reserva.habitacion_id;
  reservacion.persona_id = pre_reserva.persona_id;
  reservacion.num_cuartos = pre_reserva.num_cuartos;
  reservacion.monto = monto;
  reservacion.periodo = periodo;
  reservacion.id = pre_reserva.id;

  //Espera para asi obtener el id
 const reservaDOne = await this.reservacionRepositorio.save(reservacion);

  return reservaDOne;
  }

  findAll() {
    return this.reservacionRepositorio.find();
  }

  findOne(id: number) {
    return this.reservacionRepositorio.findOne({
      where: {id},
    });
  }

  update(id: number, updateReservacionInput: UpdateReservacionInput) {
    return `This action updates a #${id} reservacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservacion`;
  }

  
  getHabitacion(id: number): Promise<Habitacion>{
    return this.habitacionService.findOne(id) ;
  }
   
}
