

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

    	// var button = document.getElementById('the-button');
    	// var _func = function() { console.log('click');  button.removeEventListener('click', _func);storyEngine.forward();};
    	// button.addEventListener('click', _func)
    },

    function() {

    	console.log("Slide 1 b");
    	animate.navButton('.down-arrow', true);
    	animate.toggleArrow('s1');
    	animate.scrollTo('s1');
    	animate.shrinkButton();
    	animate.revealFunBadge()
    	animate.revealFunTimes();
    

    },
    
    function() {
    	console.log("Slide 2");
    	animate.scrollTo('s2');
    	animate.paraSlider('#goals-p1');
    	animate.checkMarks();
    },
    
    function() {
    	console.log("Slide 2");
    	animate.scrollTo('s2');
    	animate.lightsOn();
    	animate.revealDancers();
   
    },

    function() { 
    	console.log("Slide 3");
    	animate.scrollTo('s3');

    },

    function() { 
    	console.log("Slide 3");
    	animate.scrollTo('s3');
    	document.getElementById("s3b").classList.toggle("is-hidden");
    },

     function() {
    	console.log("Slide 4");
    	animate.scrollTo('s4');

    },

     function() {
    	console.log("Slide 4");
    	animate.scrollTo('s4');
    	document.getElementById("s4b").classList.toggle("is-hidden");

    },

     function() {
    	console.log("Slide 5");
    	animate.scrollTo('s5');

    },

     function() {
    	console.log("Slide 5");
    	animate.scrollTo('s5');
    	document.getElementById("s5b").classList.toggle("is-hidden");
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

	show(id) {

		document.querySelector(id).classList.remove('is-hidden');
		document.querySelector(id).classList.remove('is-clear');
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
			  duration: cycleSpeed
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

				storyEngine.forward();
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

		anime ({

			targets: '#dance_guy, #dance_girl_1, #dance_girl_2',
			opacity: 1,
			delay: anime.stagger(500, {start: 500}),


		})


	};

	startDancing() {

		
	}


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