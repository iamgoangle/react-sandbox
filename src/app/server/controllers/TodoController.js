import mongoose from 'mongoose'
import _ from "underscore"
import express from 'express'

// Inject service
import TodoServices from '../services/TodoServices'

// Instance object
let _TodoServices = new TodoServices()

const TodoRouter = express.Router()

TodoRouter.get('/getAllTodos', function (req, res, next) {
	_TodoServices.getAllTodos(req, res)
})

module.exports = TodoRouter
