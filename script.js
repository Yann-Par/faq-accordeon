


document.addEventListener("DOMContentLoaded", function(){



    
    const answer = document.querySelectorAll('.answer');
    
    const askOne = document.getElementById('askOne');
    const answerOne = document.getElementById('answerOne');

    const askTwo = document.getElementById('askTwo');
    const answerTwo = document.getElementById('answerTwo');

    const askThree = document.getElementById('askThree');
    const answerThree = document.getElementById('answerThree');

    const askFour = document.getElementById('askFour');
    const answerFour = document.getElementById('answerFour');

    const askFive = document.getElementById('askFive');
    const answerFive = document.getElementById('answerFive');



    const arrow = document.querySelectorAll('.arrow');
    const arrowOne = document.querySelector('.arrowOne');
    const arrowTwo = document.querySelector('.arrowTwo');
    const arrowThree = document.querySelector('.arrowThree');
    const arrowFour = document.querySelector('.arrowFour');
    const arrowFive = document.querySelector('.arrowFive');


    

    askOne.addEventListener('click' , function(){
        clear();
        
        answerOne.classList.add('active');
     

        arrowOne.style.transform="rotate(180deg)"
        arrowOne.style.transition = " all 0.5s ease";
        
    })


    askTwo.addEventListener('click' , function(){
        clear();
        answerTwo.classList.add('active')

        arrowTwo.style.transform="rotate(180deg)"
        arrowTwo.style.transition = " all 0.5s ease";
    });





    askThree.addEventListener('click' , function(){
        clear();
        answerThree.classList.add('active')

        arrowThree.style.transform="rotate(180deg)"
        arrowThree.style.transition = " all 0.5s ease";
    });

    askFour.addEventListener('click' , function(){
        clear();
        answerFour.classList.add('active')

        arrowFour.style.transform="rotate(180deg)"
        arrowFour.style.transition = " all 0.5s ease";
    });

    askFive.addEventListener('click' , function(){
        clear();
        answerFive.classList.add('active')

        arrowFive.style.transform="rotate(180deg)"
        arrowFive.style.transition = " all 0.5s ease";
    });






    function clear()
    {
        answer.forEach((el) => {
            el.classList.remove('active');
            
            el.style.transition = " all 0.5s ease";
        })

        arrow.forEach((el) => {
            el.style.transform="rotate(720deg)";
        })
    }


    
})


    


