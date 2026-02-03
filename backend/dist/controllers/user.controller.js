"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const data_source_1 = require("../data-source");
const User_1 = require("../entities/User");
const userRepo = data_source_1.AppDataSource.getRepository(User_1.User);
// CREATE
const createUser = async (req, res) => {
    const user = userRepo.create(req.body);
    const result = await userRepo.save(user);
    res.status(201).json(result);
};
exports.createUser = createUser;
// READ ALL
const getUsers = async (_, res) => {
    const users = await userRepo.find();
    res.json(users);
};
exports.getUsers = getUsers;
// READ ONE
const getUserById = async (req, res) => {
    const user = await userRepo.findOneBy({ id: Number(req.params.id) });
    if (!user)
        return res.status(404).json({ message: "User not found" });
    res.json(user);
};
exports.getUserById = getUserById;
// UPDATE
const updateUser = async (req, res) => {
    const user = await userRepo.findOneBy({ id: Number(req.params.id) });
    if (!user)
        return res.status(404).json({ message: "User not found" });
    userRepo.merge(user, req.body);
    const result = await userRepo.save(user);
    res.json(result);
};
exports.updateUser = updateUser;
// DELETE
const deleteUser = async (req, res) => {
    const result = await userRepo.delete(req.params.id);
    res.json({ deleted: result.affected });
};
exports.deleteUser = deleteUser;
