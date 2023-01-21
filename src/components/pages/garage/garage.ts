import { container } from "../../constants/constantsDOM";
import { CARS, PAGE_ID } from "../../constants/constants";
import { ICar } from "../../interfaces/interfaces";
import getCarImage from "../../helpers/getCarImage";

export const garageRender = () => {
    container.innerHTML = '';
    container.append(createControlPannel())
    container.append(createGarageContainer(CARS))

}

const createControlPannel = () => {
    const controlPannel = document.createElement('div');
    controlPannel.classList.add('control-container')
    controlPannel.append(controlInputs('create'));
    controlPannel.append(controlInputs('update'));
    controlPannel.append(controlButtons('race', 'reset', 'create cars'));


    return controlPannel
}

const controlInputs = (value: string) => {
    const controlInput = document.createElement('div');
    controlInput.id = value;
    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.placeholder = `${value} name car`;
    const inputColor = document.createElement('input');
    inputColor.type = 'color';
    const inputButton = document.createElement('button');
    inputButton.textContent = `${value}`.toUpperCase();
    inputButton.classList.add("buttons");
    controlInput.append(inputText, inputColor, inputButton)
    return (controlInput)
}

const controlButtons = (...args: string[]) => {
    const buttons = document.createElement('div');
    args.forEach((el) => {
        const button = document.createElement('button');
        button.textContent = el.toUpperCase();
        button.classList.add(`buttons`);
        buttons.append(button)

        button.addEventListener('click', () => {
            console.log(button.textContent)
        })

    })
    return buttons
}

const createGarageContainer = (CARS: ICar[]) => {
    const garageContainer = document.createElement('div');
    const garageTitle = document.createElement('h2');
    garageTitle.textContent = 'Garage';
    const pageNumber = document.createElement('h2');
    pageNumber.textContent = `Page #${PAGE_ID}`;
    garageContainer.append(garageTitle, pageNumber)
    CARS.forEach((car) => garageContainer.append(carRender(car)))
    garageContainer.append(controlButtons('prev', 'next'))




    return garageContainer;
}

const carRender = (car: ICar) => {
    const carContainer = document.createElement('div');
    carContainer.classList.add('car-container');
    const carTitle = document.createElement('h3');
    carTitle.textContent = `${car.name}`;


    const carImg = document.createElement('div');
    carImg.classList.add('carImg')
    carImg.innerHTML = getCarImage(`${car.color}`)
    const finishFlagImg = document.createElement('img');
    finishFlagImg.src = './flag.png'

    carContainer.append(controlButtons('select', 'remove'), carTitle, controlButtons('A', 'B'), carImg, finishFlagImg);


    return carContainer
} 