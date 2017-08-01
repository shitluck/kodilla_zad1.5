var os = require('os');
var colors = require('colors');
var OStime = require('./OStime');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    var uptime = os.uptime();
    console.log('System:'.gray, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:', userInfo.homedir);
    console.log('Uptime: ~'.green, OStime.print(uptime));
}

exports.print = getOSinfo;