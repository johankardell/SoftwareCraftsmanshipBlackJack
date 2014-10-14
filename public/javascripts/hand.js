define([], function(){
	return {
		create: function() {
			var cards = [];

			var addValueFromAces = function(aces, sum){
				for(var i=0; i<aces; i++){
					if(sum + 11 === 21){
						sum += 11;
					}
					else if (sum +11 <= 21) {
						sum += 11;
					} else {
						sum += 1;
					}
				}
				return sum;
			};

			var createCardObject = function(card){
				var cardValue, cardColor;

				if(card.length === 3){
					cardValue = card.substr(0,2);
					cardColor = card.substr(2,1);
				} else {
					cardValue = card.substr(0,1);
					cardColor = card.substr(1,1);
				}

				return {
					value: cardValue,
					color: cardColor
				};
			};

			var calculateSum = function(){
				var sum = 0;
				var aces = 0;

				for(var i=0; i<cards.length; i++){
					var card = cards[i];

					if(card.value === 'a') {
						aces += 1;
					}
					else if(card.value === 'k' || card.value === 'q' ||	card.value === 'j') {
						sum += 10;
					} else {
						sum += parseInt(card.value);
					}
				}

				sum = addValueFromAces(aces, sum);
				return sum;
			};

			return {
				pickUp: function(card) {
					cards.push(createCardObject(card));
				},
				sum: function(){
					return calculateSum();
				},
				numberOfCards: function(){
					return cards.length;
				}
			};
		}
	};
});
