import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import dataAccessLayer from '../common/dal'

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.toString().split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'Not authorized' })
    }
    console.log(token)
    const decoded = verify(token, "collab-room-secret" )
    console.log(decoded)
    req.body.User = decoded
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Not authorized' })
  }
}
