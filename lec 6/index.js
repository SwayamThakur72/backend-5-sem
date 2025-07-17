const fs = require('fs');
const path = require('path');

const aPath = path.join(__dirname, 'a.txt');
const bPath = path.join(__dirname, 'b.txt');
const cPath = path.join(__dirname, 'c.txt');

fs.readFile(aPath, 'utf8', function(err, dataA) {
    if (err) return console.log('Error reading a.txt:', err);
    fs.readFile(bPath, 'utf8', function(err, dataB) {
        if (err) return console.log('Error reading b.txt:', err);
        const combined = dataA + '\n' + dataB;
        fs.writeFile(cPath, combined, function(err) {
            if (err) return console.log('Error writing c.txt:', err);
            console.log('Combined content written to c.txt!');
        });
    });
});