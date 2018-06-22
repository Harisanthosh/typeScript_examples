var app = {};
app.show = function () {
    //function returning a function
    return function () {
        var placeHolder = document.getElementsByTagName("h2")[0];
        placeHolder.innerHTML = show();
        console.log("Surprise ! Surprise");
    }
}
app.init = function () {
    var btx = document.getElementById("greet");

    //btx.onclick = app.show;
    //Function gets invoked without waiting for event trigger
    btx.onclick = app.show();
}
function show() {
    console.log("JS is in house");
    return "Great job"
}