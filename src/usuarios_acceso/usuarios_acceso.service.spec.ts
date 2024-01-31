import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosAccesoService } from './usuarios_acceso.service';

describe('UsuariosAccesoService', () => {
  let service: UsuariosAccesoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosAccesoService],
    }).compile();

    service = module.get<UsuariosAccesoService>(UsuariosAccesoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
