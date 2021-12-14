import { setScreen } from "../app.js";
import { InputGroup } from "./input_group.js";
import { Register } from "./register.js";

class Login{

    $container;
    $title;
    $form;
    $inputEmail;
    $inputPassword;
    $btnLogin;
    $btnSignup;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('container');
        
        this.$title = document.createElement('div');
        this.$title.classList.add('title');
        this.$title.innerHTML = 'Login to your account';

        this.$inputEmail = new InputGroup('email', 'Login(Email)', 'email');
        this.$inputPassword = new InputGroup('password', 'Password', 'password');

        this.$form = document.createElement('form');
        this.$form.addEventListener('submit', this.handlesubmit);

        this.$btnLogin = document.createElement('button');
        this.$btnLogin.classList.add('btnLogin');
        this.$btnLogin.type = 'submit';
        this.$btnLogin.innerHTML = 'Login';

        this.$btnSignup = document.createElement('button');
        this.$btnSignup.classList.add('btnSignup');
        this.$btnSignup.addEventListener('click', this.moveToRegister);
        this.$btnSignup.innerHTML = 'Create New';
    }

    moveToRegister = () =>{
        const register = new Register();
        setScreen(register);
    }

    handlesubmit = (evt) =>{
        evt.preventDfault();
        const email = this.$inputEmail.getInputValue();
        const password = this.$inputPassword.getInputValue();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userInfo)=>{
            console.log(userInfo);
        })
        .catch((err)=>{
            console.log(err);
        })

        this.$inputEmail.setError(null);
        this.$inputPassword.setError(null);

        
    }

    render(){
        this.$form.appendChild(this.$inputEmail.render());
        this.$form.appendChild(this.$inputPassword.render());
        this.$form.appendChild(this.$btnLogin);

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$form);
        this.$container.appendChild(this.$btnSignup)
        
        return this.$container;
    }
}

export { Login };