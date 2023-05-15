import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class ResponseReservacionOutput{

    @Field(() => Int, { description: 'Example field (placeholder)' })
    id: number;
  

    @Field()
    num_huespedes: number;
  

    @Field()
    num_cuartos: number;
  

    @Field()
    fecha_reserva: Date;
  

    @Field()
    periodo: number;
  

    @Field()
    monto: number;
  

    @Field()
    habitacion_id: number;
  

    @Field()
    persona_id: number;
  

    @Field()
    hora: string;

    @Field()
    fecha_inicio: Date;

    @Field()
    fecha_final: Date;
  

    @Field()
    hora_registro: string;
  
    @Field()
    cantidad_habitaciones: number;
    
}