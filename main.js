const ToDo = require("./todo");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todo = new ToDo();

function promptUser() {
    rl.question("Enter command (add/list/remove/exit): ", (command) => {
        switch (command) {
            case "add":
                rl.question("Enter task: ", (task) => {
                    todo.addTask(task);
                    promptUser();
                });
                break;
            case "list":
                todo.listTasks();
                promptUser();
                break;
            case "remove":
                rl.question("Enter task index to remove: ", (index) => {
                    todo.removeTask(parseInt(index));
                    promptUser();
                });
                break;
            case "exit":
                rl.close();
                break;
            default:
                console.log("Invalid command.");
                promptUser();
        }
    });
}

promptUser();