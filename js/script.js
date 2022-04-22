function generateGrid(number) {
    
}

let grid = document.querySelector('.grid-container')
grid.innerHTML = '';



for (let i = 1; i <= 100; i++) {
    let newCell = document.createElement('div');
    newCell.innerHTML = `<span>${i}</span>`;
    newCell.classList.add('cell');
    newCell.addEventListener('click',
        function() {
            this.classList.toggle('active');
        }
    )
    grid.append(newCell);
    
}



function buildGrid(size) {
    console.log(size);
}