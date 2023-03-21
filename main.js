const button = document.querySelector('button')
const output = document.querySelector('#output')

let quot = [
    'We cannot solve problems with the kind of thinking we employed when we came up with them. — Albert Einstein', 
    'Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi', 
    'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain',
    'When you change your thoughts, remember to also change your world.—Norman Vincent Peale'
]

/* let counter = 0;

button.addEventListener('click', function(){
    if (counter < quot.length) {
        output.innerHTML = quot[counter]
        counter++
    }
    
}) */



// with random quotes 

/* button.addEventListener('click', ()=>{
    let randomQuotes = quot[Math.floor(Math.random()*quot.length)]; 
    output.innerHTML = randomQuotes
})

 */

// another method

let counter = 0;

button.addEventListener('click', ()=>{
    if(counter >= quot.length - 1){
        counter = 0;
    } else {
        counter++;
    }
    output.innerHTML = quot[counter]
})