import { Module } from '@nestjs/common';
import { ReservacionService } from './reservacion.service';
import { ReservacionResolver } from './reservacion.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservacion } from './entities/reservacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservacion])],
  providers: [ReservacionResolver, ReservacionService]
})
export class ReservacionModule {}
