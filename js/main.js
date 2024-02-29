
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	draggedPiece;
	// store the dragged piece in a global variable
	// because we need it in the handleDrop function
	


function changeBGImage() {
	
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function StartDrag() { 
	console.log('started dragging this piece:', this);
	// store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function DragOver(e) { 
	e.preventDefault(); // e is shorthand for event
	// this overrides the default dragover behaviour
	console.log('dragged over me'); 
}


function Drop(e) { 
    e.preventDefault();
    console.log('dropped a peice on me');
    if (this.children.length === 0) {
        this.appendChild(draggedPiece);
    } else {
        console.log('Drop zone already contains a puzzle piece');
        document.querySelector('.puzzle-pieces').appendChild(draggedPiece);
    }
}




function resetPeices() {
    dropZones.forEach(zone => {
        if (zone.firstChild) {
            const puzzlePieces = Array.from(zone.children);
            puzzlePieces.forEach(piece => {
                document.querySelector('.puzzle-pieces').appendChild(piece);
            });
        } 

    });
}


theButtons.forEach(button => button.addEventListener("click", changeBGImage));


puzzlePieces.forEach(piece => piece.addEventListener("dragstart", StartDrag));


dropZones.forEach(zone => zone.addEventListener("dragover", DragOver));


dropZones.forEach(zone => zone.addEventListener("drop", Drop));