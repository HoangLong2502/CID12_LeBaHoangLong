function sayHello() {
    console.log('Hello world')
}

document
    .getElementById('btnClickMe')
    .addEventListener('click', function() {
        console.log('Hello World 2')
    });

document
    .getElementById('btnClickMe')
    .addEventListener('click', () => {
        console.log('Hello World 3')
    })


