export default interface ThunderProviderProps {}

export type subscriptionCallback<Message, Options> = (
  message: Message,
  options: Options
) => Promise<any> | void
