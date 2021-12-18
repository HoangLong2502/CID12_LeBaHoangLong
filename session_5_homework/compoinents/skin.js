class Skin{
    $container;
    $boximg;
    $imgSkin;
    $title;
    $name;
    $price;
    $detail;
    $type;
    $color;

    constructor(img, name, price, type, color){
        this.$container = document.createElement('div');
        this.$container.classList.add('skin_container');
        this.$boximg = document.createElement('div');
        this.$boximg.classList.add('skin_box_img');
        this.$imgSkin = document.createElement('img');
        this.$imgSkin.classList.add('skin_img');
        this.$imgSkin.src = img;

        this.$title = document.createElement('div');
        this.$title.classList.add('skin_title');
        this.$name = document.createElement('span');
        this.$name.innerHTML = name;
        this.$price = document.createElement('span');
        this.$price.innerHTML = price;
        this.$detail = document.createElement('div');
        this.$detail.classList.add('skin_title');
        this.$type = document.createElement('span');
        this.$type.innerHTML = type;
        this.$color = document.createElement('div');
        this.$color.style.backgroundColor = color;
    }

    render(){
        this.$boximg.appendChild(this.$imgSkin)

        this.$title.appendChild(this.$name);
        this.$title.appendChild(this.$price);
        
        this.$detail.appendChild(this.$type);
        this.$detail.appendChild(this.$color);

        this.$container.appendChild(this.$boximg);
        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$detail);
        return this.$container;
    }
}

export { Skin };