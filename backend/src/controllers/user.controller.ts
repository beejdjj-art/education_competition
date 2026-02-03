import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

const userRepo = AppDataSource.getRepository(User);

// CREATE
export const createUser = async (req: Request, res: Response) => {
  const user = userRepo.create(req.body);
  const result = await userRepo.save(user);
  res.status(201).json(result);
};

// READ ALL
export const getUsers = async (_: Request, res: Response) => {
  const users = await userRepo.find();
  res.json(users);
};

// READ ONE
export const getUserById = async (req: Request, res: Response) => {
  const user = await userRepo.findOneBy({ id: Number(req.params.id) });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// UPDATE
export const updateUser = async (req: Request, res: Response) => {
  const user = await userRepo.findOneBy({ id: Number(req.params.id) });
  if (!user) return res.status(404).json({ message: "User not found" });

  userRepo.merge(user, req.body);
  const result = await userRepo.save(user);
  res.json(result);
};

// DELETE
export const deleteUser = async (req: Request, res: Response) => {
  const result = await userRepo.delete(req.params.id);
  res.json({ deleted: result.affected });
};
