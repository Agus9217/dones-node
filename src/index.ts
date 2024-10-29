import express from "express"
import morgan from "morgan"

const app = express()
const PORT = process.env.PORT || 3000


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())

app.listen(PORT, () => {
  console.log(`Server is runnig on: http://localhost:${PORT}/api/v1`)
})