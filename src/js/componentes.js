import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('Creando etuqiueta H1');

    const h1 = document.createElement('H1');
    h1.innerText = `Hola jóven, ${nombre}`;
    document.body.append(h1);
}