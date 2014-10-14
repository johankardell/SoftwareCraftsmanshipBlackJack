define([], function(){
	return {
		create: function() {
			var cards = [];

			var addValueFromAces = function(aces, sum){
				for(var i=0; i<aces; i++){
					if(sum + 11 === 21){
						sum += 11;
					}
					else if (sum +1 <= 21) {
						sum += 1;
					} else {
						sum += 11;
					}
				}
				return sum;
			};

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
					var aces = 0;

					for(var i=0; i<cards.length; i++){
						var cardValue;
						if(cards[i].length === 3){
							cardValue = cards[i].substr(0,2);
						} else {
							cardValue = cards[i].substr(0,1);
						}

						if(cardValue === 'a') {
							aces += 1;
						}
						else if(cardValue === 'k' ||
							cardValue === 'q' ||
							cardValue === 'j') {
							sum += 10;
						} else {
							sum += parseInt(cardValue);
						}
					}

					sum = addValueFromAces(aces, sum);
					return sum;
				},
				numberOfCards: function(){
					return cards.length;
				}
			};
		}
	};
});
