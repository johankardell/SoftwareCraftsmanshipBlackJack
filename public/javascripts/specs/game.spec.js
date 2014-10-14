/* jshint expr:true */

define(['test-util/expect', 'game'], function(expect, game) {
  describe('game', function() {
  	var gameInstance, mockedHandValue, mockedNumberOfCards;

  	var hand = {
  		sum: function(){
  			return mockedHandValue;
  		},
  		numberOfCards: function(){
  			return mockedNumberOfCards;
  		}
  	};

  	beforeEach(function(){
  		gameInstance = game.create();
  	});

  	it('can be created', function(){
  		expect(gameInstance).to.not.be.undefined;
  	});

  	it('hand wins if sum is 21', function(){
  		mockedHandValue = 21;
  		var wins = gameInstance.wins(hand);
  		expect(wins).to.be.true;
  	});

  	it('hand wins if sum is 21', function(){
  		mockedHandValue = 20;
  		var wins = gameInstance.wins(hand);
  		expect(wins).to.be.false;
  	});

  	it('has 6 cards on hand and should lose the game even though value is 21', function(){
  		mockedNumberOfCards = 6;
  		mockedHandValue = 21;
  		var wins = gameInstance.wins(hand);
  		expect(wins).to.be.false;
  	});

    describe('two hands are played against each other', function(){
      var mockedHand1Value;
      var mockedHand2Value;
      var mockedHand1NumberOfCards = 1;
      var mockedHand2NumberOfCards = 1;

      var hand1 = {
        sum: function(){
          return mockedHand1Value;
        },
        numberOfCards: function(){
          return mockedHand1NumberOfCards;
        }
      };

      var hand2 = {
        sum: function(){
          return mockedHand2Value;
        },
        numberOfCards: function(){
          return mockedHand2NumberOfCards;
        }
      };

      it('first hand has 21 and should be the winning hand', function(){
        mockedHand1Value = 21;
        mockedHand2Value = 15;
        
        expect(gameInstance.winningHand(hand1, hand2)).to.equal(hand1);
      });

      it('second hand has 21 and should be the winning hand', function(){
        mockedHand1Value = 15;
        mockedHand2Value = 21;
        
        expect(gameInstance.winningHand(hand1, hand2)).to.equal(hand2);
      });

      it('both hands has 21 and the game should be declared a tie', function(){
        mockedHand1Value = 21;
        mockedHand2Value = 21;

        expect(gameInstance.winningHand(hand1, hand2)).to.equal('tie');
      });

      it('hand1 has 20 and should be declared winner', function(){
        mockedHand1Value = 20;
        mockedHand2Value = 15;

        expect(gameInstance.winningHand(hand1, hand2)).to.equal(hand1);
      });

      it('hand2 has 19 and should be declared winner', function(){
        mockedHand1Value = 15;
        mockedHand2Value = 19;

        expect(gameInstance.winningHand(hand1, hand2)).to.equal(hand2);
      });
    });
  });
});