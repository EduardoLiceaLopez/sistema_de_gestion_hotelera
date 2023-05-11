import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReservacionService } from './reservacion.service';
import { Reservacion } from './entities/reservacion.entity';
import { CreateReservacionInput } from './dto/create-reservacion.input';
import { UpdateReservacionInput } from './dto/update-reservacion.input';

@Resolver(() => Reservacion)
export class ReservacionResolver {
  constructor(private readonly reservacionService: ReservacionService) {}

  @Mutation(() => Reservacion)
  createReservacion(@Args('createReservacionInput') createReservacionInput: CreateReservacionInput) {
    return this.reservacionService.create(createReservacionInput);
  }

  @Query(() => [Reservacion], { name: 'reservacion' })
  findAll() {
    return this.reservacionService.findAll();
  }

  @Query(() => Reservacion, { name: 'reservacion' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.reservacionService.findOne(id);
  }

  @Mutation(() => Reservacion)
  updateReservacion(@Args('updateReservacionInput') updateReservacionInput: UpdateReservacionInput) {
    return this.reservacionService.update(updateReservacionInput.id, updateReservacionInput);
  }

  @Mutation(() => Reservacion)
  removeReservacion(@Args('id', { type: () => Int }) id: number) {
    return this.reservacionService.remove(id);
  }
}
