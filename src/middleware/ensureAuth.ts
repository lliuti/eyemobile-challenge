import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface ISubPayload {
  sub: string;
}

const ensureAuth = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;

  if (!authorization)
    return response.status(201).json({ error: "Missing token" });

  const token = authorization.split(" ")[1];

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as ISubPayload;

    request.user_id = sub;
    next();
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
};

export { ensureAuth };
