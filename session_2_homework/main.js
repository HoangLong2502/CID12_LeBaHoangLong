class Faq {
    $container;
    $question;
    $answer;
    $btn;

    constructor(question, answer){
        this.$container = document.createElement('div');
        this.$container.classList.add('faq');

        this.$question = document.createElement('button');
        this.$question.classList.add('faq__question');
        let question_text = document.createElement('div');
            question_text.classList.add('question__text');
            question_text.innerText = question;
        this.$question.appendChild(question_text);
        this.$question.addEventListener('click', this.expand);

        this.$btn = document.createElement('div');
        this.$btn.classList.add('faq__btn$btn');
        this.$btn.innerHTML = '+';
        this.$question.appendChild(this.$btn);

        this.$answer = document.createElement('div');
        this.$answer.classList.add('faq__answer');
        let answer_text = document.createElement('div');
            answer_text.classList.add('answer__text');
            answer_text.innerText = answer;
        this.$answer.appendChild(answer_text);
 
        this.$answer.style.display = "none";
    };

    expand = () =>{
        if (this.$answer.style.display == "none"){
            this.$answer.style.display = "block"
            this.$btn.innerHTML = "-";
        }
        else {
            this.$answer.style.display = "none"
            this.$btn.innerHTML = "+";
        }
    };


    render(){
        this.$container.appendChild(this.$question);
        this.$container.appendChild(this.$answer);
        return this.$container;
    }
}