 // adding Event Listener
 const header = document.querySelector('h1');
 header.addEventListener('click', clickHandler);
 function clickHandler() {
     let name = prompt('Enter new Header');
     header.textContent = 'Text '+ name;                
 }
 
 // Adding a para to the body
 let para = document.createElement('p');
 para.textContent = 'Para content';
 document.body.appendChild(para);

 // Appending a child li to UL
 let ulEl = document.getElementsByTagName('ul')[0];
 let liEl = document.createElement('li');
 liEl.textContent = 'Orange';
 ulEl.appendChild(liEl);
 let liMango = document.createElement('li');
 liMango.textContent = 'Mango';
 ulEl.appendChild(liMango);
 
 // Removing the element
 ulEl.removeChild(liEl);

 let div1El = document.querySelector('#outer-div1');
 div1El.onclick = function() {alert('div1 clicked')};

 let btnEl = document.querySelector('button');
 btnEl.onclick = function() {alert('button clicked')}
