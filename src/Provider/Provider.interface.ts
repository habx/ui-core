export default interface ThunderProviderProps {}

export type subscriptionCallback = (
  message: string,
  options: object
) => Promise<any> | void
