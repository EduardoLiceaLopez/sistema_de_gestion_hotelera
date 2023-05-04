import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Habitacion } from '../../habitacion/entities/habitacion.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_habitacion')
@ObjectType()
export class TipoHabitacion {

  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column()
  @Field(()=>String)
  tipo: string;

  @OneToMany(()=> Habitacion, (habitacion) => habitacion.numero_habitacion)
  @Field(()=> [Habitacion], {nullable: true})
  habitaciones: Habitacion[];

}
