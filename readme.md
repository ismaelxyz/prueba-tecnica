## Welcome

Hola desarrollador, bienvenido a la prueba técnica de Netsocs. A continuación te presentamos una serie de ejercicios que deberás resolver. La prueba técnica consta de 1 ejercicio, el cual deberás resolver en nextjs en el front y go o node (con typescript) en el back. Si tienes alguna duda, no dudes en preguntar. Puedes hacer tus consultas por github issues. Para entregar la prueba, deberás hacer un pull request a este repositorio.

En la carpeta /data hay un csv con datos de ejemplo que podrás utilizar para los ejercicios.

Por favor antes de iniciar lea las [notas importantes](#notas-importantes)

## Ejercicio 1

En la carpeta /prueba-tecnica encontrarás un proyecto de Nextjs en blanco. Deberás crear una página estatica con los siguientes requisitos:

- [ ] La página deberá tener un título "Prueba técnica Netsocs"
- [ ] La página debera tener un contendor centrado de 85% de ancho y 85% de alto
- [ ] El diseño deberá ser amigable al usuario
- [ ] El contenedor debera tener dos pestañas que permita navegar entre ellas
- [ ] El contenedor deberá tener un footer con el texto "Netsocs 2024"
- [ ] El contendor deberá tener el logo de Netsocs en la parte superior izquierda. Debe usar este link y no incluir el logo en los assets del proyecto, sino cargarlo directamente desde la url https://netsocs.com/logo-netsocs-03.png, debe usar el tag <Image /> de Nextjs.
#### Pestaña 1
- [ ] Deberá mostrar una tabla con los datos del archivo de 10 en 10 registros y usando scroll infinito.
- [ ] La tabla debe tener un buscador que permita filtrar los datos por `First Name`, `Last Name` `City`, `Email` y `Subscription Date`. Un solo input que permita buscar en todos los campos. Es decir, si el usuario escribe "John" en el input, deberá mostrar todos los registros que tengan "John" en cualquiera de los campos mencionados, y si escribe 12/12/2020 deberá mostrar todos los registros que tengan esa fecha. La busqueda deberá ser en tiempo real, es decir, a medida que el usuario escribe, deberá ir mostrando los resultados. 
- [ ] No deberá recargar (el efecto de refresh o cuando presionas f5 por ejemplo) la página al buscar.
- [ ] Si el input está vacío, deberá mostrar todos los registros. 
- [ ] La busqueda no debe ser sensible a mayúsculas o minúsculas.
- [ ] En los headers de la tabla deberá haber un botón que permita ordenar los datos por `First Name` y `Subscription Date` de forma ascendente y descendente, es decir, si el usuario presiona el botón una vez, deberá ordenar los datos de forma ascendente, y si presiona nuevamente, deberá ordenar los datos de forma descendente. Ademas debe incluir un icono que indique el orden actual.
#### Pestaña 2
- [ ] Deberá mostrar un gráfico de lineas que muestre la cantidad de registros por fecha. El eje X deberá ser la fecha de subscripcion y el eje Y los paises. La idea es visualizar la cantidad de registros por fecha y por pais. El intervalo de las fechas deberá ser de 1 mes, es decir el eje X deberá mostrar la cantidad de registros por mes.
- [ ] Deberá mostrar un selector multiple que permita filtrar los datos por pais. Si el usuario selecciona un pais, deberá mostrar solo los registros de ese pais. Si el usuario selecciona mas de un pais, deberá mostrar los registros de esos paises. Si no selecciona ningun pais, deberá mostrar todos los registros.
---
- [ ] Desarrollar al menos 2 pruebas unitarias para el front.
- [ ] Desarrollar al menos 2 pruebas unitarias para el back.

## Notas importantes
- ![importante](https://img.shields.io/badge/-importante-red) En /prueba-tecnica hay un readme.md, al final debes completar la documentación y las mejoras que le harías a tu proyecto, considere que las mejoras que le haría a su proyecto son muy importantes para nosotros, así que no olvide completar esa sección.
- Los commits deben ser descriptivos y en inglés, utilizando la especificación de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
- El manejador de paquetes debe ser pnpm.
- Puedes utilizar cualquier libreria que desees.
- Considere que es importante el diseño y la usabilidad de la página.
- Considere que es importante la documentación del código.
- Considere que es importante la calidad del código.
- Para el css deberá usar tailwind.
- El frontend y el backend deben ser independientes, es decir, no pueden estar en el mismo proyecto o utilizar el `api` de nextjs.
- Debe usar nextjs rewrites (https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites) para que el frontend pueda ir hacia el backend, es decir el frontend no debe hacer peticiones directas al backend, sino que debe hacer peticiones a su propio dominio y el nextjs deberá redirigir las peticiones al backend.