
const menu = document.querySelector('.fa-bars');
menu.addEventListener('click', () => {

    const nav_items = document.querySelector('.nav-items');
    nav_items.classList.toggle('active_bars');

    const seccion_principal = document.querySelector('.seccion_A ');
    seccion_principal.classList.toggle('active_barss');

    const logo = document.querySelector('.logo');
    logo.classList.toggle('borrar_logo');
        
});

console.log("todo bien");
var timer = 4000;

var i = 0;
var max = document.querySelectorAll('#c > li').length;


console.log(max);
 
	// document.querySelectorAll("#c > li").eq(i).addClass('active').css('left','0');
    document.querySelectorAll("#c > li")[i].addClass('active').css('left','0');
	document.querySelectorAll("#c > li").eq(i + 1).addClass('active').css('left','25%');
	document.querySelectorAll("#c > li").eq(i + 2).addClass('active').css('left','50%');
	document.querySelectorAll("#c > li").eq(i + 3).addClass('active').css('left','75%');
 

	setInterval(function(){ 

		$("#c > li").removeClass('active');

		$("#c > li").eq(i).css('transition-delay','0.25s');
		$("#c > li").eq(i + 1).css('transition-delay','0.5s');
		$("#c > li").eq(i + 2).css('transition-delay','0.75s');
		$("#c > li").eq(i + 3).css('transition-delay','1s');

		if (i < max-4) {
			i = i+4; 
		}

		else { 
			i = 0; 
		}  

		$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
		$("#c > li").eq(i + 1).css('left','25%').addClass('active').css('transition-delay','1.5s');
		$("#c > li").eq(i + 2).css('left','50%').addClass('active').css('transition-delay','1.75s');
		$("#c > li").eq(i + 3).css('left','75%').addClass('active').css('transition-delay','2s');
	
	}, timer);
 

 