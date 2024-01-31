import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios_acceso')
@ObjectType()
export class UsuariosAcceso {

  @PrimaryColumn()
  @Field(()=> Int)
  usuario_id: number;

  @Column()
  @Field(()=> String)
  nombre_usuario: string;

  @Column()
  @Field(()=> String)
  contrasenia: string;

  @Column({ default: 'trabajador' })
  @Field(()=> String)
  role: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.usuario_accesso)
  @JoinColumn({name: 'usuario_id'})
  @Field(()=> Usuario, {nullable: true})
  usuario?: Usuario;
}
