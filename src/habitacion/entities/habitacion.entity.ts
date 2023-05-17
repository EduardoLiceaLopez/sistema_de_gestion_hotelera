import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TipoHabitacion } from '../../tipo_habitacion/entities/tipo_habitacion.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Reservacion } from 'src/reservacion/entities/reservacion.entity';

@Entity('habitacion')
@ObjectType()
export class Habitacion{

  @PrimaryColumn()
  @Field(() => Int, { description: 'Id de la habitación es su número' })
  id: number;

  @Column()
  @Field(()=> Int)
  tipo_habitacion_id: number;

 @ManyToOne(()=> TipoHabitacion, (tipoHabitacion)=> tipoHabitacion.habitacion)
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


  @OneToMany(()=> Reservacion, (reservacion) => reservacion.habitacion, {cascade: true, nullable: true})
  @Field(()=> [Reservacion], {nullable: true})
  reservacion: Reservacion[];

}
