const express = require('express')
const router = express.Router()
const { getHome, getHai, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, handleDeleteUser } = require("../controllers/homeController")

router.get('/', getHome)

router.get('/hai', getHai)

router.post("/create-user", postCreateUser)

router.post("/update-user", postUpdateUser)

router.get("/update/:id", getUpdatePage)

router.get("/create", getCreatePage)

router.post("/delete-user/:id", postDeleteUser)

router.post("/delete-user", handleDeleteUser)


module.exports = router