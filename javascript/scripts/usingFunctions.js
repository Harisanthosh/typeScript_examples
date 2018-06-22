
// (function () {
//     console.log("IIFE Immediately invoked function expression");
//     function display() {
//         var version = "Using ECMAScript 2015";
//         function showVersion() {
//             console.log("JavaScript  - " + version);
//         }
//         showVersion();
//     }
//     display();
// })();

//()();


(function () {
    console.log("IIFE Immediately invoked function expression");
    function display() {
        return function () {
            var version = "Using ECMAScript 2015";
            function showVersion() {
                console.log("JavaScript  - " + version);
            }
            showVersion();
            return version;
        }
    }
    t = display();
    console.log(t());

    //callback function
    var books = ["Java", "JavaScript", "ExtJs", "Angular"];
    books.forEach(function (element, idx) {
        console.log(++idx + " : " + element);
    });
})();

//()();