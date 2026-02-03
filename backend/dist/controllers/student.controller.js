"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getStudentById = exports.getStudents = exports.createStudent = void 0;
const data_source_1 = require("../data-source");
const Student_1 = require("../entities/Student");
const studentRepo = data_source_1.AppDataSource.getRepository(Student_1.Student);
const createStudent = async (req, res) => {
    const student = studentRepo.create(req.body);
    res.status(201).json(await studentRepo.save(student));
};
exports.createStudent = createStudent;
const getStudents = async (_, res) => {
    res.json(await studentRepo.find());
};
exports.getStudents = getStudents;
const getStudentById = async (req, res) => {
    const student = await studentRepo.findOneBy({ id: Number(req.params.id) });
    if (!student)
        return res.status(404).json({ message: "Student not found" });
    res.json(student);
};
exports.getStudentById = getStudentById;
const updateStudent = async (req, res) => {
    const student = await studentRepo.findOneBy({ id: Number(req.params.id) });
    if (!student)
        return res.status(404).json({ message: "Student not found" });
    studentRepo.merge(student, req.body);
    res.json(await studentRepo.save(student));
};
exports.updateStudent = updateStudent;
const deleteStudent = async (req, res) => {
    await studentRepo.delete(req.params.id);
    res.json({ deleted: true });
};
exports.deleteStudent = deleteStudent;
