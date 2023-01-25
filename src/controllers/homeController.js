const connection = require("../config/database")
const { getAllUsers, getUserById, updateUserById } = require("../services/CRUDService")
const User = require("../models/user")

const getHome = async (req, res) => {
    let results = await User.find({});
    console.log(results);
    // const [results, fields] = await connection.execute(`SELECT * FROM Users`);
    //console.log(results);
    return res.render("home", { listUsers: results })
}

const getHai = (req, res) => {
    res.render("sample.ejs")
}

const postCreateUser = async (req, res) => {
    //console.log(req.body)
    const { email, name, city } = req.body;

    // const [results, fields] = await connection.execute(`INSERT INTO Users (email, name, city)
    // VALUES (?, ?, ?)`, [email, name, city]);

    await User.create({
        email,
        name,
        city
    })

    //console.log(results);
    res.send("Create user seccessfully!!!")
}

const getCreatePage = (req, res) => {
    res.render("create")
}

const getUpdatePage = async (req, res) => {
    let userId = req.params.id;
    //let user = await getUserById(userId)
    let user = await User.findById(userId);
    res.render("edit", { editUser: user })
}

const postUpdateUser = async (req, res) => {
    const { email, name, city, id } = req.body;
    await User.updateOne({ _id: id }, { name: name, email: email, city: city });

    res.redirect("/");
}

const postDeleteUser = async (req, res) => {
    let userId = req.params.id;
    let user = await User.findById(userId);

    res.render("delete", { editUser: user })
}

const handleDeleteUser = async (req, res) => {
    let id = req.body.id;

    await User.deleteOne({
        _id: id
    })
    res.redirect("/")
}
module.exports = {
    getHome,
    getHai,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    handleDeleteUser
}