export interface ProviderContextValue {
  confirmLabel: string
  cancelLabel: string
}

export interface ProviderProps {}

export type subscriptionCallback<Message, Options> = (
  message: Message,
  options: Options
) => Promise<any> | void
