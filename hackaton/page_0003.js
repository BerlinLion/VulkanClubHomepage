var ssid = ''; // Wifi Name
var password = ''; // Wifi password

D12.mode('output'); //Red
D14.mode('output'); // Green
D2.mode('output'); // Blue


function onPageRequest(req, res) {
    var a = url.parse(req.url, true);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('</head>');
    res.write('<body>');

    res.write('red <input type="range" name="redInputName" id="redInputId" value="255" min="0" max="255" oninput="redOutputId.value = redInputId.value"><output name="redOutputName" id="redOutputId">255</output><br/>');

    res.write('green <input type="range" name="grnInputName" id="grnInputId" value="128" min="0" max="255" oninput="grnOutputId.value = grnInputId.value"><output name="grnOutputName" id="grnOutputId">128</output><br/>');

    res.write('blue <input type="range" name="bluInputName" id="bluInputId" value="0" min="0" max="255" oninput="bluOutputId.value = bluInputId.value"><output name="bluOutputName" id="bluOutputId">0</output><br/><br/>');

    res.write('<div id="mysquare" width="64px" height="64px" background="#FF8000" ></div><br/><br/>');
    //res.write('<p>Pin is '+(D12.read()?'on':'off')+'</p>');
    res.write('<a href="?led=1">on</a><br/><a href="?led=0">off</a><br/><br/>');
    /* the colors */
    res.write('<a href="?led=1&color=ff0000&red=255&grn=0&blu=0">Red</a><br/>'); /* red */
    res.write('<a href="?led=1&color=ff8000&red=255&grn=128&blu=0">Orange</a><br/>'); /* orange */
    res.write('<a href="?led=1&color=ffff00&red=255&grn=255&blu=0">Yellow</a><br/>'); /* yellow */
    res.write('<a href="?led=1&color=00ff00&red=0&grn=255&blu=0">Green</a><br/>'); /* green */
    res.write('<a href="?led=1&color=00ffff&red=0&grn=255&blu=255">Truquoise</a><br/>'); /* turquoise */
    res.write('<a href="?led=1&color=0000ff&red=0&grn=0&blu=255">Blue</a><br/>'); /* blue */
    res.write('<a href="?led=1&color=ff00ff&red=255&grn=0&blu=255">Violet</a><br/>'); /* violet */
    res.write('<a href="?led=1&color=ffffff&red=255&grn=255&blu=255">White</a><br/>'); /* white */
    res.end('</body></html>');

    if(a.query && "led" in a.query)
    {
        var red_col = parseFloat(a.query.red)/255.0;
        var grn_col = parseFloat(a.query.grn)/255.0;
        var blu_col = parseFloat(a.query.blu)/255.0;
        analogWrite(D12, red_col);
        analogWrite(D14, grn_col);
        analogWrite(D2, blu_col);
    }
}
require('http').createServer(onPageRequest).listen(8080);

var wifi = require('Wifi');
wifi.connect(ssid, {password: password}, function() {
   console.log('Connected to Wifi.  IP address is:', wifi.getIP().ip);
   wifi.save(); // Next reboot will auto-connect
});
