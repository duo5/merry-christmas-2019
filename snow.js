function snowFlake(x,y,r,d){
this.x=x;
this.y=y;
this.r=r;
this.d=d;
}

window.onload = function(){
    // get canvas
    var canvas = document.getElementById("sky");
    var ctx = canvas.getContext("2d");

    // set w and h to window h and window w
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    // tạo ra một mảng gồm những bông tuyết và số lượng lớn nhất của nó
    var max=100;
    var snowFlakes=[];

    for(var i=0;i<max;i++){
        var s = new snowFlake(
            Math.random()*w,
            Math.random()*h,
            Math.random()*5+2,// ban kinh
            Math.random()+1 //destination
        );
        snowFlakes.push(s);
    }
    
    function draw(){
        ctx.clearRect(0,0,w,h); 
        ctx.fillStyle="white";
        ctx.beginPath();
        for(var i = 0;i < max;i++){
            var f = snowFlakes[i];
            ctx.moveTo(f.x,f.y);
            ctx.arc(f.x, f.y, f.r, 0, 2 * Math.PI, true);
        }
        ctx.fill();
        moveSnowFlakes();
        ctx.font = "50px Verdana";
var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop("0", "white");
gradient.addColorStop("0.5", "yellow");
gradient.addColorStop("1.0", "red");
ctx.fillStyle = gradient;
ctx.fillText("2019", 550, 90);
    }

    // animate the falkes
    var angle = 0;
    function moveSnowFlakes(){
        angle += 0.01;
        for(var i = 0;i < max;i++){
            var f = snowFlakes[i];
            //thay doi x va y de tao hieu ung chuyen dong
            f.y += Math.pow(f.d,2)+1;
            f.x += Math.sin(angle)*2;

            // nêu cầu tuyết chạm tới đáy thì lại cho một đợi mới rơi xuống
            if(f.y>h){
                snowFlakes[i] = new snowFlake(
                    Math.random()*w,
                    Math.random()*h,
                    Math.random()*5+2,// ban kinh
                    Math.random()+1 //destination
                );
            }
        }
    }

    setInterval(draw,50);
}
var audio=new Audio();
audio.src="./chieckhangioam.mp3";
audio.play();



