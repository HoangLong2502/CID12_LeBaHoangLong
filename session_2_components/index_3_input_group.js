class InputGroup{
    $container;
    $label;
    $input;
    $feedback;

    constructor(label, inputType){
        this.$container = document.createElement('div');
        this.$container.style.display = 'flex';
        this.$container.style.flexDirection = 'column';

        this.$label = document.createElement('label');
        this.$label.innerHTML = label;

        this.$input = document.createElement('input');
        this.$input.type = inputType;

        this.$feedback = document.createElement('span');
    }

    setSuccessMessage = (messsage) => {
        this.$feedback.style.color = 'green';
        this.$feedback.innerHTML = messsage;
        this.$input.style.borderColor = 'green';
    }

    setErrorMessage = (messsage) => {
        this.$feedback.style.color = 'red';
        this.$feedback.innerHTML = messsage;
        this.$input.style.borderColor = 'red';
    }

    render() {
        this.$container.appendChild(this.$label);
        this.$container.appendChild(this.$input);
        this.$container.appendChild(this.$feedback);
        return this.$container;
    }
}

export {InputGroup}