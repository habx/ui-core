import { TextInputProps } from '../TextInput'

export interface PhoneInputProps
  extends Omit<TextInputProps, 'value' | 'elementLeft'> {
  value?: string
}
