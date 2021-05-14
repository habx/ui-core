export interface Dispatch<Message, Options, Return> {
  (message: Message, options?: Options): Return | void
}

export interface ProviderContextValue {
  confirmLabel: string
  cancelLabel: string
}

export interface ProviderProps {}

export interface Subscribe<Message, Options, Return> {
  (callback: SubscriptionCallback<Message, Options, Return>): () => void
}

export interface SubscriptionCallback<Message, Options, Return> {
  (message: Message, options?: Options): Return
}
