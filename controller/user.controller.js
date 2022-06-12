


const getLoginFrom = (req,res)=>{
    return res.render('login/layout')
}
const login = (req,res)=>{}
const getSignupForm = (req,res)=>{
    return res.render('signup/layout')
}
const signup = (req,res)=>{}

module.exports = {getLoginFrom,login,getSignupForm,signup}