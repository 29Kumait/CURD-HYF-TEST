import express from "express";
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  patchUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", patchUser);

router.put("/:id", updateUser);

export default router;

// localhost:5000/users/${id} => {firstName: "Johnny", lastName: "Doe", age: 10, id: "cb5863d2-47fb-4716-9906-bfe3f659ac8e"}
// localhost:5000/users/${id} => User with the id ca263e93-8916-4b3a-b663-fbc2961aadff deleted from the database.
// localhost:5000/users/${id} => User with the id f8d0fa48-9fff-4c09-80d9-a25bddd1d88a has been updated.
// localhost:5000/users/${id} => User with the id bd213d78-fe97-48f5-ba3b-58c62cccf600 has been updated.
