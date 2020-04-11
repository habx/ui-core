export const omit = <Object extends object>(
  obj: Object,
  keys: (string | number)[]
): Object =>
  Object.entries(obj)
    .filter(([key]) => !keys.includes(key))
    .reduce(
      (objCtx, [key, val]) => Object.assign(objCtx, { [key]: val }),
      {}
    ) as Object

export const pick = (obj: object, keys: string[]): object =>
  Object.entries(obj)
    .filter(([key]) => keys.includes(key))
    .reduce((objCtx, [key, val]) => Object.assign(objCtx, { [key]: val }), {})

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

export const isObject = (value: object): value is object =>
  typeof value === 'object'

export const isNil = (value: any): value is null | undefined => value == null

export const has = (value: object, key: string | number): boolean =>
  isObject(value) && !isNil(value) && value.hasOwnProperty(key)

export const clamp = (value: number, min: number, max: number) => {
  let temp = value

  if (temp < min) {
    temp = min
  }

  if (temp > max) {
    temp = max
  }

  return temp
}

const extremumBy = <Value = any>(
  values: Value[],
  iteratee: (value: Value) => number,
  extremum: (...numbers: number[]) => number
): Value => {
  const bestPair = values.reduce(
    (best: [number, Value] | null, next: Value) => {
      const pair: [number, Value] = [iteratee(next), next]

      if (!best) {
        return pair
      } else if (extremum.apply(null, [best[0], pair[0]]) === best[0]) {
        return best
      } else {
        return pair
      }
    },
    null
  )

  if (!bestPair) {
    return (null as any) as Value
  }

  return bestPair[1]
}

export const minBy = <Value = any>(
  values: Value[],
  iteratee: (value: Value) => number
) => extremumBy(values, iteratee, Math.min)

export const maxBy = <Value = any>(
  values: Value[],
  iteratee: (value: Value) => number
) => extremumBy(values, iteratee, Math.max)

export const throttle = <Callback extends Function>(
  callback: Callback,
  wait: number,
  immediate: boolean = false
): Callback => {
  let timeout: number | null = null
  let initialCall = true

  const wrappedCallback = (...args: any[]) => {
    const callNow = immediate && initialCall
    const next = () => {
      callback(...args)
      timeout = null
    }

    if (callNow) {
      initialCall = false
      next()
    }

    if (!timeout) {
      timeout = setTimeout(next, wait)
    }
  }

  return (wrappedCallback as any) as Callback
}
