const obj1 = {a:1, b:function(){}}
obj1.a;     // access using dot notation
obj1['a'];   // bracket notation
obj1.a = 2; obj1['a'] = 3   // update

const func1 = function(name) {this.name = name;}
func1.prototype.greet = function() {alert(this.name)}