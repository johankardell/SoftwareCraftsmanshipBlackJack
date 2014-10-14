define([], function(){
	return {
		create: function() {
			var cards = [];
			return {
				pickUp: function(card) {
					cards.push(card);
				},
				has: function(card) {
					for(var i=0; i<cards.length; i++){
						if(cards[i] === card){
							return true;
						}
					}
					return false;
				},
				sum: function(){
					var sum = 0;
					for(var i=0; i<cards.length; i++){
						var cardValue;
						if(cards[i].length === 3){
							cardValue = cards[i].substr(0,2);
						} else {
							cardValue = cards[i].substr(0,1);
						}

						if(cardValue === 'a') {
							if(sum <= 10) {
								sum += 11;
							} else {
								sum += 1;
							}
						}
						else if(cardValue === 'k' ||
							cardValue === 'q' ||
							cardValue === 'j') {
							sum += 10;
						} else {
							sum += parseInt(cardValue);
						}
					}

					return sum;
				},
				numberOfCards: function(){
					return cards.length;
				}
			};
		}
	};
});
