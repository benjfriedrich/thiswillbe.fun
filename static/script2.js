class TextRevealer {


	classify (id) {

		var section = document.querySelector(id);

		var sectionSize = section.childElementCount;

		var subSectionCount = 0;
		var i;

		for (i = 0; i < sectionSize; i++) {

			var node = section.children[i];

			if (node.tagName == 'H3') {

				subSectionCount++;
				this.addEventListener(node, subSectionCount);


			};

			if (node.tagName == 'P') {

				node.classList.add('s-' + subSectionCount);
				node.classList.add('is-hidden');

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

				 	node.lastElementChild.innerHTML = ' +';

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