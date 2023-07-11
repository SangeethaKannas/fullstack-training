var modal = document.getElementById('simpleModal')

var modalBtn = document.getElementById('modalBtn')

var closeBtn = document.getElementById('closeBtn')

modalBtn.addEventListener('click', () => modal.style.display = 'block')
closeBtn.addEventListener('click', () => modal.style.display = 'none')

window.addEventListener('click', (event) => { if(event.target == modal) modal.style.display = 'none' } );

