import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Student } from "../entities/Student";

const studentRepo = AppDataSource.getRepository(Student);

export const createStudent = async (req: Request, res: Response) => {
  const student = studentRepo.create(req.body);
  res.status(201).json(await studentRepo.save(student));
};

export const getStudents = async (_: Request, res: Response) => {
  res.json(await studentRepo.find());
};

export const getStudentById = async (req: Request, res: Response) => {
  const student = await studentRepo.findOneBy({ id: Number(req.params.id) });
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
};

export const updateStudent = async (req: Request, res: Response) => {
  const student = await studentRepo.findOneBy({ id: Number(req.params.id) });
  if (!student) return res.status(404).json({ message: "Student not found" });

  studentRepo.merge(student, req.body);
  res.json(await studentRepo.save(student));
};

export const deleteStudent = async (req: Request, res: Response) => {
  await studentRepo.delete(req.params.id);
  res.json({ deleted: true });
};
