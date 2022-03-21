const storiesDisplay=document.querySelector('.stories');
const theImage=document.querySelector('img');
const innerLine=document.getElementById('inner-line');

//storiesDisplay.addEventListener('click',changeImage);

let theNumber= 1;

innerLine.classList.add('mover');

setInterval(()=>{
	
	
	if(theNumber>3){
	   theNumber=1;
	   }

	theImage.src=`./img/${theNumber}.jpg`;
	theNumber++;
	
	
	
},5000)

function changeImage(e){
	if(theNumber>3){
	   theNumber=1;
	   }

	theImage.src=`./img/${theNumber}.jpg`;
	theNumber++;
	
}

