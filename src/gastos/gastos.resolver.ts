import { Resolver, Query, Mutation, Args, Int, Context, Float } from '@nestjs/graphql';
import { GastosService } from './gastos.service';
import { Gasto } from './entities/gasto.entity';
import { CreateGastoInput } from './dto/create-gasto.input';
import { UpdateGastoInput } from './dto/update-gasto.input';
import { GastosTotalResponse } from './dto/response-gastos';
import { QueryBuilder, getRepository } from 'typeorm';

@Resolver(() => Gasto)
export class GastosResolver {
  constructor(private readonly gastosService: GastosService) {}

  @Mutation(() => Gasto)
  createGasto(@Args('createGastoInput') createGastoInput: CreateGastoInput,  @Context() context ) {
    return this.gastosService.create(createGastoInput, context);
  }

  @Query(() => [Gasto], { name: 'gastos' })
  findAll() {
    return this.gastosService.findAll();
  }

  @Query(() => Float, { name: 'totalGastos' })
  totalGastos() {
    return this.gastosService.totalGastos();
  }

  @Query(() => Gasto, { name: 'gasto' })
  findOneByNombre(@Args('nombre', { type: () => Int }) nombre: string) {
    return this.gastosService.findOne(nombre);
  }

  @Query(() => Gasto, { name: 'gasto' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.gastosService.findOneById(id);
  }

  @Mutation(() => Gasto)
  updateGasto(@Args('updateGastoInput') updateGastoInput: UpdateGastoInput) {
    return this.gastosService.update(updateGastoInput.id, updateGastoInput);
  }

  @Mutation(() => Gasto)
  removeGasto(@Args('id', { type: () => Int }) id: number) {
    return this.gastosService.remove(id);
  }

  
  
}
