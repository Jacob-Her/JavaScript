const Storage = require("./storage");

class ToDo {
    constructor() {
        this.storage = new Storage();
        this.tasks = this.storage.loadTasks();
    }

    addTask(task) {
        this.tasks.push(task);
        this.storage.saveTasks(this.tasks);
    }

    listTasks() {
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }

    removeTask(index) {
        if (index > 0 && index <= this.tasks.length) {
            this.tasks.splice(index - 1, 1);
            this.storage.saveTasks(this.tasks);
        } else {
            console.log("Invalid index.");
        }
    }
}

module.exports = ToDo;