const mongoose = require('mongoose');

const {Schema} = mongoose;

let todoModel = new Schema({
   username: {
       type: String
   },
   password: {
       type: String
   },
   todoList: [{
        type: String
   }],
   updated_at: {
       type: Date, default: Date.now
    }
});

module.exports = mongoose.model('Todo', todoModel);