function handleCostKeyDown(event){
    // console.log(event.key);
    if(event.key === 'Enter'){
        calculateTotal();
    }
}

function calculateTotal(){
   const inputElement = document.querySelector('.js-cost-input');
   let cost =Number(inputElement.value); // value is use to get input value and number to get input as number
    if(cost < 40){
        cost += 10;
    }

    document.querySelector('.js-total-cost').innerHTML = `Total Cost: $${cost}`;
}

function subscribe(){
    const buttonElement = document.querySelector('.js-subscribe-button');

    // if (buttonElement.innerHTML === 'Subscribe') {
    //     buttonElement.innerHTML = 'Subscribed'
    // }else{
    //     buttonElement.innerHTML = 'Subscribe'
    // } innerText ignores extra spaces
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        //on click class is added to button
        buttonElement.classList.add('is-subscribed');
    }else{
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}