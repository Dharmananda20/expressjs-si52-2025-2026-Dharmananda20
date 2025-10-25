import express from "express"
import * as profilecontroller from "../controller/profilecontroller.js"

const web = express.Router()

web.get('/', (req, res) => {
    res.render('index')
})
web.get('/:username', profilecontroller.publicProfile)
web.get('/:username', profilecontroller.publicProfile)
export default web