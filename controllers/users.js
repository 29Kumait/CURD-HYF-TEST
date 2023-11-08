import exp from "constants";
import { v4 as uuidv4 } from "uuid";

let users = [
  // {
  //   id: uuidv4(),
  //   firstName: "John",
  //   lastName: "Doe",
  //   age: 25,
  // },
  // {
  //   firstName: "Jane",
  //   lastName: "Doe",
  //   age: 24,
  // },
  // {
  //   firstName: "Johnny",
  //   lastName: "Doe",
  //   age: 10,
  // },
];

/**
I added try/catch to handle 
exceptions (errors) that can occur in a program.
 */

export const getUsers = (req, res) => {
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(`Server error: ${error.message}`);
  }
};

/// *All three properties are required when creating a user, so we check if they exist. If one of them is missing, a 400 status code is returned.
export const createUser = (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;

    if (!firstName || !lastName || !age) {
      return res.status(400).json({ error: "All user fields are required!" });
    } else {
      const user = { firstName, lastName, age, id: uuidv4() };
      users.push(user);
      // res.send(`User with the name ${firstName} added to the database!`);
      res.status(201).send(user);
    }
  } catch (error) {
    res.status(500).json({ error: `Server error: ${error.message}` });
  }
};

export const getUser = (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
      return res.status(404).send(`User with the id ${id} not found.`);
    }

    res.send(foundUser);
  } catch (error) {
    res.status(500).send(`Server error: ${error.message}`);
  }
};

export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);

    //inform the user that no user with the provided ID exists.
    if (!user) {
      return res
        .status(404)
        .send(`User with the  provided id: ${id} not exists.`);
    }

    //message indicating success.
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
  } catch (error) {
    res.status(500).send(`Server error: ${error.message}`);
  }
};

export const patchUser = (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);
    /// * have added a check for the existence of the user. If the user is not found, a 404 status code is returned.
    if (!user) {
      return res.status(404).send(`User with the id ${id} not found.`);
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated.`);
  } catch (error) {
    res.status(500).send(`Server error: ${error.message}`);
  }
};

export const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const userIndex = users.findIndex((user) => user.id === id);
    /// * have added: The user with id 123 not found in the database.'
    if (userIndex === -1) {
      return res
        .status(404)
        .send(`User with the id ${id} not found in the database.`);
    }

    const updatedUser = { id, firstName, lastName, age };
    users[userIndex] = updatedUser;

    res.send(`User with the id ${id} has been updated.`);
  } catch (error) {
    res.status(500).send(`Server error: ${error.message}`);
  }
};

//npm install --save-dev jest supertest
