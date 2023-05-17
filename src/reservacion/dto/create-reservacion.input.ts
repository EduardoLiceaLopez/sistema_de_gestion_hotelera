import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateReservacionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  num_huespedes: number;

  //Por ahora lo dará el cliente
  @Field(()=>Int)
  num_cuartos: number

  @Field(()=>Date)
  fecha_inicio: Date;

  @Field(()=> Date)
  fecha_final: Date;

  //Por ahora lo da el cliente

  /*
  @Field(()=>Float)
  monto: number;
  */

  @Field(()=> Int)
  habitacion_id: number;

  @Field(()=>Int)
  persona_id: number;

  //Por ahora lo dará el cliente
  @Field(()=> Int)
  cantidad_habitaciones: number;

}

