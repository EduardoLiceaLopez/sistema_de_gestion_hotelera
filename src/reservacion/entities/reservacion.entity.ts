import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reservas')
@ObjectType()
export class Reservacion {

  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column()
  @Field()
  num_huespedes: number;

  @Column()
  @Field()
  num_cuartos: number;

  @Column()
  @Field()
  fecha_reserva: Date;

  @Column()
  @Field()
  periodo: number;

  @Column()
  @Field()
  monto: number;

  @Column()
  @Field()
  habitacion_id: number;

  @Column()
  @Field()
  persona_id: number;

  @Column()
  @Field()
  fecha_inicio: Date;

  @Column()
  @Field()
  fecha_final: Date;

  @Column()
  @Field()
  hora_registro: string;

  @Column()
  @Field()
  cantidad_habitaciones: number;

}
