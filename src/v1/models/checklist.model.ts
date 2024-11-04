import { model, Schema } from "mongoose";

const ItemSchema = new Schema({
  number: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    max: 4,
    min: 0,
    default: null
  }
},
  {
    _id: false
  }
)

const ListSchema = new Schema({
  title: {
    type: String,
  },
  items: [ItemSchema]
},
  {
    timestamps: true,
    versionKey: false
  })

export const Checklist = model('Checklist', ListSchema)
