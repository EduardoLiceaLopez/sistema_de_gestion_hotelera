import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Reservacion } from 'src/reservacion/entities/reservacion.entity';
import { UsuariosAcceso } from 'src/usuarios_acceso/entities/usuarios_acceso.entity';



@Entity('usuarios')//Aqui se coloca el nombre que tendrá la tabla en la bd
@ObjectType()
export class Usuario {

  //Aqui colocarán todos los atributos de la tabla 'usuario'

   @PrimaryGeneratedColumn()//Genera el id automáticamente
   @Field()
   id: number;

   @Column()
   @Field((type) => String)
   nombre: string;

   @Column()
   @Field((type) => String)
   apPaterno: string;
   
   @Column()
   @Field((type) => String, {nullable: true})
   apMaterno?: string;
 
   @Column()
   @Field((type) => String)
   fech_nacimiento: string;
 
   @Column()
   @Field((type) => String)
   numTelefono: string;
   
    @OneToMany(()=> Reservacion, (reservacion) => reservacion.usuario, {cascade: true, nullable: true})
  @Field(()=> [Reservacion], {nullable: true})
  reservacion: Reservacion[];


  @OneToMany(()=> UsuariosAcceso, (userioAcceso) => userioAcceso.usuario,{cascade: true})
  @Field(()=> [UsuariosAcceso])
  usuario_accesso: UsuariosAcceso[];

}
