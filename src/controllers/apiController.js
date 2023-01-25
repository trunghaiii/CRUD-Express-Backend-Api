const User = require("../models/user")

const getUserApi = async (req, res) => {
    let results = await User.find({});
    res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postCreateUserAPI = async (req, res) => {
    const { email, name, city } = req.body;
    let user = await User.create({
        email,
        name,
        city
    })

    res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const putUpdateUserAPI = async (req, res) => {
    const { email, name, city, id } = req.body;
    let user = await User.updateOne({ _id: id }, { name: name, email: email, city: city });

    res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    let id = req.body.id;

    let user = await User.deleteOne({
        _id: id
    })

    res.status(200).json({
        errorCode: 0,
        data: user
    })
}

module.exports = {
    getUserApi,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI
}