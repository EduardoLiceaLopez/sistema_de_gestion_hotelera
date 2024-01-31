import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosAccesoResolver } from './usuarios_acceso.resolver';
import { UsuariosAccesoService } from './usuarios_acceso.service';

describe('UsuariosAccesoResolver', () => {
  let resolver: UsuariosAccesoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosAccesoResolver, UsuariosAccesoService],
    }).compile();

    resolver = module.get<UsuariosAccesoResolver>(UsuariosAccesoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
