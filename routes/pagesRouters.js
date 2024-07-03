import { Router } from "express";
const route = Router()



route.get('/',restrictAccessbyTime, (req,res) => {
    restrictAccessbyTime
    res.status(200).send("Welcome")
})

route.get('/contact.html', restrictAccessbyTime, restrictByweekdays,(req,res) => {
    res.send(200).send("contact page")
})

route.get('/servcies.html', restrictAccessbyTime, restrictByweekdays,(req,res) => {
    res.send(200).send('services page')
})



export default route