/* Module for Linux Console*/

//counter json file path
var jsonfile = './public/value.json';

//requires
var fs = require('fs');

//variables
var values = require(jsonfile);
var visit = values.visit;
var history = [];
var historyLines = 35; //how many lines of history should console display

//clear console
var clearConsole = function() {
    console.log("\033[2J\033[2H");
};

//time formatter --> d days, H:mm:dd
var format = function(seconds) {
    var pad = function(s) {
        return (s < 10 ? '0' : '') + s;
    };

    var days = Math.floor(seconds / (60 * 60 * 24));
    var hours = Math.floor((seconds / (60 * 60)) - (days * 24));
    var minutes = Math.floor(seconds % (60 * 60) / 60);
    var seconds = Math.floor(seconds % 60);

    return days + ' days, ' + pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
};

//display current status on console
var status = function() {
    clearConsole();
    console.log("\033[32m" + " Uptime: " + "\033[0m" + format(process.uptime()) + "\n");
    console.log("\033[32m" + " Total Visitor: " + "\033[0m" + visit);
    console.log("\033[37m\n=====================================================\n");
    for (var line in history)
        if (line < historyLines)
            console.log(history[line]);

    return 0;
};

//add status
var addStatus = function(str) {
    
    if (str == null){
        return 1;
        exit();
    }

    var today = new Date();
    var currentTime = "\033[32m [" + today.toLocaleTimeString() + "] ";

    if (history.length > 34)
        history.pop();
    history.unshift(currentTime + str);
    console.log(currentTime + str);
    return 0;
};

//add visitor
var addVisit = function() {
    visit++;

    var data = {
        visit: visit
    };

    fs.writeFile(jsonfile, JSON.stringify(data, null, 4), function(err) {
        clearConsole();
        if (err) {
            console.log(err);
        } else {
            addStatus("\033[36m[MSG]\033[0m New Visitor!!!");
            status();
        }
    });

    return 0;
};

//purge all history and refresh console
var purge = function() {
    history = [];
    visit = 0;
    var data = {
        visit: 0
    };

    fs.writeFile(jsonfile, JSON.stringify(data, null, 4), function(err) {
        clearConsole();
        if (err) {
            console.log(err);
        } else {
            addStatus("\033[35m[SYSTEM]\033[0m Visit history purged!!");
            status();

        }
    });

    return 0;
};

var getVisit = function() {
    return visit;
}

var setLineDisplay = function(num) {
    if (num == null) { return 1; }
    historyLines = num;
    return 0;
}

var getLineDisplay = function(num) {
    return historyLines;
}

//exports
exports.status = status;
exports.addStatus = addStatus;
exports.addVisit = addVisit;
exports.purge = purge;
exports.getVisit = getVisit;
exports.setLineDisplay = setLineDisplay;
exports.getLineDisplay = getLineDisplay;
