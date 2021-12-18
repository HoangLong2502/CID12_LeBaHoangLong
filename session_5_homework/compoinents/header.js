class Header{
    $container;

    $header;
    $Logo;
    $nav;
    $navHome;
    $navFAQ;
    $navSupport;
    $navMarket;
    $inforUser;
    $imgUser;
    $nameUser;
    $btnLogout;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('container');

        this.$header = document.createElement('div');
        this.$header.classList.add('header');

        this.$Logo = document.createElement('img');
        this.$Logo.classList.add('logo');
        this.$Logo.src = "./img/image 9.png"

        this.$nav = document.createElement('div');
        this.$nav.classList.add('nav');
        this.$navHome = document.createElement('div');
        this.$navHome.innerHTML = 'Home';
        this.$navFAQ = document.createElement('div');
        this.$navFAQ.innerHTML = 'FAQ';
        this.$navSupport = document.createElement('div');
        this.$navSupport.innerHTML = 'Support';
        this.$navMarket = document.createElement('div');
        this.$navMarket.innerHTML = 'Market';

        this.$inforUser = document.createElement('div');
        this.$inforUser.classList.add('infor_user');
        this.$imgUser = document.createElement('img');
        this.$imgUser.src = "./img/img_user.jpg"
        this.$nameUser = document.createElement('span');
        this.$nameUser.innerHTML = 'LongHoang';

        this.$btnLogout = document.createElement('button');
        this.$btnLogout.classList.add('btn_logout');
        this.$btnLogout.innerHTML = 'Log Out';
    }

    render(){
        this.$nav.appendChild(this.$navHome);
        this.$nav.appendChild(this.$navFAQ);
        this.$nav.appendChild(this.$navSupport);
        this.$nav.appendChild(this.$navMarket);

        this.$inforUser.appendChild(this.$imgUser);
        this.$inforUser.appendChild(this.$nameUser);

        this.$header.appendChild(this.$Logo);
        this.$header.appendChild(this.$nav);
        this.$header.appendChild(this.$inforUser);
        this.$header.appendChild(this.$btnLogout);

        this.$container.appendChild(this.$header);
        return this.$container;
    }

}

export { Header }