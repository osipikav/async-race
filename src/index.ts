import { garageRender } from './components/pages/garage/garage';
import { winnersRender } from './components/pages/winners/winners';
import { container } from './components/constants/constantsDOM';
import './style.css'

function runApp() {
    const body = document.querySelector('body');
    const garageButton = pageSwitcherButton('garage');
    const winnersButton = pageSwitcherButton('winners');
    body?.append(garageButton, winnersButton, container);
    container.classList.add("container");
    garageRender()


};

const pageSwitcherButton = (textValue: string) => {
    const button = document.createElement('button');
    button.textContent = textValue.toUpperCase();
    button.id = textValue;
    button.classList.add("buttons");
    button.onclick = () => {
        if (textValue.toLowerCase() === "garage") {
            garageRender()
        } else winnersRender()
    }
    return button
}

runApp()