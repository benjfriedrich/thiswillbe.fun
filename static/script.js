


class StoryEngine {



	constructor() {
		
		this.storySpot = 0;
		animate.scrollToTop();
		storyStructure[this.storySpot]();


	};

	forward() {

		this.storySpot ++;
		this.storyLogic();

	};

	back() {

		this.storySpot --;
		this.storyLogic();
	};

	storyLogic() {

		storyStructure[this.storySpot]();


	};



};


// What I'm working on is trying to find out if I should use an array of functions to organize the story structure. Still haven't tested how and if it works.


var storyStructure = [
    function() { 

    	animate.scrollTo('s1');
    	animate.blinkButton();
    	
    	animate.websitesShould();


    	animate.navButton('#the-button', true);


    },

    function() {


    	animate.navButton('.down-arrow', true);
    	animate.toggleArrow('s1');
    	animate.scrollTo('s1');
    	animate.shrinkButton();
    	animate.revealFunBadge();
    	animate.revealFunTimes();


// TEMP LOAD ZONE

// storyEngine.storySpot = 2;

    },
    
    function() {
    	animate.scrollTo('s2');
    	animate.toggleArrow('s1');
    	animate.paraSlider('#goals-p1');
    	animate.checkMarks();
    },
    
    function() {
    	animate.scrollTo('s2');
    	animate.lightsOn();
    	animate.revealDancers();
    	animate.show('#down-arrow-2', 2000);
    	animate.navButton('#down-arrow-2', true);

   
    },

    function() { 
    	animate.scrollTo('s3');
    	animate.pinataReveal();
    	animate.paraSlider('#pinata-p1');
    	animate.pinata();
    	animate.navButton('#pinata-02', true);

    },

    function() { 
    	animate.scrollTo('s4');
    	animate.paraSlider("#s4-p1");
    	animate.sunBlink();
    	animate.navButton('#sunrise', true)
    },

     function() {
    	animate.scrollTo('s4');
    	animate.sunRise();
    	animate.navButton('#down-arrow-4', true);

    },

     function() {
    	animate.scrollTo('s5');
    	animate.autoTicTac();
    	animate.navButton('#xo7', true);
    	

    },

     function() {
    	animate.scrollTo('s5');
    	animate.ticTacToe();

    },

     function() {
    	animate.scrollTo('s6');
   		animate.thisWillBeFun();

    }
];




class Animate {


	navButton(target, goingForward) {

		var button = document.querySelector(target);

		if (goingForward == true) {

			var _func = function() {  button.removeEventListener('click', _func);storyEngine.forward();};
    		button.addEventListener('click', _func)
		} else {

			var _func = function() {  button.removeEventListener('click', _func);storyEngine.back();};
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
		document.body.style.overflow = 'hidden';
	};

	scrollTo(scrollTarget) {

		var container = document.body;
		var element = document.getElementById(scrollTarget);


		// container.scrollTop = element.offsetTop;

		scrollTo(0,element.offsetTop);
	};

	scrollToNext() {
		var windowHeight = window.innerHeight;
		window.scrollBy(0, windowHeight);
	};


// First Slide


	websitesShould() {

		var tl = anime.timeline({
  		
		});
		
		tl

		.add({

		  targets: '#websites',
		  opacity: 1,
		  duration: 5,
		  scaleY: [

		  {value: 1.2, duration: 200, easing: 'easeOutExpo'},
		  {value: 1, duration: 150, easing: 'easeOutExpo'},

		  ],
		  delay: 800

		})
			.add({

		  targets: '#should-be',
		  opacity: 1,
		  duration: 5,
		  scaleY: [

		  {value: 1.2, duration: 200, easing: 'easeOutExpo'},
		  {value: 1, duration: 150, easing: 'easeOutExpo'},

		  ],
		  delay: 100

		})
			.add({

		  targets: '#dots',
		  opacity: 1,
		  duration: 5,
		  delay: 0,
		  complete: function(anim) {

		  	    	animate.dots();
		  }

		})


	}

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


		anime ({
			
			targets: '.button-a',
			scale: .0,
			 
			 complete: function(anim) {
    		
			 	document.getElementById('the-button').classList.toggle("is-hidden");

  				}
		});


	};


	revealFunBadge() {



		anime ({

			targets: '.fun-badge',
			opacity: 1,
			scaleX: [0, 1],
			delay: 500,
			duration: 200,

		})
	}

	revealFunTimes() {


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

		var _func = function() { 

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

		var storySpot = storyEngine.storySpot;

		anime ({

			targets: '#dance_guy',
		
			translateY: -2,
			translateX:-2,
			easing: 'linear',
			rotate: .5,
			loop: true,
			direction: 'alternate',
			duration: 320,

			loopComplete: function(anim) {

				if (storyEngine.storySpot !== storySpot) {


					anime.remove('#dance_guy, #dance_girl_1, #dance_girl_2');
				}
			}


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
		
		  easing: 'easeOutQuad',
		  
		  scale: [

		  	{value: .9},
		  	{value: 1.05},
		  	{value: 1},

		  ],

		  translateY: [

		  	{value: -30},
		  	{value: 20},
		  	{value: 0},

		  ],

		  // keyframe: [

		  // 	{scale: .9, translateY: -50},
		  // 	{scale: 1.05, translateY: 20},
		  // 	{scale: 1.0, translateY: 0},

		  // ],

		  // scale: .9,
		  // direction: 'alternate',
		  endDelay: 0,
		  duration: 800,

		});



	};

	pinata() {
		var button = document.querySelector('#pinata-01');

		var count = 0;

		var _func = function() { 


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
			
			
			};

		};
    	

    	button.addEventListener('click', _func);

	};

// Slide 4


	sunBlink() {

		var storySpot = storyEngine.storySpot;

		anime ({

			targets: '.st-sunrise-1',
			opacity: .2,
			direction: 'alternate',
			easing: 'linear',
			loop: true,
			duration: 2000,

			loopComplete: function(anim) {

				if (storyEngine.storySpot !== storySpot && storyEngine.storySpot !== storySpot + 1) {


					anime.remove('.st-sunrise-1');
				}
			}

		})


	};

	sunRise() {



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
			endDelay: 500,

			 complete: function(anim) {
    		
			 	   	animate.paraSlider("#s4-p2");
			 	   	animate.show('#down-arrow-4', 1500);

  				}

		})


		// anime ({
			
		// 	complete: function(anim) {		 
	 	   	
  // 			}



		// })



	};

	// Slide 5

	autoTicTac() {


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
			endDelay: 400,

			complete: function(anim) {

				animate.paraSlider("#s5-p2");

			}

		})



	};

	ticTacToe() {


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
			endDelay: 800,

			complete: function(anim) {

				animate.show('#down-arrow-5');
				animate.navButton('#down-arrow-5', true);
			}


		})

	};


	// slide 6

	thisWillBeFun() {

		var tl = anime.timeline({

			easing: 'linear',

		});


		tl
		.add({

			targets: '#sig',
			opacity: 1,
			duration: 100,
			delay: 800,

		})

		.add({
			targets: '#s6-p1',
			opacity: 1,
			duration: 250,
			delay: 1000,
			
		})
		
		.add({

			targets: '#name',
			opacity: 1,
			duration: 100,
			delay: 1000,

		})

		.add({

			targets: '#description',
			opacity: 1,
			duration: 100,
			delay: 500,

		})

			.add ({

			targets: '#s6-p1',
			opacity: 0,
			duration: 100,
			delay: 2000,

				complete: function(anim) {


				document.querySelectorAll('#bjf')[0].classList.add("bjfAnim");
			},

	
			
	
		})



	
		.add ({

			targets: '.twbf .st-twbf-0', 
			  strokeDashoffset: [anime.setDashoffset, 0],
			  opacity: 1,
			  easing: 'easeInOutSine',
			  duration: 1500,
			  delay: anime.stagger(100),
			  begin: function(anim) {

				animate.show('.twbf');
			},

	


		})

		.add ({

			targets: '.twbf .st-twbf-0', 
			fill: '#ffffff',
	  		delay: 600,
	  		duration: 1,
	  		stokeWidth: 0,

		})

		.add ({

			targets: '#s6',
		 	backgroundColor: '#fb5e58',
	 		duration: 1,

	 		complete: function(anim) {



	 			var text = document.querySelectorAll('.st-twbf-0');
	 			var i;


	 			length = text.length;


	 			for (i = 0; i < length; i++) {

	 				text[i].style.stroke='none';

	 			};

	 			
	 		}

		})


		.add ({

			targets: '#learn-more',
			opacity: 1,
			delay: 2000,
			duration: 200,
		})
		

	};


};





function preventScroll() {

	document.onTouchMove = function() {
		document.querySelector('#s1').style.backgroundColor = '#dddddd';
		preventDefault();
	};



};


function setWindowHeight() {


	var height = document.documentElement.clientHeight;



	var sections = document.querySelectorAll('.fill-page')


	var i;

	for (i = 0; i < sections.length; i++) {




		sections[i].style.height = height + 'px';


	};

	
};


function reframe() {

	var storySpotDivs =  ['s1','s1','s2','s2','s3','s4','s4','s5','s5','s6'];

	animate.scrollTo(storySpotDivs[storyEngine.storySpot]);

};


function centerSunset() {

	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;



	var r = w/h;
	var sr = 1.69;





var move = ( ( (h * sr) - w) / 1.85 );

	

	document.querySelector('#sunrise').style.marginLeft ="-" + move + 'px';

}




window.onload = function() {

	animate = new Animate(); 
	storyEngine = new StoryEngine();

	setWindowHeight();
	setTimeout(function () {animate.scrollToTop();}, 1000);
	animate.scrollToTop();


		// setTimeout(function () {animate.scrollTo('s4');}, 1000);

	centerSunset();


};

window.onunload = function(){ animate.scrollToTop(); };

window.addEventListener("resize", function() {
	setWindowHeight();
	centerSunset();
	reframe();
});



window.addEventListener("touchmove", function(event) {
    event.preventDefault();
    event.stopPropagation();

}, { passive: false });

	