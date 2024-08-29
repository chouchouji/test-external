# test-external

This is a repo that lead you how to use `rollupOptions.external` in `vite`. Additionaly, your foramt is not `umd` or `iife`.

# First Step

set `external`

```ts
build: {
  rollupOptions: {
    external: ['vue'],
  }
}
```
# Second Step

install `rollup-plugin-external-globals`

```sh
pnpm add rollup-plugin-external-globals -D

npm i rollup-plugin-external-globals -D

yarn i rollup-plugin-external-globals -D
```

register it in production mode

```ts
import externalGlobals from "rollup-plugin-external-globals";

const isProduction = process.env.NODE_ENV === 'production'

plugins: [
  ...,
  isProduction && externalGlobals({
    vue: "Vue"
  })
],
```

_\* ***Don't recommend*** using this rollup plugin in ***development mode***, it may affect your normal work._

# Third Step

add cdn in html file

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

