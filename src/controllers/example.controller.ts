import { Request, Response } from "express";

export const getExample = (req: Request, res: Response) => {
  res.json({ message: "Hello, this is an example route!" });
};
