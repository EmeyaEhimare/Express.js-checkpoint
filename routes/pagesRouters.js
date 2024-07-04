import { Router } from "express";
const route = Router()
import {restrictAccessbyTime, restrictByweekdays}from "../middleware/pageMiddleware.js";




route.get('/',[restrictAccessbyTime,restrictByweekdays], (req,res) => {
    res.status(200).send("Welcome")
})

// route.get('/contact.html', restrictAccessbyTime, restrictByweekdays,(req,res) => {
//     res.send(200).send("contact page")
// })

// route.get('/servcies.html', restrictAccessbyTime, restrictByweekdays,(req,res) => {
//     res.send(200).send('services page')
// })



export default route