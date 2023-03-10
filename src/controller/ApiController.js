import pool from "../configs/connectDB";
let getAllUser = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` ');


    return res.status(200).json({
        message: "ok",
        data: rows
    });
}

let createNewUser = async (req, res) => {
    const {firstName, lastName, email, address} = req.body;

    if(!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: "required all parameter111",
        })
    }

    await pool.execute('INSERT INTO users(firstName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastName, email, address] )

    return res.status(200).json({
        message: "ok",

    })
}

const updateUser = async (req, res) => {
    const {firstName, lastName, email, address, id} = req.body;

    if(!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: "required all parameter111",
        })
    }

    await pool.execute('UPDATE users SET firstName = ?, lastName = ?, email= ?, address= ? WHERE id= ? ',
        [firstName, lastName, email, address, id])
    return res.status(200).json({
        message: "ok",

    })
}

let deleteUser = async (req, res) => {
    let userId = req.params.id;
    if (!userId) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('delete from users where id = ?', [userId])
    return res.status(200).json({
        message: 'ok'
    })
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}