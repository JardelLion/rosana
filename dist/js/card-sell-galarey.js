
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let mySlides = document.querySelectorAll('.mySlides');

let mySlidesBooks = document.querySelectorAll('.mySlides__books');
let prevBooks = document.querySelector('.prev-books')
let nextBooks = document.querySelector('.next-books');



let currentSlideForword = 3;
let currentSlideBackword = 0;



let currentSlideForwordBook = 3;
let currentSlideBackwordBook = 0;

let largura = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth



//const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
    //resize the browser in real time
    
    //heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
    widthOutput.style.display = 'none'
   
  
    resizeCardSellGallarey(widthOutput.textContent)

}

window.onresize = reportWindowSize;
window.onload = reportWindowSize


let backClicked = false
let forwordClicked = false

let getSlidesPosition = function(slides){

    for(let index = 0; index < slides.length; index ++){
        if(slides[index].style.display == 'inline-block'){
            return index
        }
        else {
            continue;
        }
        
           
    }
}


resizeCardSellGallarey = function(resizeValue){
    if(resizeValue <= 790){
       
        
        currentSlideForword = 1
        currentSlideForwordBook = 1
        mySlides[1].style.display = 'none';
        mySlides[2].style.display = 'none';
    
        mySlidesBooks[1].style.display = 'none';
        mySlidesBooks[2].style.display = 'none';
    

        
        
        
    }else {
       
        currentSlideForword = 3
        currentSlideForwordBook = 3
        mySlides[1].style.display = 'block';
        mySlides[2].style.display = 'block';

        mySlidesBooks[1].style.display = 'block';
        mySlidesBooks[2].style.display = 'block';

        }
    
    

}



next.addEventListener('click', forword);

prev.addEventListener('click', backword);



nextBooks.addEventListener('click', forwordBooks);
prevBooks.addEventListener('click', backwordBooks);


if(currentSlideBackword == 0){
    prev.style.color = '#d1d2f5';
}

if(currentSlideBackwordBook == 0){
    prevBooks.style.color = '#d1d2f5';
}




function forword()   {
    
    
    


    if(currentSlideForword < mySlides.length){
        
        
        mySlides[currentSlideBackword].style.display = 'none';
        mySlides[currentSlideForword].style.display = 'inline-block';

        currentSlideForword += 1;
        currentSlideBackword += 1;
        prev.style.color = '#6a6fe0';


        if(currentSlideForword == mySlides.length){
        next.style.color = '#d1d2f5';
        }


        
    }else {
        next.style.color = '#d1d2f5';
    }
    


    

    

}


function backword(){

    if(currentSlideBackword > 0){
        currentSlideForword -= 1;
        currentSlideBackword -= 1;

        mySlides[currentSlideForword].style.display = 'none';
        mySlides[currentSlideBackword].style.display = 'inline-block';

        next.style.color = '#6a6fe0';

        if(currentSlideBackword <= 0){
            prev.style.color = '#d1d2f5';
        }
        
    }




    

}




function forwordBooks(){

    
    if(currentSlideForwordBook < mySlidesBooks.length){
        
        
        mySlidesBooks[currentSlideBackwordBook].style.display = 'none';
        mySlidesBooks[currentSlideForwordBook].style.display = 'inline-block';

        currentSlideForwordBook += 1;
        currentSlideBackwordBook += 1;
        prevBooks.style.color = '#6a6fe0';


        if(currentSlideForwordBook == mySlidesBooks.length){
        nextBooks.style.color = '#d1d2f5';
        }


        
    }else {
        nextBooks.style.color = '#d1d2f5';
    }

}


function backwordBooks(){
    if(currentSlideBackwordBook > 0){
        currentSlideForwordBook -= 1;
        currentSlideBackwordBook -= 1;

        mySlidesBooks[currentSlideForwordBook].style.display = 'none';
        mySlidesBooks[currentSlideBackwordBook].style.display = 'inline-block';

        nextBooks.style.color = '#6a6fe0';

        if(currentSlideBackwordBook <= 0){
            prevBooks.style.color = '#d1d2f5';
        }
        
    }

}