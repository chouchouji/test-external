import { i as isArray } from "./lodash-RJPfgWqI.js";
function isNotEmptyArray(val) {
  return isArray(val) && val.length > 0;
}
const normalizeToArray = (value) => isArray(value) ? value : [value];
const clamp = (num, min, max) => Math.min(max, Math.max(min, num));
const bigCamelize = (s) => camelize(s).replace(s.charAt(0), s.charAt(0).toUpperCase());
const camelize = (s) => s.replace(/-(\w)/g, (_, p) => p.toUpperCase());
export {
  camelize as a,
  bigCamelize as b,
  clamp as c,
  isNotEmptyArray as i,
  normalizeToArray as n
};
