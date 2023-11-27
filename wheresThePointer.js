// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const tableEl = document.getElementsByTagName('table')[0];
tableEl.addEventListener('click', (event) => {

if (event.target.tagName == "TD"){
   event.target.innerHTML = `x:${event.clientX}, y:${event.clientY}`
}
});