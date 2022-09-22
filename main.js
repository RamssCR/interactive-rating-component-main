const parentDiv = document.querySelector('#parent') //used
const container1 = document.querySelector('.main-container') //used
const valueBtns = document.querySelectorAll('.grade-number') //used
const submit = document.querySelector('.submit') //used
let active1 = 'active' //used
let gradeValue //used

//submit value and creat the element once there's some value in 'gradeValue'
function submitValue(){
    //we remove the first child
    parentDiv.removeChild(container1)

    let element = `
    <div class="main-container2">
      <img src="./images/illustration-thank-you.svg" alt="thanks for rating us">

      <div class="rate-grade">
        <p class="result">You selected <span>${gradeValue}</span> out of 5</p>
      </div>

      <div class="message">
        <h2 class="message-title">Thank you!</h2>
        <p class="message-text">We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!</p>
      </div>
    </div>`

    //lastly, We insert the thank you state element
    parentDiv.insertAdjacentHTML('afterbegin', element)
}


//events

valueBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        valueBtns.forEach(btn =>{
            btn.classList.remove(active1)
        })
        btn.classList.toggle(active1)

        gradeValue = btn.innerText
    })
})

submit.addEventListener('click', ()=>{
    if (gradeValue) {
        submitValue();     
    }
})