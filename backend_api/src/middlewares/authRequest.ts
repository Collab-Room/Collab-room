import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
    user: {
        token:string | JwtPayload;
    }
  }

export default AuthenticatedRequest;