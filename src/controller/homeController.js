import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");

  return res.render("index.ejs", { dataUser: rows });
};

let getDetailPage = async (req, res) => {
  let userID = req.params.id;
  let user = await pool.execute("select * from users where id = ?", [userID]);
  return res.send(JSON.stringify(user[0]));
};

module.exports = {
  getHomepage,
  getDetailPage,
};
