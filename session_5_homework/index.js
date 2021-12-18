import { Header } from "./compoinents/header.js";
import { Body } from "./compoinents/body.js";

const app = document.getElementById('app');
const header = new Header();
const body = new Body();

app.appendChild(header.render());
app.appendChild(body.render());