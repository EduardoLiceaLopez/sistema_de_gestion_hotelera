import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Cliente {

  @PrimaryColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  usuario_id: number;

  @OneToOne(()=> Usuario, (usuario) => usuario.cliente)
  @JoinColumn({name: 'usuario_id'})
  @Field(()=> Usuario)
  usuario: Usuario;
}
