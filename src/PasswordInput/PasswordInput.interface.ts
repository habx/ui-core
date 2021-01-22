import { TextInputProps } from '../TextInput'

export interface PasswordInputProps
  extends Omit<TextInputProps, 'value' | 'elementRight' | 'type'> {
  value?: string
}
