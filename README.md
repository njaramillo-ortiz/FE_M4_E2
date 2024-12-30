# FrontEnd - Módulo 4, Ejercicio 2

## Descripción proyecto

Este proyecto consiste en una página web para un hospital ficticio, incluyendo sus diferentes servicios y personal médico.
Se continúa con el proyecto iniciado en el Ejercicio 1 de este módulo.

## Manejo del DOM Virtual en ReactJS

Se utiliza useState para almacenar y actualizar el estado de múltiples aspectos del proyecto (ej: las listas de doctores y servicios, los parámetros del formulario, etc).

## Creación y Uso de Referencias en React

En `AppointmentForm` se utilizan referencias tanto para enfocar el primer input del formulario, asi como también para limpiar el estado de los parámetros ingresados luego de terminar el registro.

## Uso de Fragmentos y Contexto en ReactJS

Se utiliza la sintaxis `<>` en desmedro de los fragmentos para la optimización de componentes anidados, en lugar de otros componentes más pesados como `<div>`.
Además, se utiliza `useContext` para definir datos fijos (en este caso, el nombre de usuario) y que componentes anidados los puedan consumir (en este caso, `Navbar`) sin tener que pasar dicha información como props.

## Verificación de Tipos con PropTypes

Se utilizan propTypes en los componentes `DoctorCard` y `ServicesList`.

## Uso de Componentes de Orden Superior y Portales

Se utiliza un portal para desplegar el modal de confirmación de reserva en `AppointmentForm`.

## Instrucciones de uso

Requiere Node.js y npm instalados para su uso. Ejecutar el comando `npm run dev` desde la raíz del proyecto para ejecutarlo.