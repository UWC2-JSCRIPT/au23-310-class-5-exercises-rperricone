// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
let a = document.createElement('a')
a.setAttribute('id','cta')
let main = document.getElementsByTagName('main')[0]
main.appendChild(a)
let buyNow = document.createTextNode('Buy Now!')
a.appendChild(buyNow)

// Access (read) the data-color attribute of the <img>,
// log to the console
console.log(document.querySelector("body > main > img").getAttribute('data-color'))
// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
let li = document.querySelector("body > main > ul").children[2]
li.classList.add('highlight')

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
let p = document.getElementsByTagName('p')[0]
p.parentNode.removeChild(p)