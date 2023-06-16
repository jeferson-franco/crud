import fs from "fs";
const DB_FILE_PATH = "./core/db";

console.log("[CRUD]");

function create(content: string) {
    const todo = {
        date: new Date().toISOString(),
        content: content
    };

    const todos = [
        todo
    ];

    // salvar o content no sistema
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
        todos,
        dogs: []
    }, null, 2));
    return content;
}

function read() {
    const db = fs.readFileSync(DB_FILE_PATH, "utf-8");
    return db;
}

// [SIMULATION]
create("Primeira TODO");
create("Segunda TODO");
console.log(read());
