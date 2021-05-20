# mi-libreria-coder

Ejemplo de librería personalizada en NPM


## pasos para incorporar una nueva libreria a NPM

1. Registrarse en [https://www.npmjs.com/](https://www.npmjs.com/)
2. Crear un proyecto NodeJS con NPM
3. (Opcionalmente) subir el codigo a un repositorio GIT.
4. Ejecutar en la consola el comando: `npm login`
5. Autenticarse con las credenciales
6. Escribir el comando: `npm publish`
7. IMPORTANTE: en cada actualizacion, aumentar la version en el package.json
8. Verificar que la propiedad "main" en el package.json haga referencia al index.js principal

## probar su libreria

1. Escribir en un proyecto NodeJS: `npm install mi-libreria`
2. Utilizarla con: `require('mi-libreria')`
3. Si todo se realizó correctamente, tendran disponible la funcionalidad desarrollada como libreria
