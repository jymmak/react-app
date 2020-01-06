import React from 'react';
import ReactDOM from 'react-dom';

const hello = <h1>Hello Platzi</h1>;
const element = React.createElement('h1', {}, 'Soy su hijo');
const link = React.createElement('a', { href: 'https://platzi.com/clases/1548-react/18694-jsx2383/' }, 'Hola soy un link');
const newElement = React.createElement('h1', {}, `Hola soy Karina`);

const name = `Karina`;
const title = React.createElement('h1', {}, `Mi nombre es ${name}`);

const jsx = <h1>Hello, {name} </h1>;

//operadores
const suma = <p>El resultado es: {3 + 5} </p>;


const rest = () => 5 - 2;
const resta = <p>El resultado es: {rest()} </p>;

//contenedor
const contenedor = (
    <div>
        <h1> Hola, soy Jymma Karina</h1>
        <p>Soy Front-End</p>
    </div>
);

const contTwo = React.createElement(

    'div',

    {},
    React.createElement('h1',{}, 'Hola soy Jymma'),
    React.createElement('p',{}, 'Soy front')

)

//false, null, undefined

const expresion = <h1>Hello, {false} </h1>;




const container = document.getElementById('app');

ReactDOM.render(expresion, container);