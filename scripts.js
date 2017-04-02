$(document).ready(function() {

var square = '<div class="square"></div>';

function drawBlackSquares(){
	$('.square').hover(function(){
		$(this).css('background', 'black')
	})
	highlight('#blackPen');
}

function rainbowSquares(){
	$('.square').hover(function(){
		$(this).css('background', '#'+(Math.random()*0xFFFFFF<<0).toString(16));
	})
}

function gridBuild() {
	var choice = prompt('Please enter a grid size (Between 1 - 64)');
	if(choice == "" || isNaN(choice)) {
		choice = 16;
		console.log('NaN');
	} else if(choice < 1) {
		choice = 1;
		console.log('low');
	} else if (choice > 64) {
		choice = 64;
		console.log('high');
	} else {
		choice = choice;
		console.log('fine');
	}
	return choice;
}

//onload 16x16 grid
for (i = 0; i < 16 * 16; i++) {
		$('#sketchBoard').append(square);
		drawBlackSquares();
			}
//end onload grid

//Grid set
$('#reset').click(function() {
	$('.square').remove();
	gridSize = gridBuild();
	squareSize = 550 / gridSize;

	for (i = 0; i < gridSize * gridSize; i++) {
		$('#sketchBoard').append(square);
	};
	$('.square').css({
		"height" : squareSize + "px",
		"width" : squareSize + "px"
	});
	drawBlackSquares();
});
//end grid set

//Change colours
function highlight(thisProp) {
	$(thisProp).siblings().removeClass('button-highlight');
	$(thisProp).addClass('button-highlight');
}

$('#rainbow').click(function(){
	highlight(this);
	rainbowSquares();
})

$('#blackPen').click(function(){
	highlight(this);
	drawBlackSquares();
})

});