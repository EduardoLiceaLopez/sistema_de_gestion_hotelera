import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TipoHabitacion } from '../../tipo_habitacion/entities/tipo_habitacion.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('habitacion')
@ObjectType()
export class Habitacion{

  @PrimaryColumn()
  @Field(() => Int, { description: 'Id de la habitación es su número' })
  num_habitacion: number;

  @Column()
  @Field(()=> Int)
  tipo_habitacion_id: number;

 @OneToOne(()=> TipoHabitacion, {cascade: true})
  @JoinColumn({name:'tipo_habitacion_id'})
  @Field(()=>TipoHabitacion, {nullable: true})
  tipo_habitacion?: TipoHabitacion;


  @Column()
  @Field(()=>String)
  estado: string;

  @Column()
  @Field(()=>String)
  precio: string;

  @Column()
  @Field(()=>String)
  ubicacion: string;

}
