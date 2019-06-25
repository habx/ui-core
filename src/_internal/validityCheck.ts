export const assert = (condition: boolean, warningMessage: string) => {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    logWarn(warningMessage)
  }
}

export const logWarn = (warningMessage: string) => {
  // eslint-disable-next-line no-console
  console.warn(warningMessage)
}
