canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_hight=70;
car1_image="car (1).png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_hight=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;
backgroundimg="racing.jpg"
function appe(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbg;
    background_imgtag.src=backgroundimg;
    car1_imgtag=new Image();
    car1_imgtag.onload=uploadcar1;
    car1_imgtag.src=car1_image;
    car2_imgtag=new Image();
    car2_imgtag.onload=uploadcar2;
    car2_imgtag.src=car2_image;
    }
    function uploadbg(){
        ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
    }
    function uploadcar1(){
        ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_hight);
    }
    function uploadcar2(){
        ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_hight);
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(){
        keyPressed=e.keyCode;
        console.log(keyPressed);
        if(keyPressed=='38'){
            car1_up();
            console.log("up");
        }
        if(keyPressed=='40'){
            car1_Down();
            console.log("Down");
        }
        if(keyPressed=='37'){
            car1_left();
            console.log("left");
        }
        if(keyPressed=='39'){
            car1_right();
            console.log("right");
        }
        
	if(car1_x > 700)
	{
		console.log("car1");
		document.getElementById('game_status').innerHTML = "Car 1 Won!!";
	}
	else if(car2_x > 700)
	{
		console.log("car2");
		document.getElementById('game_status').innerHTML = "Car 2 Won!!";
	}
}


function car1_up()
{
	if(car1_y >=0)
	{
		car1_y = car1_y - 10;
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		 uploadbg();
		 uploadcar1();
		 uploadcar2();
	}
}
function car1_down()
{
	if(car1_y <=500)
	{
		car1_y =car1_y+ 10;
		console.log("When down arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadbg();
		 uploadcar1();
		 uploadcar2();
	}
}
function car1_left()
{
	if(car1_x >= 0)
	{
		car1_x =car1_x - 10;
		console.log("When left arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadbg();
		 uploadcar1();
		 uploadcar2();
	}
}
function car1_right()
{
	if(car1_x <= 700)
	{
		car1_x =car1_x + 10;
		console.log("When right arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadbg();
		uploadcar1();
		 uploadcar2();
   }
}
	
function car2_up()
{
	if(car2_y >=0)
	{
		car2_y = car2_y - 10;
		console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		 uploadbg();
		 uploadcar1();
		 uploadcar2();
	}
}
function car2_down()
{
	if(car1_y <=500)
	{
		car2_y =car2_y+ 10;
		console.log("When down arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadbg();
		 uploadcar1();
		 uploadcar2();
	}
}
function car2_left()
{
	if(car2_x >= 0)
	{
		car2_x =car2_x - 10;
		console.log("When left arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadbg();
		 uploadcar1();
		 uploadcar2();
	}
}
function car2_right()
{
	if(car2_x <= 700)
	{
		car2_x =car2_x + 10;
		console.log("When right arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadbg();
		uploadcar1();
		 uploadcar2();
    }
    }