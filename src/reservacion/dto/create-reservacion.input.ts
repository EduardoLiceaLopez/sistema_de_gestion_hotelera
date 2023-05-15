import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReservacionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  num_huespedes: number;

  //Por ahora lo dará el cliente
  @Field()
  num_cuartos: number

  @Field()
  fecha_inicio: Date;

  @Field()
  fecha_final: Date;

  //Por ahora lo da el cliente
  @Field()
  monto: number;

  @Field()
  habitacion_id: number;

  @Field()
  persona_id: number;

  //Por ahora lo dará el cliente
  cantidad_habitaciones: number;

}

