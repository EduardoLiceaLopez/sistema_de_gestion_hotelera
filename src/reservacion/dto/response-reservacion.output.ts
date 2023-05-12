import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class ResponseReservacionOutput {

  

  @Field(()=> Int, {nullable: false})
  id: number;


  @Field(() => Int)
  numero_huespedes: number;

  @Field(()=>Int)
  persona_id: number;


  @Field(()=> Int)
  cantidad_habitaciones: number;


  @Field(()=> String)
  fecha_reserva: string;


  @Field(()=> Date)
  hora: string;


  @Field(()=>String)
  periodo: string;


  @Field(()=> Float)
  monto: number;
}

