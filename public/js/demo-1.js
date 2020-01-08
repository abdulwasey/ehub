(function() {

	/**
	 * checks if a number is Odd
	 */
	function isOdd(n) {
		return Math.abs(n % 2) == 1;
	}

	/**
	 * returns a random number between min and max
	 */
	function randomIntFromInterval(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	// plugin options for each word
	var options = [
		
		{ 	// word 11
			size : 390,
			weight : 10,
			color: '#E65454',
			duration: 3,
			fade: 2,
			delay: 0.1,
			easing: d3_ease.easeExpInOut.ease
		},
		
	],
	// items (li)
	items = [].slice.call(document.querySelectorAll('ul.list > li.list__item'));

	function init() {
		
		items.forEach(function(item, pos) {
			var word = item.querySelector('.list__text'),
				
				// initialize the plugin
				instance = new Letters(word, options[pos]),
				endPlayCallback = function() {
					playCtrl.className = 'control__button control__button--play';
					word.setAttribute('data-state', 'stop');
				};
			
			// show word
			instance.show();

			
			
			if( pos === 1) {
				var letters = [].slice.call(word.querySelectorAll('svg')),
					wordRect = word.getBoundingClientRect(),
					wordWidth = wordRect.width,
					wordHeight = wordRect.height,
					letterOffsetPosition = 0;

				timelines[pos+1] = new mojs.Timeline();

				letters.forEach(function(letter, i) {
					var letterRect = letter.getBoundingClientRect(),
						letterWidth = letterRect.width,
						letterHeight = letterRect.height,
						letterWidthPercentage = letterWidth*100/wordWidth;
					
					letterOffsetPosition += letterWidthPercentage;

					
					timelines[pos+1].add(burst);
				});
			}
						
		});
	}
	init();
})();
