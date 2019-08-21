

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

	};

	back() {

		this.storySpot --;
		this.storyLogic();
	};

	storyLogic() {

		console.log("storySpot = " + this.storySpot);
		storyStructure[this.storySpot]();


	};

};


// What I'm working on is trying to find out if I should use an array of functions to organize the story structure. Still haven't tested how and if it works.


var storyStructure = [
    function() { 
    	console.log("Slide 1");
    	animate.scrollTo('s1');
    	animate.sizeAnimeTest();

    },

    function() { 
    	animate.scrollTo('s1');
    	document.getElementById("s1b").classList.toggle("is-hidden");;

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


	sizeAnimeTest() {

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

window.onclick = function() {storyEngine.forward();};