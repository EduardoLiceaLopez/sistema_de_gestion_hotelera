import { Module } from '@nestjs/common';
import { ReservacionService } from './reservacion.service';
import { ReservacionResolver } from './reservacion.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservacion } from './entities/reservacion.entity';
import { HabitacionModule } from 'src/habitacion/habitacion.module';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservacion, Habitacion]), HabitacionModule],
  providers: [ReservacionResolver, ReservacionService],
  exports: [],
})
export class ReservacionModule {}
