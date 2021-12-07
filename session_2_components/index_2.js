const app = document.getElementById('app');
const clocks = [];

const btnAddmore = document.createElement('button');
btnAddmore.classList.add('control');
btnAddmore.innerHTML = `Add`;
btnAddmore.addEventListener('click', ()=>{
    const clock = new Clock();
    clocks.push(clock);
    app.appendChild(clock.render());
})

app.appendChild(btnAddmore);