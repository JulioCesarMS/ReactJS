
# Especificaciones 

Está aplicación se utilizó:
- [Node JS versión 18.6.0 LTS](https://nodejs.org/en)
- [firebase](https://firebase.google.com/?gad=1&gclid=CjwKCAjwjYKjBhB5EiwAiFdSfh65vUksPisq9oLBDlbibOaJ0eoD2Oql_Ve2PMx6Ad028jzM3gSZmRoCwVwQAvD_BwE&gclsrc=aw.ds&hl=es-419)




# Proyecto 

En el proyecto se derralla una aplicación para un restaurante de comida, con una sección de productos, los cuales se pueden seleccionar y pasar a carrito de compras, en donde se puede seleccionar la cantidad de platillos, además muestra el monto total y cuando la compra supera los 500 el envío es grátis.


El proyecto está estructurado de la siguiente manera:
 
     
    .
    ├── public 
    |   ├── images       # contiene imagenes de productos (cargadas en firestorage)
    |       └── fig001.jpg   # 
    ├── src  
    |   ├── components    # sección de componentes de la aplicación
    |   |   ├── About.js    # 'Acerca de' de la página    
    |   |   ├── Cart.js     # Carrito de compras
    |   |   ├── Context.js  # contexto de la aplicación
    |   |   ├── Data.js     # Información de productos
    |   |   ├── Detail.js   # detalle de productos
    |   |   ├── Home.js     # página principal
    |   |   ├── Navbar.js   # barra de menú
    |   |   ├── Paymant.js  # pago
    |   |   ├── Product.js  # producto
    |   |   └── Products.js # productos
    |   ├── img  # contine images (barra, y principales)
    |   |   ├── about.jpg
    |   |   ├── logo.jpg
    |   |   └── main.jpg
    |   └── Segalmex2.jpg  
    ├── App.css  
    ├── App.js
    ├── index.css
    ├── index.js
    ├── serviceWorker.js
    └──  Readme.md           # descripción del proyecto


# Home

Contine la imagen principal del restaurante, y en la parte inferior la seción de productos.


# Acerca de

Esta sección contine información de la empresa, no está concluída, pero debe contener información sobre el origen del restaurante, y lo que ofrece.

# Productos

Esta sección contiene los productos: descripción, precio, y agregar al carrito de compras. Una ves que se agrega un producto al carrito, en la parte superior del menú se despliega los productos en el carrito con el monto total y la opción de comprar(pagar).


# Carrito
Esta sección muestra los productos actuales en el carrito el monto total: por el producto y la entrega, y un opción para pagar.


Las imagenes de los productos se encuentran almacenadas en firebase.


# React JavaScript
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Comandos útiles

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

### `npm run build` deploy the app
