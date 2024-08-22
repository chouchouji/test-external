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

```ts
import externalGlobals from "rollup-plugin-external-globals";

plugins: [
  ...,
  externalGlobals({
    vue: "Vue"
  })
],
```

# Third Step

add cdn in html file

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

