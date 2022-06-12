const {validationSchema} = require('../validator/user.validator')
const bcrypt = require('bcrypt')
const serviceUser = require('../service/user.service')
const config = require('config')


const getLoginFrom = (req,res)=>{
    return res.render('login/layout')
}
const login = async(req,res)=>{
    const {email,password} = req.body
    const fields = {email,password}
    const findUser = await serviceUser.findEmail({email})
    if(!findUser){
        return res.render('signup/layout',{message:'User does not exist Sign up'})
    }
    const matchPassword = await bcrypt.compare(password,findUser.password)
    if(!matchPassword){
        return res.render('login/layout',{message:'Credentials Wrong'})
    }
    return res.render('user/layout')

}
const getSignupForm = (req,res)=>{
    return res.render('signup/layout')
}
const signup = async(req,res)=>{
    const {email,password} = req.body
    const field = {email,password}
    const {error,value} = validationSchema(field)
    if(error){
        res.render('signup/layout',{message:error.details[0].message})
    }
    const hashPassword = await bcrypt.hash(password,config.get('hash.salt'))
    const findUser = await serviceUser.findEmail({email})
    if(findUser){
       return res.render('login/layout',{message:'User already exists login'})
    }
    const createEntry = await serviceUser.createUser({email,password:hashPassword})
    return res.render('signup/layout',{message:'User Created'})
}

module.exports = {getLoginFrom,login,getSignupForm,signup}