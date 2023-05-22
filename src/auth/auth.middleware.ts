// auth.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (token) {
      try {
        const decodedToken = jwt.verify(token, 'hide-me');
        req['persona_id'] = decodedToken;
      } catch (error) {
        // Manejo de errores en caso de que el token sea inválido
      }
    }
    next();
  }
}
