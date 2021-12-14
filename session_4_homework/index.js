import { setScreen } from "./app.js";
import { Chat } from "./compoinents/chat.js";
import { Login } from "./compoinents/login.js";

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        const chat = new Chat();
        setScreen(chat);
    }
    else {
        const login = new Login();
        setScreen(login);
    }
});