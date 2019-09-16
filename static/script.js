

// The job of storyEngine is handle the state of the story. It goes either forward or backward. It knows the order that things happen and it adds and removes listeners along that trigger it's proggression along the way.

class StoryEngine {



	constructor() {
		
		this.storySpot = 0;
		animate.scrollToTop();
		console.log("StoryEngine initiated");
		storyStructure[this.storySpot]();


	};

	forward() {

		this.storySpot ++;
		this.storyLogic();
		console.log('Forward')

	};

	back() {

		this.storySpot --;
		this.storyLogic();
		console.log('Backward')
	};

	storyLogic() {

		console.log("storySpot = " + this.storySpot);
		storyStructure[this.storySpot]();


	};



};


// What I'm working on is trying to find out if I should use an array of functions to organize the story structure. Still haven't tested how and if it works.


var storyStructure = [
    function() { 

    	console.log("Slide 1 a");
    	animate.scrollTo('s1');
    	animate.blinkButton();
    	animate.dots();

    	animate.navButton('#the-button', true);


    },

    function() {

    	console.log("Slide 1 b");
    	animate.navButton('.down-arrow', true);
    	animate.toggleArrow('s1');
    	animate.scrollTo('s1');
    	animate.shrinkButton();
    	animate.revealFunBadge();
    	animate.revealFunTimes();


// TEMP LOAD ZONE


   animate.scrollTo('s6');
   animate.thisWillBeFun();
    

    },
    
    function() {
    	console.log("Slide 2");
    	animate.scrollTo('s2');
    	animate.toggleArrow('s1');
    	animate.paraSlider('#goals-p1');
    	animate.checkMarks();
    },
    
    function() {
    	console.log("Slide 2");
    	animate.scrollTo('s2');
    	animate.lightsOn();
    	animate.revealDancers();
    	animate.show('#down-arrow-2', 2000);
    	animate.navButton('#down-arrow-2', true);

   
    },

    function() { 
    	console.log("Slide 3");
    	animate.scrollTo('s3');
    	animate.pinataReveal();
    	animate.paraSlider('#pinata-p1');
    	animate.pinata();
    	animate.navButton('#down-arrow-3', true);

    },

    function() { 
    	console.log("Slide 4");
    	animate.scrollTo('s4');
    	animate.paraSlider("#s4-p1");
    	animate.sunBlink();
    	animate.navButton('#sunrise', true)
    },

     function() {
    	console.log("Slide 4");
    	animate.scrollTo('s4');
    	animate.sunRise();
    	animate.navButton('#down-arrow-4', true);

    },

     function() {
    	console.log("Slide 5");
    	animate.scrollTo('s5');
    	animate.autoTicTac();
    	animate.navButton('#xo7', true);
    	

    },

     function() {
    	console.log("Slide 5");
    	animate.scrollTo('s5');
    	animate.ticTacToe();

    },

     function() {
    	console.log("Slide 5");
    	animate.scrollTo('s5');

    }
];




class Animate {


	navButton(target, goingForward) {

		var button = document.querySelector(target);

		if (goingForward == true) {

			var _func = function() { console.log('click');  button.removeEventListener('click', _func);storyEngine.forward();};
    		button.addEventListener('click', _func)
		} else {

			var _func = function() { console.log('click');  button.removeEventListener('click', _func);storyEngine.back();};
    		button.addEventListener('click', _func)

		}



	}

	toggleArrow (id) {

		var button=document.getElementById(id).getElementsByClassName('down-arrow')[0];
		button.classList.toggle('is-hidden');

	}

	getArrow (id) {

		var button=document.getElementById(id).getElementsByClassName('down-arrow')[0];
		
		return button;

	}

	paraSlider(id) {

		console.log("paraSlider");



		anime ({

			targets: id,
			translateX: -450,
			opacity: 0,
			direction: 'reverse',
			duration: 400,
			easing: 'easeInOutQuad',
			begin: function(anim) { document.querySelector(id).classList.remove("is-hidden");
	 },

		});

	};
	paraHider(id) {

		console.log("paraHider");

		anime ({

			targets: id,
			translateX: 450,
			opacity: 0,
			duration: 400,
			easing: 'easeInOutQuad',

			complete: function(anim) {
    		
			 	document.querySelector(id).classList.add("is-hidden");

  				}

		});

	}

	hide(id) {

		document.querySelector(id).classList.add('is-hidden');

	};

	show(id, delay = 0) {


		if (delay == 0) {
		document.querySelector(id).classList.remove('is-hidden');
		document.querySelector(id).classList.remove('is-clear');

		} else {

			anime ({

				duration: delay,

				complete: function(anim) {
   				document.querySelector(id).classList.remove('is-hidden');
				document.querySelector(id).classList.remove('is-clear');
  				}

			});
		};


	};

	colorSVG(id, color) {

			var idList = document.querySelectorAll(id);
			var length = idList.length;

			var i;

			for (i = 0; i < length; i++) {

				idList[i].style.fill=color;


			};


			
	};

	scrollToTop() {

		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		});
		// document.body.style.overflow = 'hidden';
	};

	scrollTo(scrollTarget) {

		console.log(scrollTarget);
		var container = document.body;
		var element = document.getElementById(scrollTarget);
		container.scrollTop = element.offsetTop;
	};

	scrollToNext() {
		console.log('scrollToNext');
		var windowHeight = window.innerHeight;
		window.scrollBy(0, windowHeight);
	};


// First Slide

	dots() {


		anime ({
			
			targets: '.dot',
			loop: true,
			direction: 'normal',
			opacity:  [0, 1],
			delay: anime.stagger(530, {start: 300}),
			duration: 1,
			endDelay: 500,

		})
		
	};


	blinkButton() {

		console.log('Running anime test');

		var cycleSpeed = 1000;

	

		anime({
			  targets: '.button-a',
			  scale: 1.025,
			  direction: 'alternate',
			  loop: true,
			  easing: 'easeInOutSine',
			  duration: cycleSpeed,

			  	
			});


		anime({
			  targets: '.button-b',
			  fill: ['#5FECFF', '#ffffff'],
			  direction: 'alternate',
			  loop: true,
			  easing: 'easeInOutSine',
			  duration: cycleSpeed
			});

		anime({
			  targets: '.button-c',
			  opacity: ['.2', '1'],
			  direction: 'alternate',
			  loop: true,
			  easing: 'easeInOutSine',
			  duration: cycleSpeed
			});


	};

	shrinkButton() {

		console.log('shrinkButton');

		anime ({
			
			targets: '.button-a',
			scale: .0,
			 
			 complete: function(anim) {
    		
			 	document.getElementById('the-button').classList.toggle("is-hidden");

  				}
		});


	};


	revealFunBadge() {


		console.log("revealFunBadge");

		anime ({

			targets: '.fun-badge',
			opacity: 1,
			scaleX: [0, 1],
			delay: 500,
			duration: 200,

		})
	}

	revealFunTimes() {

		console.log("revealFunTimes");

		var tl = anime.timeline({
  			duration: 150,
  			delay: 500
		});
		tl
		.add({
		  targets: '.spotlight',
		  opacity: 1,
		  duration: 5,
		  delay: 1200

		})
		.add({
		  targets: '.girl-1',
		  opacity: 1,
		  delay: 800

		})
		.add({
		  targets: '.girl-2',
		  opacity: 1,
		})
		.add({
		  targets: '.arrow-1',
		  opacity: 1,
		  duration: 300
		});


		var t2 = anime.timeline({
  			duration: 150,
  			delay: 500,
  			// easing: 'easeInOutSine'

		});
		t2
		.add({
		  targets: '.title-svg',
		  scale: 1,
		  duration: 5,
		  delay: 1500
		})
		.add({
		  targets: '.title-svg',
		  
		  rotate: -20,

		})
		.add({
			targets: '.title-svg',
			rotate: -14,
			translateX: 22,
			scale: 1.04,
		});


	};

// Second Slide

	checkMarks() {

		var button = document.querySelector("#goals");

		var checkMarks = document.querySelector("#checks").children;

		var count = 0;

		var _func = function() { console.log('click'); 

			

			console.log("checkMarks ");


			checkMarks[count].classList.toggle("is-hidden");


			count++

			if (count == 1) {

			    animate.paraHider('#goals-p1');
    			animate.paraSlider('#goals-p2');
			};

			if (count == 2) {

    			animate.paraSlider('#goals-p3');
			};

			if (count == 3) {
				button.removeEventListener('click', _func);

				setTimeout(function() {storyEngine.forward();}, 400);

			};
		};
    	

    	button.addEventListener('click', _func);


	};

	lightsOn() {

		console.log('lightsOn');

		animate.hide('#Guy_and_Shadow');
		animate.hide('#blue');
		animate.show('#orange');
		animate.hide('#screen_light');
		animate.show('#keyboard_shadow');
		animate.colorSVG('.st-goals4','#94253f');
		animate.colorSVG('.st-goals9','#94253f');
		animate.colorSVG('.st-goals6','#f1eeda');
		animate.colorSVG('.laptop-text','#94253f');
		animate.colorSVG('.st-goals11','#FFFFFF');
		animate.colorSVG('.laptop-surface','url(#SVGID_goals_surface)');
		animate.colorSVG('.st-goals7','url(#SVGID_goals_5_2_)');

		document.querySelector('#laptop_shadow').style.opacity='.5';


		anime ({

			targets: "#s2",
			duration: 200,
			backgroundColor: '#fb5e58',

		})

	};

	revealDancers() {

		animate.startDancing();

		anime ({

			targets: '#dance_guy, #dance_girl_1, #dance_girl_2',
			opacity: 1,
			delay: anime.stagger([600,1000]),

			complete: function(anim) {
    		
			 	anime ({

			targets: '#s2',
			background: '#fb6c59',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			loop: true,


		})

  				},


		})


	};

	startDancing() {

		anime ({

			targets: '#dance_guy',
		
			translateY: -2,
			translateX:-2,
			easing: 'linear',
			rotate: .5,
			loop: true,
			direction: 'alternate',
			duration: 320,




		})

		anime ({

			targets: '#dance_girl_1',
			translateY: 1,
			translateX: -1,
			easing: 'linear',
			rotate: -.2,
			loop: true,
			direction: 'alternate',
			duration: 380,


		})

		anime ({

			targets: '#dance_girl_2',
			translateY: 2,
			easing: 'linear',
			rotate: .2,
			loop: true,
			direction: 'alternate',
			duration: 340,
			
		})

		


	}

	// Third Slide

	pinataReveal() {

		anime({
		  targets: '#pinata-01',
		  top: '-500px',
		  easing: 'easeInElastic',
		  direction: 'reverse',
		});


	};

	pinataBounce(id) {


		anime({
		  targets: id,
		  translateY: -50,
		  easing: 'easeOutQuad',
		  scale: .9,
		  direction: 'alternate',
		  endDelay: 0,
		  duration: 200,

		});



	};

	pinata() {
		var button = document.querySelector('#pinata-01');

		var count = 0;

		var _func = function() { console.log('click'); 

			console.log("Pinata");


			count++

			if (count == 1) {
				animate.hide('#outline-1');
				animate.hide('#pinata-1');
				animate.show('#outline-2');
				animate.show('#pinata-2');
				document.querySelector('#s3').style.backgroundColor = '#ffd02f';
				animate.pinataBounce('#pinata-01');
			};

			if (count == 2) {

				animate.hide('#outline-2');
				animate.hide('#pinata-2');
				animate.show('#outline-3');
				animate.show('#pinata-3');
				document.querySelector('#s3').style.backgroundColor = '#ff5fe2';
				animate.pinataBounce('#pinata-01');

			};

			if (count == 3) {
				animate.hide('#pinata-01');
				animate.show('#pinata-02');
				document.querySelector('#s3').style.backgroundColor = '#18b9de';
				animate.pinataBounce('#pinata-02');
				animate.paraHider('#pinata-p1');
				animate.paraSlider('#pinata-p2');
				animate.show('#down-arrow-3', 2000);
			
			};

		};
    	

    	button.addEventListener('click', _func);

	};

// Slide 4


	sunBlink() {

		anime ({

			targets: '.st-sunrise-1',
			opacity: .5,
			direction: 'alternate',
			easing: 'linear',
			loop: true,
			duration: 2000,
		})


	};

	sunRise() {

		console.log("sunRise");


		anime ({

			targets: '#main-sunrise',
			translateY: -700,
			easing: 'easeOutQuad',
			duration: 800,

		});

		anime ({

			targets: '.hills',
			translateY: 300,
			easing: 'easeInCubic',
			direction: 'reverse',
			duration: 800,

		})

		anime ({

			targets: '#front-hill',
			translateY: 600,
			easing: 'easeOutQuad',
			duration: 800,

			 complete: function(anim) {
    		
			 	   	animate.paraSlider("#s4-p2");
			 	   	animate.show('#down-arrow-4', 1000);

  				}

		});



	};

	// Slide 5

	autoTicTac() {

		console.log("autoTicTac")

		var t1 = anime.timeline({
			  easing: 'linear',
			  duration: 300,
			  translateY: [

					{value: 10},
					{value: 0}
				]
			  
			});


		t1

		.add ({

			duration: 0,
			complete: function(anim) {

				animate.paraSlider("#s5-p1");
			}
		})

		.add ({

			targets: "#grid",
			delay: 1000,
			opacity: 1,
			

		})

		.add({

			targets: '#xo1',
			opacity: 1,
			delay: 500,
		

		})

		.add({

			targets: '#xo2',
			opacity: 1,

		})

		.add({

			targets: '#xo3',
			opacity: 1,

		})

		.add({

			targets: '#xo4',
			opacity: 1,

		})

		.add({

			targets: '#xo5',
			opacity: 1,

		})

		.add({

			targets: '#xo6',
			opacity: 1,
			endDelay: 750,

			complete: function(anim) {

				animate.paraSlider("#s5-p2");

				// var t = 0;

				// anime ({


				// 	duration: 1000,
				// 	targets: '#xo7',
				// 	opacity: .05,
				// 	loop: true,
				// 	direction: 'alternate',
				// 	easing: 'linear',

				// 	loopComplete: function(anim) {

			 //  		t++;

			 //  		if (t==4) {

			 //  					anim.reset();

			 //  		};
				// 	}

				// })
			}

		})



	};

	ticTacToe() {

		console.log("tictactoe");

		anime ({
			
			targets: '#xo7',
			opacity: 1,
			easing: 'linear',
			duration: 300,


			})

		anime ({

			targets: '.st-xo-1',
			stroke: '#00bbe9',
			delay: 800,
			duration: 200,



		})

	};


	// slide 6

	thisWillBeFun() {

		anime ({

			targets: '.twbf .st-twbf-0', 
			  strokeDashoffset: [anime.setDashoffset, 0],
			  easing: 'easeInOutSine',
			  duration: 1500,
			  // delay: function(el, i) { return i * 250 },
		
			  delay: anime.stagger(100),



			  complete: function(anim) {

			  	anime ({

			  		targets: '.twbf .st-twbf-0', 
			  		fill: '#ffffff',
			  		duration: 800,
			  		stokeWidth: 0,


			  	})


			  }
			  

		})

	};




};




// Things to do:

// - when resizing, make sure the window stays pinned to the top of the view

// - add in scroll/touch triggers





window.onload = function() {

	animate = new Animate(); 
	storyEngine = new StoryEngine();

	animate.scrollToTop();

};

window.onunload = function(){ window.scrollTo(0,0); }

// window.onclick = function() {storyEngine.forward();};