var viz = require('viz.js');
var fs = require('fs');

var svg2png = require("svg2png");
var result = viz("digraph { x -> y -> z; }", { format: "svg" });
//var result = viz("digraph app {\r\nnode [shape=doublecircle,style=filled,color=orange]\r\n    \"check-mentions\"\r\n    \"follow-users\"\r\n    \"process-mention\"\r\n    \"send-tweet\"\r\nnode [shape=box,style=filled,color=yellow]\r\n    \"Timer\"\r\n    \"Blob incontainer\/lastid\"\r\n    \"Queue mentions\"\r\n    \"Queue friends\"\r\n    \"Queue tweets\"\r\nnode [shape=box,style=filled,color=lightblue]\r\n    \"linqtotwitter (4.1.0)\"\r\n    \"Newtonsoft.Json (9.0.1)\"\r\n    \"FSharp.Compiler.Service (9.0.1)\"    \r\nedge [ style=bold ]\r\n    \"Timer\" -> \"check-mentions\" [ label = \"timer\" ]\r\n    \"Queue friends\" -> \"follow-users\" [ label = \"userName\" ]\r\n    \"Queue mentions\" -> \"process-mention\" [ label = \"input\" ]\r\n    \"Queue tweets\" -> \"send-tweet\" [ label = \"input\" ]\r\nedge [ style=solid ]\r\n    \"Blob incontainer\/lastid\" -> \"check-mentions\" [ label = \"previousID\" ]\r\nedge [ style=solid ]\r\n    \"check-mentions\" -> \"Blob incontainer\/lastid\" [ label = \"updatedID\" ]\r\n    \"check-mentions\" -> \"Queue mentions\" [ label = \"mentionsQueue\" ]\r\n    \"check-mentions\" -> \"Queue friends\" [ label = \"friendsQueue\" ]\r\n    \"process-mention\" -> \"Queue tweets\" [ label = \"responseQueue\" ]    \r\nedge [ arrowhead=none,style=dotted,dir=none ]\r\n    \"linqtotwitter (4.1.0)\" -> \"check-mentions\"\r\n    \"Newtonsoft.Json (9.0.1)\" -> \"check-mentions\"\r\n    \"linqtotwitter (4.1.0)\" -> \"follow-users\"\r\n    \"FSharp.Compiler.Service (9.0.1)\" -> \"process-mention\"\r\n    \"Newtonsoft.Json (9.0.1)\" -> \"process-mention\"\r\n    \"linqtotwitter (4.1.0)\" -> \"send-tweet\"\r\n    \"Newtonsoft.Json (9.0.1)\" -> \"send-tweet\"    \r\n}\r\n\r\nFrom <http:\/\/brandewinder.com\/2017\/04\/01\/azure-function-app-diagram\/> \r\n", { format: "svg" });
//var png = svg2png(result);

svg2png(result)
.then(buffer => fs.writeFile("dest.png", buffer))
        .catch(e => console.error(e));

// fs.writeFile('source.svg', result, function (err) {
//     if (err) 
//         return console.log(err);
//     else{
//         fs.readFile("source.svg")
//         .then(svg2png)
//         .then(buffer => fs.writeFile("dest.png", buffer))
//         .catch(e => console.error(e));
//     }
//     console.log('Hello World > helloworld.txt');
// });

//var img = viz.svgXmlToPngBase64(result);

console.log("hi there");