const express = require('express')
const apiRouter = express.Router()
const { getUserApi, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI } = require("../controllers/apiController")

apiRouter.get('/users', getUserApi)

apiRouter.post('/users', postCreateUserAPI)

apiRouter.put('/users', putUpdateUserAPI)

apiRouter.delete('/users', deleteUserAPI)



module.exports = apiRouter