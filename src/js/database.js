<<<<<<< HEAD
const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('./Database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

module.exports = db;

=======
const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('./Database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

module.exports = db;

>>>>>>> 09a89df851a0aa9aaea4ac96a8a97e744e91a87e
