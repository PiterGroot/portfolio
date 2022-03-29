let seconds = 5;

function error(){
    $("#content").empty();
    $("#content").load("error.html");
    setInterval(UpdateText, 1000);
    $("timer").text(seconds.toString());
}
function UpdateText(){
    console.log("hallo")
    if(seconds > 0){
        seconds -= 1;
        $("#timer").text("Redirecting in " + seconds + "s");
    }
    else{
        window.location.href = "../index.html"
    }
}

