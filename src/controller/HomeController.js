import connection from "../configs/connectDB";
let homeController = (req, res) => {
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function(err, results, fields) {
            console.log("check mysql =>>")
            // console.log(results); // results contains rows returned by server
            results.map((item, index) => {return data.push(item)})

            return res.render('index.ejs', {dataUser: data, dataConver: JSON.stringify(data)}, );
        }
    );
}

module.exports =  {
    homeController
}