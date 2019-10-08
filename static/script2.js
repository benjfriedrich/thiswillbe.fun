class TextRevealer {


	classify (id) {

		console.log('classify');


		var section = document.querySelector(id);

		var sectionSize = section.childElementCount;


		console.log('child elements = ' + sectionSize);

		var subSectionCount = 0;
		var i;

		for (i = 0; i < sectionSize; i++) {

			var node = section.children[i];

			console.log(i);


			if (node.tagName == 'H3') {

				subSectionCount++;

				this.addEventListener(node, subSectionCount);

				console.log("subsection count = " + subSectionCount);
			};

			if (node.tagName == 'P') {

				node.classList.add('s-' + subSectionCount);
				node.classList.add('is-hidden');

				console.log("p = " + subSectionCount);

			};

		};
	}

	addEventListener(node, s) {



		if (node.nextElementSibling.tagName == 'P') {

			var span = document.createElement("SPAN");
			var t = document.createTextNode(" +");
			span.appendChild(t);
			node.appendChild(span);
			node.classList.add('subhead');
			var u = ".s-" + s;
			
			node.addEventListener("click", function(){
			
				 var pList = document.querySelectorAll(u)

				 var pCount = pList.length;
				 var i;

				 for (i = 0; i < pCount; i++) {

				 	pList[i].classList.toggle('is-hidden');
				 };

				 if (node.lastElementChild.innerHTML == ' +') {

				 		node.lastElementChild.innerHTML = ' &ndash;'
				 	} else {

				 	node.lastElementChild.innerHTML = ' +'

				 };

				 
			
			});

		};


	}


	


};

window.onload = function () {

 textRevealer = new TextRevealer();

 textRevealer.classify("#specs");

 console.log("onload");

};