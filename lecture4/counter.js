// Simple Adder functions to illustrate closures
function Adder(val) {
	var value = val;
	return function(inc) {
		value = value + inc;
		return value;
	}
};

var f = Adder(5);
console.log( f(3) );

var f2 = Adder(100);
console.log( f2(2) );
console.log( f(5) );

console.log( f2(3) );

console.log( f(1) );

// Counter closure returning an object
function Counter(initial) {
	var val = initial;
	return {	
		increment : function() { val += 1; },
		reset: function() { val = initial; },
		get: function() { return val; }
	};
};

var f = Counter(5), g = Counter(10);
f.increment();
g.increment();
f.reset();
f.increment();
g.increment();
console.log( f.get() + "," + g.get() );

// Closure that keeps a pointer to the enclosing function itself
function MultiCounter(initial) {
	var that = this;
	var val = [];	
	this.init = function() {
		val = [];
		for (var i=0; i<initial.length; i++) {
			val.push(  initial[i] );
		};
	};
	this.init();
	return {
		increment: function(i) { val[i] += 1; },
		resetAll: function() { that.init(); },
		getValues: function() { return val; }
	};
};

var m = MultiCounter( [1, 2, 3] );
m.increment(0);
m.increment(2);
m.increment(0);
m.resetAll();
m.increment(1);
console.log( m );
console.log( m.getValues() );

// This example is WRONG ! Do NOT use Closures this way !
function MakeCounters2(n) {
	var counters = [];
	for (var i=0; i<n; i++) {
		var val = i;
		counters[i] = {
			increment: function() { val++; },
 			get: function() { return val; },
			reset: function() { val = i; }
		}
	}
	return counters;
};

// This solves the problem, but adds additional fields to the counters object 
function MakeCounters1(n) {
	var counters = [];
	for (var i=0; i<n; i++) {
		counters[i] = {
			val : i,
			initial : i,
			increment: function() { this.val++; },
 			get: function() { return this.val; },
			reset: function() { this.val = this.initial; }
		}
	}
	return counters;
};


// Solution to the class activity correcting the above example using closures
function MakeCounters(n) {
	var counters = [];
	for (var i=0; i<n; i++) {
		counters[i] = function( ) {
			var initial = i, val = initial;
			return {	
				increment: function() { val++; },
 				get: function() { return val; },
				reset: function() { val = initial; }
			}
		}();	// Don't forget to call the function
	}
	return counters;
};
	
var m = MakeCounters(10);
for (var i=0; i<10; i++) {
	console.log(m[i]);
        document.writeln("Counter[ " + i + "] = " + m[i].get());
}
<<<<<<< HEAD
	
=======

>>>>>>> origin/master
