let seconds = 7;

function error(){
    $("#content").empty();
    $("#content").load("error.html");
    setInterval(UpdateText, 1000);
}
function UpdateText(){
    if(seconds > 0){
        seconds -= 1;
        $("#timer").text("Redirecting in " + seconds + "s");
    }
    else{
        window.location.href = "projecten.html"
    }
}

