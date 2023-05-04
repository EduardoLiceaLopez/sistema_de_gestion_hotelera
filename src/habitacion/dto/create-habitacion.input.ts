import { InputType, Int, Field } from '@nestjs/graphql';
import { TipoHabitacion } from '../../tipo_habitacion/entities/tipo_habitacion.entity';

@InputType()
export class CreateHabitacionInput {

  @Field(()=> Int)
  tipo_habitacion_id: number;

  @Field(()=>String)
  estado: string;


  @Field(()=>String)
  numero_habitacion: string;


  @Field(()=>String)
  precio: string;


  @Field(()=>String)
  ubicacion: string;
}
