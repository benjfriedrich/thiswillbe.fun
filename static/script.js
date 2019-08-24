

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
    },
    
    function() {
    	console.log("Slide 2");
    	animate.scrollTo('s2');
    	document.getElementById("s2b").classList.toggle("is-hidden");
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

	dots() {


		anime ({
			
			targets: '.dot',
			loop: true,
			direction: 'normal',
			opacity:  [0, 1],
			delay: anime.stagger(500, {start: 500}),
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