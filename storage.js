const fs = require("fs");

class Storage {
    constructor() {
        this.fileName = "tasks.json";
    }

    saveTasks(tasks) {
        fs.writeFileSync(this.fileName, JSON.stringify(tasks, null, 2));
    }

    loadTasks() {
        try {
            return JSON.parse(fs.readFileSync(this.fileName));
        } catch (error) {
            return [];
        }
    }
}

module.exports = Storage;