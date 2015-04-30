var assert = require('assert');
var should = require('should');

var json = require('../public/value.json')
var counter = require('..')

describe('json', function() {
	it('should be json', function(){
		json.should.be.json;
	});

	it('should have property visit', function(){
		json.should.have.ownProperty('visit');
	});

	it('should reset value', function(){
		(json.visit).should.be.equal(0);
	})
});

describe('counter', function() {
	
	describe('#status()', function() {
		it('should display current status and history in console', function(){
			counter.status.should.be.function;
		});
		it('should be ok', function() {
            (counter.status()).should.be.equal(0);
        });
	});

    describe('#purge()', function() {
        it('should purge all history and refresh console', function() {
            counter.purge.should.be.function;
        });
        it('should be ok', function() {
            (counter.purge()).should.be.equal(0);
        });
    });

    describe('#addStatus()', function() {
    	it('should add a status to history log', function() {
            counter.addStatus.should.be.function;
        });
        it('should have argument', function() {
            (counter.addStatus()).should.be.equal(1);
        });
        it('should be ok', function() {
            (counter.addStatus("test")).should.be.equal(0);
        });
    });

    describe('#addVisit()', function() {
    	it('should add a visit', function() {
            counter.addVisit.should.be.function;
        });
        it('should be ok', function() {
            (counter.addVisit()).should.be.equal(0);
        });
    });

    describe('#getVisit()', function() {
    	it('should get current visit count', function() {
            counter.addVisit.should.be.function;
        });
        it('should be ok', function() {
            (counter.addVisit()).should.be.equal((json.visit));
        });
    });


    describe('#setLineDisplay()', function() {
    	it('should set lines of history to display in console', function() {
            counter.setLineDisplay.should.be.function;
        });

        it('should have argument', function() {
            (counter.setLineDisplay()).should.be.equal(1);
        });
        it('should be ok', function() {
            (counter.setLineDisplay('10')).should.be.equal(0);
        });
    });

    describe('#getLineDisplay()', function() {
    	it('should get lines of history that display in console', function() {
            counter.getLineDisplay.should.be.function;
        });
    });
});