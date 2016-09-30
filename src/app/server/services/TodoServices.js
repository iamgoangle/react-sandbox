import Todo from "../models/todos"

class TodoServices {
	constructor () {

	}

	getAllTodos (req, res) {
		res.header("Access-Control-Allow-Origin", "*")
  		res.header("Access-Control-Allow-Headers", "X-Requested-With")

		try {
			Todo.find({}).exec(function(err, todos){
				if (err) {
					throw err
				} else {
					res.json(todos)
				}
			})
		} catch (err) {
			console.error(err)
		}
	}
}

export default TodoServices
