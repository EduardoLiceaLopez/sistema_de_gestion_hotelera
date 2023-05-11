import { Injectable } from '@nestjs/common';
import { CreateReservacionInput } from './dto/create-reservacion.input';
import { UpdateReservacionInput } from './dto/update-reservacion.input';

@Injectable()
export class ReservacionService {
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
}
