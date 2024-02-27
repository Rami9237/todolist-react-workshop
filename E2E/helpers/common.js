const fs = require('fs');

export function cleanLocalDB() {

    const localDBpath = '../../src/data/db.json';
    
    fs.truncate(localDBpath, 0, (err) => {
        if (err) {
            console.error('Error truncating file:', err);
        } else {
            console.log('File content deleted successfully.');
        }
    });
    }