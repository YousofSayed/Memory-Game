let time = document.getElementById('time'),
    score = document.getElementById('score'),
    boxs = document.querySelectorAll('.box');


// let cnfrm2 = confirm('WoW 😒')
function cnfrm(text) {
    let cnfrm = confirm(text);
    if(cnfrm || !cnfrm){window.location.reload()}
}
// Start Time
let interval = setInterval(() => {
    +time.textContent--
    if (+time.textContent < 0) {
        clearInterval(interval)
        cnfrm('You Lost Fool😊❤')

    }
    if (scr >= 30) { clearInterval(interval); cnfrm('WoW😒 , You Win!') }
}, 1000)
// End Time 

let idx = 0;


//Random Num For Oreder Flex
let isOrderd = false;
window.addEventListener('load', () => {
    boxs.forEach((box) => {
        box.style.order = `${Math.trunc(Math.random() * 12)}`;
    });

})
setTimeout(()=>{
    boxs.forEach((box) => {
        box.style.transform = `rotateY(-180deg)`
    }); 
},500)

setTimeout(()=>{
    boxs.forEach((box) => {
        box.style.transform = `rotateY(0deg)`
    }); 
},1400)

let res1,
    scr = 0;
    //To Handle Boxs To Play 👇🏼
function handlingBoxs(event) {
    if (event.currentTarget.getAttribute('trueorfalse') === 'true') return false
    idx++
    event.currentTarget.setAttribute('trueorfalse', 'true');
    event.currentTarget.style.transform = `rotateY(-180deg)`;
    if (idx == 1) {
        res1 = event.currentTarget.id;
    }
    if (idx == 2) {
        console.log(event.currentTarget.id);
        if (event.currentTarget.id === res1) {
            score.textContent = `Score : ${scr += 5}`
        } else {
            let res2 = event.currentTarget;
            setTimeout(() => {
                boxs.forEach((box) => {
                    res2.style.transform = `rotateY(-0deg)`;
                    //To Return It For Game Again
                    res2.setAttribute('trueorfalse','false')
                    if (box.id == res1) {
                        box.style.transform = `rotateY(-0deg)`;
                    //To Return It For Game Again
                        box.setAttribute('trueorfalse', 'false')
                    }

                })

            }, 500);
        }
        //To Re Same action 👇🏼
        idx = 0;
        // boxs.forEach((box) => { box.setAttribute('trueorfalse', 'false'); })
    }
    // if(idx >= 2)
}
boxs.forEach((box) => {
    box.setAttribute('trueorfalse', 'false')
    box.addEventListener('click', (event) => {
        handlingBoxs(event, boxs)
    })
})