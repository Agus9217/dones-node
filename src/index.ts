import express from "express"
import morgan from "morgan"
import { router as v1routes } from "./v1/routes/router"
import { mongoConnectDb } from "./v1/config/mongo"
import { createChecklist } from "./v1/seed/init"


const app = express()
const PORT = process.env.PORT

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())

mongoConnectDb()
createChecklist()

app.use('/api/v1', v1routes)

app.listen(PORT, () => {
  console.log(`Server is runnig on: http://localhost:${PORT}/api/v1`)
})
