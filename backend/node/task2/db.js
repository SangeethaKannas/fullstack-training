const { DataSource } = require("apollo-datasource");
const sqlite = require("sqlite3");

const createDatabase = () => {
    return new Promise((resolve, reject) => {
        const db = new sqlite.Database(process.env.DB_FILE_PATH, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(db);
        });
    });
};

class Db extends DataSource {
    async initialize() {
        this.db = await createDatabase();
        // do not change schema initialization it is here to provide an overview of data structures
        await this.executeCommand(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY, 
        deliveryAddress TEXT NOT NULL,
        total REAL NOT NULL,
        items TEXT NOT NULL,
        discountCode TEXT,
        comment TEXT,
        status STRING NOT NULL
        );`);
    }

    close() {
        this.db.close();
    }

    executeQuery(query) {
        return new Promise((resolve, reject) => {
            this.db.all(query, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }

    executeCommand(command) {
        return new Promise((resolve, reject) => {
            this.db.run(command, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    getOrders() {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM orders", (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }

    getOrder(id) {
        return new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM orders WHERE id=${id}`, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }

    updateOrderStatus(id, status) {
        return this.executeCommand(
            `UPDATE orders SET status='${status}' WHERE id=${id}`
        );
    }
}

const db = new Db();

module.exports = db;
