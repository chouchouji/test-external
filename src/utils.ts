import { isArray } from 'lodash-es'

export function isNotEmptyArray(val: any[]) {
    return isArray(val) && val.length > 0
}