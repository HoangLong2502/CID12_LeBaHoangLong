import { New } from "./new.js";
import { Skin } from "./skin.js";
const Skin1 = new Skin("./img/ak asiimov.png", "Ak Asiimov", "34,3$", "Factory New", "#FF0000");
const Skin2 = new Skin("./img/skelaton.png", "Skeraton Knife", "1024$", "Star Track", "#FFD600");

const news = new New("./img/newimg.png", "NAVI WINNING MOMENT PGJ MAJOR STOCKHOLM 2021!! S1MPLE CRYING!! BOOMBL4 PROPOSED TO HIS GIRLFRIEND!!")

class Body{
    $container;
    $body;

    $game;
    $col1;
    $col2;
    $skin;
    $imgBackgroundSkin;
    $new;
    $auction;
    $displayGame;

    $chat;
    $title;
    $messageList;
    $composer;
    $mess;
    $btnSend;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('container');

        this.$body = document.createElement('div');
        this.$body.classList.add('body');

        this.$game = document.createElement('div');
        this.$game.classList.add('game');
        this.$col1 = document.createElement('div');
        this.$col1.classList.add('col1');
        this.$col2 = document.createElement('div');
        this.$col2.classList.add('col2');
        this.$skin = document.createElement('div');
        this.$skin.classList.add('skin');
        this.$imgBackgroundSkin =document.createElement('img');
        this.$imgBackgroundSkin.src = "./img/imgBackgroundSkin.png";
        this.$imgBackgroundSkin.classList.add('background_skin');
        this.$new = document.createElement('div');
        this.$new.classList.add('new');
        this.$auction = document.createElement('div');
        this.$auction.classList.add('auction');
        this.$auction.innerHTML = "auction";
        this.$displayGame = document.createElement('img');
        this.$displayGame.classList.add('display');
        this.$displayGame.src = "./img/newimg.png";

        this.$chat = document.createElement('div');
        this.$chat.classList.add('chat');
        this.$chat.innerHTML = "chat";
        this.$title = document.createElement('div');
        this.$messageList = document.createElement('div');
        this.$composer = document.createElement('div');
        this.$mess = document.createElement('input');
        this.$btnSend = document.createElement('button');
        this.$btnSend.innerHTML = 'Send';
        
    }

    render(){
        this.$skin.appendChild(Skin1.render());
        this.$skin.appendChild(Skin2.render());
        this.$skin.appendChild(this.$imgBackgroundSkin);

        this.$new.appendChild(news.render());

        this.$col1.appendChild(this.$skin);
        this.$col1.appendChild(this.$new);

        this.$col2.appendChild(this.$auction);
        this.$col2.appendChild(this.$displayGame);

        this.$game.appendChild(this.$col1);
        this.$game.appendChild(this.$col2);

        this.$chat.appendChild(this.$title);
        this.$chat.appendChild(this.$messageList);
        this.$chat.appendChild(this.$composer);

        this.$composer.appendChild(this.$mess);
        this.$composer.appendChild(this.$btnSend);

        this.$body.appendChild(this.$game);
        this.$body.appendChild(this.$chat);

        this.$container.appendChild(this.$body);
        return this.$container;
    }
}

export { Body };