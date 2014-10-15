define([], function(){
	return{
		create: function(){
			var tooManyCards = function(hand){
				if(hand.numberOfCards() > 5){
					return true;
				}
				return false;
			};
			var winningHand = function(hand){
				return !tooManyCards(hand) && hand.sum() == 21;
			};

			var calculateClosestTo21 = function(hand1, hand2){
				var hand1Diff = 21 - hand1.sum();
				var hand2Diff = 21 - hand2.sum();

				if(hand1Diff < hand2Diff){
					return hand1;
				} else {
					return hand2;
				}
			};

			return {
				winningHand: function(hand1, hand2){
					var hand1Wins = winningHand(hand1);
					var hand2Wins = winningHand(hand2);

					if(hand1Wins && hand2Wins) {
						return 'tie';
					}

					if(hand1Wins === true){
						return hand1;
					} else if(hand2Wins === true) {
						return hand2;
					}
					
					return calculateClosestTo21(hand1, hand2);					
				}
			};
		}
	};
});