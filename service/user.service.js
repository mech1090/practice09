const User = require('../model/index')

const findEmail = (field)=>{
    return User.findOne(field)
}

const createUser = (fields)=>{
    return User.create(fields)
}

module.exports = {findEmail,createUser}