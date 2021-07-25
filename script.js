document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});


// Function Item
function dragStart(e) {
    e.currentTarget.classList.add('draggin');
}

function dragEnd(e) {
    e.currentTarget.classList.remove('draggin');
}


// Function Area
function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}

function drop(e) {
    e.currentTarget.classList.remove('hover');

    let dragItem = document.querySelector('.item.draggin');
    if (e.currentTarget.querySelector('.item') === null) {
        e.currentTarget.appendChild(dragItem);
    }

}