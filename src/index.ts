import * as fs from "fs";
import {initDb} from "./utils/createDatabase";
import * as sqlite3 from "sqlite3";
import UserDAO from "./handlers/UserDAO";
import StockDAO from "./handlers/StockDAO";
import {DAOs, Services} from "./models/interfaces"
import UserService from "./services/UserService";

function main() {
    if(!fs.existsSync("db/data.db")) {
        initDb();
    }

    const db = new sqlite3.Database('db/data.db', sqlite3.OPEN_READWRITE);

    const daos: DAOs = {
        users: new UserDAO(db),
        stocks: new StockDAO(db),
    }

    const service: Services = {
        users: new UserService(daos)
    }

    service; // placeholder
}

main();
