import fs from "fs";
const DB_FILE_PATH = "./core/db";

console.log("[CRUD]");

function create(content: string) {
    // salvar o content no sistema
    fs.writeFileSync(DB_FILE_PATH, content);
    return content;
}

function read() {
    const db = fs.readFileSync(DB_FILE_PATH);
    return db;
}

// [SIMULATION]
create("Primeira TODO");
console.log(read());
