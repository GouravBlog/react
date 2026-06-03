import user from "../Models/user.models.js";

export async function createUser(req, res) {
    try {
        let { fullname, email, password } = req.body;

        const existEmail = await user.findOne({ email: email })
        if (existEmail) {
            return res.status(200).send({ status: true, message: "Email id is already exist" });
        }
        let userData = new user({ fullname, email, password });
        userData = await userData.save();

        res.status(201).send({ status: true, message: "user created succesfully", user: userData });
    } catch (error) {
        console.log(error);
        res.staus(500).send({ status: false, message: "User Create Error", error: error });
    }
}

export async function getusers(req, res) {
    try {
        let users = await user.find();
        res.status(200).send({ status: true, users })
    } catch (error) {
        console.log(error);
        res.staus(500).send({ status: false, message: "User Create Error", error: error });
    }
}

export async function getSingleUser(req, res) {
    try {
        let { id } = req.params;

        let userData = await user.findById(id);
        res.status(200).send({ status: true, user: userData })

    } catch (error) {
        console.log(error);
        res.staus(500).send({ status: false, message: "User Create Error", error: error });
    }
};

export async function updateUser(req, res) {
    try {
        let { id } = req.params;

        let userData = await user.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send({ status: true, message: "User Updated Succesfully", user: userData })

    } catch (error) {
        console.log(error);
        res.staus(500).send({ status: false, message: "User Create Error", error: error });
    }
};

export async function deleteUser(req, res) {
    try {
        let { id } = req.params;

        let userData = await user.findByIdAndDelete(id);
        res.status(200).send({ status: true, message: "user deleted succesfully", user: userData })

    } catch (error) {
        console.log(error);
        res.staus(500).send({ status: false, message: "User Create Error", error: error });
    }
};

