require('dotenv').config()
const express = require('express')
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")
const apiRouter = require("./routes/api")
const connection = require("./config/database")

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME


// config req.body for getting input from form
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// config template engine
configViewEngine(app)



// declare routes
app.use('/', webRoutes)
app.use('/v1/api/', apiRouter)




    ; (async () => {
        try {
            // test connection
            await connection();
            app.listen(port, hostname, () => {
                console.log(`Example app listening on port ${port}`)
            })
        } catch (error) {
            console.log("error  ", error);
        }
    })()


