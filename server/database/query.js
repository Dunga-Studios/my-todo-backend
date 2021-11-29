const con = require("./index");

const db = {};

db.createTodo = ({ title, notes }) => {
  return new Promise((resolve, reject) => {
    con.query(
        "INSERT INTO todo (`title`, `notes`, `created_at`) VALUES(?,?,?)",
        [title, notes, new Date()],
        function (error, results) {
            if(error) reject(error);
            resolve(results)
        }
      );
  })
};

db.fetchTodos = () => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM todo", function (error,results) {
            if(error) reject(error);
            resolve(results)
        })
    })
};

db.fetchTodo = (id) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM todo WHERE id=?", [id] , function (error,results) {
            if(error) reject(error);
            resolve(results[0])
        })
    })
};

db.deleteTodos = (id) => {
    return new Promise((resolve, reject) => {
        con.query("DELETE FROM todo WHERE id=?", [id], function (error,results) {
            if(error) reject(error);
            resolve(results)
        })
    })
};

db.updateTodos = ({id,title,notes}) => {
    return new Promise((resolve, reject) => {
        con.query(
            "UPDATE todo SET `title`= ?, `notes` = ? WHERE `id`=?",
            [title, notes, id],
            function (error, results) {
                if(error) reject(error);
                resolve(results)
            }
          );
      })
};

module.exports = db