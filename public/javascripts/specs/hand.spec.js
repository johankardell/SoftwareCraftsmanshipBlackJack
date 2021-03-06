/* jshint expr:true */

define(['test-util/expect', 'hand'], function(expect, hand) {
  describe('hand', function() {

  	var handInstance;

  	beforeEach(function(){
  		handInstance = hand.create();
  	});

  	describe('has 3 on hand', function(){
	  	beforeEach(function(){
	  		handInstance.pickUp('3h');
	  	});

	    it('', function() {
		    expect(handInstance.sum()).to.equal(3);
	    });

	    it('and 9 on hand equals 12', function() {
	    	handInstance.pickUp('9h');
		    expect(handInstance.sum()).to.equal(12);
	    });

	    it('and king on hand equals 13', function() {
	    	handInstance.pickUp('kh');
		    expect(handInstance.sum()).to.equal(13);
	    });

	    it('and queen on hand equals 13', function() {
	    	handInstance.pickUp('qh');
		    expect(handInstance.sum()).to.equal(13);
	    });

	    it('and jack on hand equals 13', function() {
	    	handInstance.pickUp('jh');
		    expect(handInstance.sum()).to.equal(13);
	    });

	    it('and ace on hand equals 14', function() {
	    	handInstance.pickUp('ah');
		    expect(handInstance.sum()).to.equal(14);
	    });

	    it('and 10 on hand equal 13', function(){
	    	handInstance.pickUp('10h');
		    expect(handInstance.sum()).to.equal(13);
	    });
  	});

    it('has 10 and ace on hand equals 21', function() {
    	handInstance.pickUp('10h');
    	handInstance.pickUp('ah');
	    expect(handInstance.sum()).to.equal(21);
    });

    it('has 10, 5 and ace on hand equals 16', function() {
    	handInstance.pickUp('10h');
    	handInstance.pickUp('5c');
    	handInstance.pickUp('as');
	    expect(handInstance.sum()).to.equal(16);
    });

    it('has 3 cards on hand and should return 3', function(){
    	handInstance.pickUp('10h');
    	handInstance.pickUp('5c');
    	handInstance.pickUp('as');

    	expect(handInstance.numberOfCards()).to.equal(3);
    });

    it('has 9, ace and 8 on hand equals 18 (sequence matters)', function() {
    	handInstance.pickUp('9h');
    	handInstance.pickUp('ac');
    	handInstance.pickUp('8s');
	    expect(handInstance.sum()).to.equal(18);
    });

    it('has 9, ace and 8 on hand equals 18 (sequence matters)', function() {
    	handInstance.pickUp('9h');
    	handInstance.pickUp('8s');
    	handInstance.pickUp('ac');
	    expect(handInstance.sum()).to.equal(18);
    });

    it('has 9, ace and 8 on hand equals 18 (sequence matters)', function() {
    	handInstance.pickUp('ac');
    	handInstance.pickUp('8s');
    	handInstance.pickUp('9h');
	    expect(handInstance.sum()).to.equal(18);
    });

  });
});
