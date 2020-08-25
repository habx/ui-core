import * as React from 'react'

import { useSSRLayoutEffect } from '../_internal/ssr'
import useHasColoredBackground from '../_internal/useHasColoredBackground'
import Icon from '../Icon'
import withLabel from '../withLabel'

import countries, { Country } from './countries'
import { PhoneInputInnerProps } from './PhoneInput.interface'
import { PhoneInputContainer, MainInput } from './PhoneInput.style'
import SelectFlag from './SelectFlag'

const InnerPhoneInput = React.forwardRef<
  HTMLInputElement,
  PhoneInputInnerProps
>((props, ref) => {
  const {
    error = false,
    disabled = false,
    small = false,
    onChange,
    value: rawValue = '',
    ...rest
  } = props

  const [country, setCountry] = React.useState<Country>({
    name: 'France',
    iso2Code: 'fr',
    dialCode: '33',
    areaCodes: [],
    flag: () => <Icon colored icon="flag-france" />,
  })

  const PHONE_REGEXP = new RegExp(`\\+([0-9]{${country.dialCode.length}})(.*)`)

  const hasBackground = useHasColoredBackground()

  const value = React.useMemo(() => {
    const result = PHONE_REGEXP.exec(rawValue)

    if (result) {
      const phoneNumber = result[2]
      const cleanPhoneNumber =
        phoneNumber !== '' &&
        !phoneNumber.startsWith('0') &&
        country.dialCode === '33' // avoid regression for french numbers
          ? `0${phoneNumber}`
          : phoneNumber
      return cleanPhoneNumber
        .replace(new RegExp(`(.{${country.dialCode.length}})`), ' $1')
        .trim()
    }

    return rawValue
  }, [rawValue, country.dialCode, PHONE_REGEXP])

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value

      const cleanValue: string = newValue.replace(/[^0-9]/g, '')
      const phoneNumber =
        cleanValue.startsWith('0') &&
        cleanValue !== '0' &&
        country.dialCode === '33' // avoid regression for french numbers
          ? cleanValue.substring(1)
          : cleanValue

      e.target.value =
        phoneNumber.length === 0 ? '' : `+${country.dialCode}${phoneNumber}`

      if (onChange) {
        onChange(e)
      }
    },
    [country.dialCode, onChange]
  )

  useSSRLayoutEffect(() => {
    const result = PHONE_REGEXP.exec(rawValue)
    if (result) {
      const indicatorValue = result[1]
      const countryValue = countries.find(
        (el) => el.dialCode === indicatorValue
      )

      if (countryValue) {
        setCountry(countryValue)
      }
    }
  }, [])

  return (
    <PhoneInputContainer
      ref={ref}
      data-error={error}
      data-disabled={disabled}
      data-small={small}
      data-background={hasBackground}
    >
      <SelectFlag value={country} onChange={setCountry} />
      <MainInput
        ref={ref}
        {...rest}
        error={error}
        onChange={handleChange}
        value={value}
        disabled={disabled}
        data-small={small}
      />
    </PhoneInputContainer>
  )
})

export const PhoneInput = withLabel<HTMLInputElement>({
  orientation: 'vertical',
})<PhoneInputInnerProps>(InnerPhoneInput)
