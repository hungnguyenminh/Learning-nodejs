import pool from "../configs/connectDB";
let homeController = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` ');

    return res.render('index.ejs', {dataUser: rows, dataConver: JSON.stringify(rows)}, );
}

let getDetailPage = async (req, res) => {
    let userId = req.params.userId;
    const [row, fields] = await pool.execute('SELECT * FROM `users` WHERE id= ?', [userId]);
    console.log("check param req", req.params.userId);
    // return res.send(JSON.stringify(row));
    return res.render('Users/DetailUser.ejs', {detailInfo: row, detailString: JSON.stringify(row)})
}

module.exports =  {
    homeController,
    getDetailPage
}