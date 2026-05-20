# Café de Especialidad

Un sistema de cobro para un café de especialidad que calcula el total por persona, con descuento para estudiantes de ORT.

---

## Consigna

Completar el programa para que haga lo siguiente:

1. Preguntar el total de la cuenta.
2. Preguntar si los clientes son estudiantes de ORT (`si` / `no`).
   - Si la respuesta es exactamente `si` (minúscula), aplicar un **10% de descuento**.
3. Preguntar entre cuántas personas se divide la cuenta.
4. Mostrar el total por persona con el siguiente formato:

```
Total por persona: $<monto>
```

### Ejemplo

```
Total de la cuenta: 1000
¿Son estudiantes de ORT? si/no: si
Dividir la cuenta entre: 2
Total por persona: $450
```

**IMPORTANTE:** Los valores ingresados son strings. Para hacer cuentas,
  hay que convertirlos a números. Esa es la gracia del ejercicio...

---

## Consigna manija

Pendiente...

---

## ¿Qué hay que editar?

El único archivo que tienen que modificar es:

```
src/index.ts
```

El archivo `src/lib/consola.ts` ya está completo y no hace falta tocarlo — es un helper que provee la función `preguntar()` que usarán en `index.ts`.

---

## Primeros pasos

Antes de poder correr el programa, hay que instalar las dependencias del proyecto. Esto se hace **una sola vez** con:

```bash
npm install
```

Este comando descarga todo lo necesario para que el proyecto funcione. Si no lo corren primero, el programa no va a andar.

---

## Cómo correr el programa

```bash
npm run start
```

---

## Tests

El proyecto incluye tests automáticos que se usan para la corrección:

```bash
npm test
```

No hace falta entenderlos ni modificarlos. Son para verificar que el programa funciona correctamente.
