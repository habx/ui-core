export interface Dispatch<Message, Options, Return> {
  <R = Return>(message: Message, options?: Options): Promise<R> | undefined
}

export interface ProviderContextValue {
  confirmLabel: string
  cancelLabel: string
}

export interface ProviderProps {}

export interface Subscribe<Message, Options> {
  (callback: SubscriptionCallback<Message, Options>): () => void
}

export interface SubscriptionCallback<Message, Options> {
  (message: Message, options?: Options): any
}
