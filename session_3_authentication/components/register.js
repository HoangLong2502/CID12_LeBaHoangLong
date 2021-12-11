import { InputGroup } from "./input_group.js";

class Register{
    $container;
    $title;
    
    $formRegister;
    $inputGroupDisplayName;
    $inputGroupEmall;
    $inputGroupPassword;
    $inputGroupComfirmPassword;

    $feedbackMessage;
    $btnSubmit;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('center', 'h-screen', 'flex-col');
        this.$title = document.createElement('h3');
        this.$title.innerHTML = 'Register';

        this.$formRegister = document.createElement('form');
        this.$formRegister.addEventListener('submit', this.handlesubmit);

        this.$inputGroupEmall = new InputGroup('email', 'Email', 'email');
        this.$inputGroupDisplayName = new InputGroup('text', 'Display name', 'displayname');
        this.$inputGroupPassword = new InputGroup('password', 'Password', 'password');
        this.$inputGroupComfirmPassword = new InputGroup('password', 'Confirm Password', 'confirmpassword');

        this.$feedbackMessage = document.createElement('div');
        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Register';
    }

    handlesubmit = (evt)=>{
        evt.preventDefault();
        const email = this.$inputGroupEmall.getInputValue();
        const displayname = this.$inputGroupDisplayName.getInputValue();
        const password = this.$inputGroupPassword.getInputValue();
        const confirmPassword = this.$inputGroupComfirmPassword.getInputValue();

        this.$inputGroupEmall.setError(null);
        this.$inputGroupDisplayName.setError(null);
        this.$inputGroupPassword.setError(null);
        this.$inputGroupComfirmPassword.setError(null);

        if(!email){
            this.$inputGroupEmall.setError('Email cannot be empty');
        }
        if(!displayname){
            this.$inputGroupDisplayName.setError('Display name cannot be empty');
        }
        if(password.length < 6){
            this.$inputGroupPassword.setError('Password length must be greater or equal than 6');
        }
        if(confirmPassword != password){
            this.$inputGroupComfirmPassword.setError('error')
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=> {
                this.$feedbackMessage.innerHTML = 'Register successfully! Please check your inbox';
                firebase.auth().currentUser.sendEmailVerificaion();
                this.$inputGroupEmall.setInputValue('');
                this.$inputGroupDisplayName.setInputValue('');
                this.$inputGroupPassword.setInputValue('');
                this.$inputGroupComfirmPassword.setInputValue('');
            })
            .catch((error)=>{
                this.$feedbackMessage.innerHTML = error.toString();
                console.log(error);
            })
    }

    render(){
        this.$formRegister.appendChild(this.$inputGroupEmall.render());
        this.$formRegister.appendChild(this.$inputGroupDisplayName.render());
        this.$formRegister.appendChild(this.$inputGroupPassword.render());
        this.$formRegister.appendChild(this.$inputGroupComfirmPassword.render());
        this.$formRegister.appendChild(this.$btnSubmit);

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$feedbackMessage);
        this.$container.appendChild(this.$formRegister);
        return this.$container;

    }
}

export {Register}