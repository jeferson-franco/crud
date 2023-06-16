import fs from "fs";
const DB_FILE_PATH = "./core/db";

console.log("[CRUD]");

function create(content: string) {
    const todo = {
        content: content
    };
    console.log(todo);

    // salvar o content no sistema
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(todo));
    return content;
}

function read() {
    const db = fs.readFileSync(DB_FILE_PATH, "utf-8");
    return db;
}

// [SIMULATION]
create("Primeira TODO");
console.log(read());
