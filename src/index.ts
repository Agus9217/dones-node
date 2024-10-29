import express from "express"
import morgan from "morgan"
import { router as v1routes } from "./v1/routes/router"

const app = express()
const PORT = process.env.PORT || 3000


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/v1', v1routes)

app.listen(PORT, () => {
  console.log(`Server is runnig on: http://localhost:${PORT}/api/v1`)
})