class New{
    $container;
    $newIMG;
    $newTitle;

    constructor(img, title){
        this.$container = document.createElement('div');
        this.$container.classList.add('new_container')
        this.$newIMG = document.createElement('img');
        this.$newIMG.src = img;
        this.$newTitle = document.createElement('div');
        this.$newTitle.innerHTML = title;
    }

    render(){
        this.$container.appendChild(this.$newIMG);
        this.$container.appendChild(this.$newTitle);
        return this.$container;
    }
}

export { New };