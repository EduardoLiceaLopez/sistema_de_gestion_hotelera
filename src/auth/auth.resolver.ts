import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './gql-auth.guard';
import { UserAccess } from 'src/user_access/entities/user_access.entity';
import { CreateUserAccessInput } from 'src/user_access/dto/create-user_access.input';
import { UserAccessService } from 'src/user_access/user_access.service';

@Resolver()
export class AuthResolver {

    constructor(private authService: AuthService,
        
                private userAccessService: UserAccessService){}

    @UseGuards(GqlAuthGuard)
    @Query(()=> LoginResponse, {nullable: true})
    async login(@Args('loginUserInput') loginUserInput: LoginUserInput): Promise<LoginResponse>{

        const userAccess = await this.userAccessService.findOne(loginUserInput.correo);

        return this.authService.login(userAccess);
    }
    

    @Mutation(()=> UserAccess)
    signup(@Args('signupUserInput') signupUserInput: CreateUserAccessInput){
        return this.authService.signup(signupUserInput)
    }

}
