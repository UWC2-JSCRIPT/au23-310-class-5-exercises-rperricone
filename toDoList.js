// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
/**
 * 
 *  click on LI 
 *  add event listener to LI when created 
 * toggle class Done in classLIst 
 * if delete is clicked , add listener on created for click 
 *  remove li by traversing the DOM eleements (parent, children , etc)
 * if add link is clicked (have a listener on there, add aitem in list
 *  -- create item for the list.) 
 */
class Todo {
  constructor() { }
  // adds to list 
  add(inputText) {
    let ul = document.getElementsByClassName("today-list")[0]
    console.log(ul)
    let li = document.createElement("li")
    let a = document.createElement("a")
    let span = document.createElement('span') //create item from input 
    li.appendChild(span)
    li.appendChild(a)
    span.innerHTML = inputText
    a.innerHTML = "Delete"
    a.setAttribute("class", "delete")
    ul.appendChild(li)
    span.addEventListener('click', (event) => {
      console.log(event.target.tagName, 'tagname')
      if (event.target.tagName == "SPAN") {
        this.markDone(event.target) //might have to bind this
      }
    })
    a.addEventListener('click', (event) => {
      if (event.target.tagName == "A") {
        this.removeElement(event.target)///this.removeElement(event.target) //might have to bind this
      }
    })
  }

  addListeners(element) {
    element.addEventListener('click', (event) => {
      if (event.target.tagName == "A") {
        this.removeElement(event.target)

      }
      if (event.target.tagName == "SPAN") {
        this.markDone(event.target) //might have to bind this
      }
    })
  }
  // removes from list going to be <a>
  removeElement(element) {
    let li = element.parentNode
    console.log(li, 'li')
    console.log(li.parentElement, li.parentNode)
    li.parentNode.removeChild(li)

  }
  // marks it as done
  markDone(elementLI) {
    elementLI = elementLI.parentNode
    if (elementLI.getAttribute("class") == "done") {
      elementLI.setAttribute("class", "")
    }
    else {
      elementLI.setAttribute("class", "done")
    }

  }
}
let todo = new Todo()
todo.addListeners(document.querySelector("body > main > ul > li:nth-child(1)"))
todo.addListeners(document.querySelector("body > main > ul > li:nth-child(1) > a"))
const addListItem = function (e) {
  e.preventDefault();
  const add = document.getElementsByClassName("add-item")[0]
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  todo.add(text)
}
const add = document.getElementsByClassName("add-item")[0]
add.addEventListener('click', addListItem)

// Finish function here
