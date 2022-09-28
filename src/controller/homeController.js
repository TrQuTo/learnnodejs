import pool from "../configs/connectDB";
//Hien thi du lieu len table trang index.ejs
let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");

  return res.render("index.ejs", { dataUser: rows });
};
//Hien thi chi tiet user page index.ejs
let getDetailPage = async (req, res) => {
  let userID = req.params.id;
  let [user] = await pool.execute("select * from users where id = ?", [userID]);
  return res.render("index.ejs", { dataUser: user });
};
//Hien thi chi tiet user page edit.ejs
let getDetailPageEdit = async (req, res) => {
  let userID = req.params.id;
  let [user] = await pool.execute("select * from users where id = ?", [userID]);
  return res.render("edit.ejs", { dataUserDetails: user });
};
//Tao mot user moi
let createNewUser = async (req, res) => {
  let { id, firstName, lastName, email, address } = req.body;
  let [user] = await pool.execute("select * from users where id = ?", [id]);
  await pool.execute(
    "insert into users(firstName, lastName, email, address) values (?,?,?,?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};
//Xoa 1 user theo id
let deleteUser = async (req, res) => {
  let userID = req.body.userID;
  await pool.execute("delete from users where id = ?", [userID]);
  return res.redirect("/");
};
//Upload user
let editUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  await pool.execute(
    "UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?;",
    [firstName, lastName, email, address, id]
  );
  return res.redirect("/");
};
//Edit user
module.exports = {
  getHomepage,
  getDetailPage,
  createNewUser,
  deleteUser,
  getDetailPageEdit,
  editUser,
};
