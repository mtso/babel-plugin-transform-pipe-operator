# babel-plugin-transform-pipe-operator

Adds a pipe operator to call pure, synchronous transformer functions within JSX expressions.

## Example

A pipe inside a JSX expression,

```js
const Shout = ({ name }) => (
  <div>YO, { name | toUpperCase }!</div>
);
```

Becomes a function call in the result:

```js
const Shout = ({ name }) => (
  <div>YO, { toUpperCase(name) }!</div>
);
```

To pass a parameter, implement the transformer as a factory.

```js
const toFixed = (places) => (value) => value.toFixed(places);

const Cell = ({ value }) => (
  <td>{ value | toFixed(2) }</td>
);
```

```js
const toFixed = (places) => (value) => value.toFixed(places);

const Cell = ({ value }) => (
  <td>{ toFixed(2)(value) }</td>
);
```
