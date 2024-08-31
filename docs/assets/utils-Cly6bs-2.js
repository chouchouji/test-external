import { i as isArray } from "./lodash-RJPfgWqI.js";
function isNotEmptyArray(val) {
  return isArray(val) && val.length > 0;
}
const clamp = (num, min, max) => Math.min(max, Math.max(min, num));
const camelize = (s) => s.replace(/-(\w)/g, (_, p) => p.toUpperCase());
export {
  camelize as a,
  clamp as c,
  isNotEmptyArray as i
};
