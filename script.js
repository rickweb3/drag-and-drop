document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});


// Function Item
function dragStart(e) {
    e.currentTarget.classList.add('draggin');
}

function dragEnd(e) {
    e.currentTarget.classList.remove('draggin');
}


// Function Area