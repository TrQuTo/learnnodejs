const { default: pool } = require("../configs/connectDB");

let getAllUsers = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.status(200).json({
    message: "Ok",
    data: rows,
  });
};

let createUserAPI = async (req, res) => {
  let { id, firstName, lastName, email, address } = req.body;
  if (!firstName || !lastName || !email || !address) {
    return res.status(200).json({
      message: "missing",
    });
  }
  await pool.execute(
    "insert into users(firstName, lastName, email, address) values (?,?,?,?)",
    [firstName, lastName, email, address]
  );
  return res.status(200).json({
    message: "Ok",
  });
};

let deleteUserAPI = async (req, res) => {
  let userID = req.params.id;
  if (!userID) {
    return res.status(200).json({
      message: "missing",
    });
  }
  await pool.execute("delete from users where id = ?", [userID]);
  return res.status(200).json({
    message: "Ok",
  });
};

let editUserAPI = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  if (!firstName || !lastName || !email || !address || !id) {
    return res.status(200).json({
      message: "missing",
    });
  }
  await pool.execute(
    "UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?;",
    [firstName, lastName, email, address, id]
  );
  return res.status(200).json({
    message: "Ok",
  });
};

module.exports = {
  getAllUsers,
  createUserAPI,
  editUserAPI,
  deleteUserAPI,
};
