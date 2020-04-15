const a = [1, 2, 3]

const [a,b] = ['Max', '28'];
const aObj = {name:'k', age : 26};
let {name} = aObj;
const a = {name:'Max'};
const b = a; a.name = 'Alex'; console.log(b.name)	// Alex
const a = {name:'Max'};
const b = {...a}; a.name = 'Alex'; console.log(b.name)	//Max