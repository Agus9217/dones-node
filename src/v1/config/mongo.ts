import { connect } from "mongoose"

const MONGO_URI = process.env.MONGO_URI || ''

export const mongoConnectDb = () => {
  try {
    connect(MONGO_URI)
    console.log('****** MONGO IS CONNECTED ******')
  } catch (error) {
    console.error(error)
    console.log('****** SOMETHING IS FAILED ******')
  }
}
