import { Module } from '@nestjs/common';
import { ReservacionService } from './reservacion.service';
import { ReservacionResolver } from './reservacion.resolver';

@Module({
  providers: [ReservacionResolver, ReservacionService]
})
export class ReservacionModule {}
