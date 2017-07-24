function areaOfCircle(radius) {
   var PI = 3.1416;
   
   // This is a Nested function
   function PIsquare(x) {
	var sq = x * x;
	return PI * sq; 
   }

   return PIsquare(radius); 
}

var A = areaOfCircle (2);
console.log("Area of circle of radius 2 = " + A);
