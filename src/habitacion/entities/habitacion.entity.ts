import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TipoHabitacion } from '../../tipo_habitacion/entities/tipo_habitacion.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('habitacion')
@ObjectType()
export class Habitacion{

  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column()
  @Field(()=> Int)
  tipo_habitacion_id: number;

  @ManyToOne(()=> TipoHabitacion, (tipoHabitacion) => tipoHabitacion.habitaciones)
  @JoinColumn({name:'tipo_habitacion_id'})
  @Field(()=>TipoHabitacion)
  tipo_habitacion?: TipoHabitacion;

  @Column()
  @Field(()=>String)
  estado: string;

  @Column()
  @Field(()=>String)
  numero_habitacion: string;

  @Column()
  @Field(()=>String)
  precio: string;

  @Column()
  @Field(()=>String)
  ubicacion: string;

}
