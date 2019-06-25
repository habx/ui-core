export const omit = <Object extends object>(
  obj: Object,
  keys: (string | number)[]
): Object =>
  Object.entries(obj)
    .filter(([key]) => !keys.includes(key))
    .reduce(
      (obj, [key, val]) => Object.assign(obj, { [key]: val }),
      {}
    ) as Object

export const pick = (obj: object, keys: string[]): object =>
  Object.entries(obj)
    .filter(([key]) => keys.includes(key))
    .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {})

export const mapValues = (
  obj: object,
  iteratee: (value: any, key: string, obj: unknown) => unknown
) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: iteratee(value, key, obj),
    }),
    {}
  )

export const isFunction = (value: any): value is (...args: any[]) => any =>
  value &&
  ['[object Function]', '[object AsyncFunction]'].includes(
    {}.toString.call(value)
  )

export const isString = (value?: any): value is string =>
  (value || value === '') &&
  Object.prototype.toString.call(value) === '[object String]'

export const isBoolean = (value: any): value is boolean =>
  value === true ||
  value === false ||
  Object.prototype.toString.call(value) === '[object Boolean]'

export const isObject = (value: object): value is object =>
  typeof value === 'object'

export const isNil = (value: any): value is null | undefined => value == null

export const has = (value: object, key): boolean =>
  isObject(value) && !isNil(value) && value.hasOwnProperty(key)
