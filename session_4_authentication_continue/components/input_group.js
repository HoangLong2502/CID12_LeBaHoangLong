class InputGroup{
    $container;
    $input;
    $label;
    $errorMsg;

    constructor(type, label, name){
        this.$container = document.createElement('div');
        this.$container.classList.add('input-group');

        this.$input = document.createElement('input');
        this.$input.classList.add('input')
        this.$input.type = type;
        this.$input.name = name;

        this.$label = document.createElement('label');
        this.$label.classList.add('label')
        this.$label.innerHTML = label;

        this.$errorMsg = document.createElement('div');
        this.$errorMsg.classList.add('error-msg');
    }

    getInputValue(){
        return this.$input.value;
    }

    setInputValue(newValue){
        this.$input.value = newValue;
    }

    setError(message){
        if(message) {
            this.$errorMsg.innerHTML = message;
            this.$container.classList.add('has-error');
        }
        else {
            this.$errorMsg.innerHTML = '';
            this.$container.classList.remove('has-error');
        }
    }

    render(){
        this.$label.appendChild(this.$input);
        this.$container.appendChild(this.$label);
        this.$container.appendChild(this.$errorMsg);
        return this.$container;
    }
}

export { InputGroup };