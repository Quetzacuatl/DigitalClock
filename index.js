const hour = $(".hour");
const dot = $(".dots");
const min = $(".min");
const week = $(".weeks");

let showDot = true;

function update(){
    showDot = !showDot;
    const now = new Date();

    if(showDot){
        dot.addClass('invisible');
    }else{
        dot.removeClass('invisible');
    }

    hour.text(String(now.getHours()).padStart(2,"0"));
    min.text(String(now.getMinutes()).padStart(2,"0"));

    week.children().removeClass("active");
    // week.children[now.getDay()] .className("active"); 

    const position = now.getDay()+1 ;

    week.children(":nth-child(" + position + ")").addClass("active");

}   

setInterval(update,500);