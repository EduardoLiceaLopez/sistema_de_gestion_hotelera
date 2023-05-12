import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Habitacion } from 'src/habitacion/entities/habitacion.entity';
import { Column, Entity, In, PrimaryColumn } from 'typeorm';

@Entity('reservaciones')
@ObjectType()
export class Reservacion {

  @PrimaryColumn()
  @Field(()=> Int, {nullable: false})
  id: number;

  @Column()
  @Field(() => Int)
  numero_huespedes: number;

  @Field(()=>Int)
  persona_id: number;

  @Column()
  @Field(()=> String)
  fecha_reserva: string;

  @Column()
  @Field()
  fecha_inicio: string;

  @Column()
  @Field()
  fecha_fin: string;

  @Column()
  @Field(()=> String)
  hora_registro: string;

  @Column()
  @Field(()=>String)
  periodo: string;

  @Column()
  @Field(()=> Float)
  monto: number;



}
