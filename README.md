#  <center> 📰 React News Page 📰</center> 

 ## 📑 Indice 

 - [Sobre el proyecto](#sobre-el-proyecto)

    - [Instalación y despliegue](#instalacion-y-despliegue)

    - [Tecnologías utilizadas](#tecnologias-utilizadas)
    
- [Requerimientos](#requerimientos)

- [Estructura de la página](#estructura-de-la-pagina)

- [Documentacion de React](#documentacion-de-react)

- [Rutas](#rutas)

- [Retos presentados](#retos-presentados)

- [Agradecimientos](#agradecimientos)

- [Futura implementaciones](#futuras-implementaciones)

- [Autor](#autor)

<br>

# Sobre el proyecto 🙇‍♀️

##  Instalación y despliegue 🤖

<br>

Primero instalamos react con la carpeta que contendrá el proyecto

```
npx create-react-app nombre-aplicacion	 
```

<br>

Una buena idea es instalar esta extensión para acceder a los snippets de React
```
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
```

<br>

La siguiente herramienta de desarrollador nos permite ver las jerarquías de los componentes de React

```
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadoplj
bjfkapdkoienihi?hl=es
```

<br>

Deberemos installar el siguiente paquete para poder crear rutas en nuestros componentes

```
$ npm install react-router-dom@6
```

<br>

Instalamos el paquete sass para aplicar reglas anidadas y funciones con variables entre otras cosas

```
$ npm install sass

```
<br>

## Tecnologías utilizadas ⛏️

- HTML
- CSS
- Sass
- Javascript
- React
- React-GlobalContext
- React-Router

<br>

# Requerimientos 🦂

* Un mini-proyecto de React para practicar todos los elementos básicos de React ya vistos.
* Implementar una "web de noticias"
* Uso de [NYT News API](https://developer.nytimes.com/apis).
* Uso del router React
* Utilizar componentes anidados (cabecera, home, pie de página, formulario, lista de noticias).
* Utilizar React Context
* Utilizar SASS

<br><br>

## Estructura de la página 🏗️

Cada ruta construye una página con tres componentes: La cabecera y el pie de página son comunes a
todas ellas. La Cabecera tiene tres botones, con `<Link />`, para acceder a las
tres rutas.

<br><br>

# Rutas 🚊



**Home** `/`
* Se compone de un Hero
* Un navbar
* Una imagen central
* Un footer

<br>

![Home screenshot](./src/Assets/Home.png)

<br>

**Form** `/form`
* Form 
* Input título
* Input autor
* Input localización
* Input texto

El form guarda los datos introducidos en el LocalStorage

<br>

![Home screenshot](./src/Assets/Form.png)

<br>

**News** `/list`
* Grid
* Flexbox
* API NYT

Accedemos a la API de NYT para pintar la información que deseamos (titular,imagen,autor...)

![Home screenshot](./src/Assets/News.png)

<br>

# Documentación de React 👓

https://es.reactjs.org/docs/getting-started.html

<br>

# Retos presentados 💢

El mayor reto fue detectar por qué, al mapear el array de objetos obtenido de la API, no siempre mostraba las noticias deseadas. Lo que ocurría era que habían objetos que no tenían imagen y eso hacía que el resto no se pintara. Una vez descubierto el problema se tuvo que programar una condición para que, al detectar un objeto sin imagen, la declarara null.


<br>

# Agradecimientos 🤝

Gracias a Mike por hacerme una persona más 'stylish'.
Gracias a Xavi por hacerme una persona más lógica.
Gracias a Rebeca por ayudarme a 'reactionar'.
Gracias a David por hacerme una persona más 'responsiva'.
Gracias a Vanesa por llenarme el LocalStorage.


Agradecimientos a Sofía, Ger e Iván por su inestimable ayuda para sacar adelante el proyecto. 


<br>

# Futuras implementaciones 🚀


- Añadir más estados


<br>

# Autor 🐧

Germán Molero

- https://github.com/Molerog