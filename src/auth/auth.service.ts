import { Injectable, NotFoundException } from '@nestjs/common';
import { UserAccess } from 'src/user_access/entities/user_access.entity';
import { UserAccessService } from 'src/user_access/user_access.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';
import { CreateUserAccessInput } from 'src/user_access/dto/create-user_access.input';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

    constructor(private userAccessService: UserAccessService,
            private jwtService: JwtService,
        ){}

    async validateUserAccess(correo: string, contrasenia: string): Promise <any>{

        const userAccess = await this.userAccessService.findOne(correo);

        if(userAccess){
            
            const valid = await bcrypt.compare(contrasenia, userAccess?.contrasenia);

            if(userAccess && valid){
                const {contrasenia, ...result} = userAccess;
                return result;
    
            }
                return null;
        } else{
            throw new NotFoundException(`The user_name not exist`);
        }


    }

    async login(userAccess: UserAccess){
        return {
            access_token: this.jwtService.sign({
                correo: userAccess.correo,
                sub: userAccess.id,
                role: userAccess.usuarios_id,
            }),
            userAccess,
        };
    }

    async signup(signupUserInput: CreateUserAccessInput){
        const userAccess = await this.userAccessService.findOne(signupUserInput.correo);

        if (userAccess){
            
            throw new Error('User Acces already exists!');
        }

        const contrasenia = await bcrypt.hash(signupUserInput.contrasenia, 10);
        
        return this.userAccessService.createUserAccess({
            ...signupUserInput,
            contrasenia,
        });
    }
}
