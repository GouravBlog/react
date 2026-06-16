import todoModels from "../models/todo.models.js";

// Create Todo Controller
export const createTodoController = async (req, res) => {
    try {
        let { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).send({ status: false, message: "all Fileds are required" });
        }
        let todo = new todoModels({ title, description });
        todo = await todo.save()
        res.status(201).send({ status: true, message: "todo create succesfully", todo })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "create todo error", error });
    }
}

// Get all Todos Controller 
export const getAllTodosController = async (req, res) => {
    try {
        let todos = await todoModels.find();
        if (!todos) {
            return res.status(400).send({ status: false, message: "No Todos Data Found" });
        }
        res.status(200).send({ status: true, todos })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Fetch Todos error", error });
    }
}

// Get Single Todo Controller 
export const getSingleTodoController = async (req, res) => {
    try {
        let { id } = req.params;
        if (!id) {
            return res.status(400).send({ status: false, message: "No Todo Id Found" });
        }
        let todo = await todoModels.findById(id);

        res.status(200).send({ status: true, todo })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Fetch Todos error", error });
    }
}