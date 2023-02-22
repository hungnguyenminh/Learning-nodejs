import pool from "../configs/connectDB";
let homeController = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` ');

    return res.render('index.ejs', {dataUser: rows, dataConver: JSON.stringify(rows)}, );
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;

    const [row, fields] = await pool.execute('SELECT * FROM `users` WHERE id= ?', [userId]);

    return res.render('Users/DetailUser.ejs', {detailInfo: row, detailString: JSON.stringify(row)})
}

let createNewUser = async (req, res) => {
    const {firstName, lastName, email, address} = req.body;

    await pool.execute('INSERT INTO users(firstName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastName, email, address]);

    return res.redirect('/');
}

let deleteUser = async (req, res) => {
    const userId = req.body.userId;
    console.log("req.body.id", req.body.userId);
    await pool.execute('DELETE FROM users where id = ?', [userId]);
    return res.redirect('/');
}

let getEditPage = async (req, res) => {
    let userId = req.params.id;
    const [row, fields] = await pool.execute('SELECT * FROM users WHERE id =?', [userId]);

    // return res.send(JSON.stringify(row));
    return res.render('Users/EditUser.ejs', {data: row, dataConvert: JSON.stringify(row)})
}

let updateUserInfo = async (req, res) => {
    const {firstName, lastName, email, address, id} = req.body;

    await pool.execute('UPDATE users SET firstName = ?, lastName = ?, email= ?, address= ? WHERE id= ? ', [firstName, lastName, email, address, id])

    return res.redirect('/');
}

module.exports =  {
    homeController,
    getDetailPage,
    createNewUser,
    deleteUser,
    getEditPage,
    updateUserInfo
}