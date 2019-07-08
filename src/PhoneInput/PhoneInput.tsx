import * as React from 'react'

import { useSSRLayoutEffect } from '../_internal/ssr'
import Icon from '../Icon'
import { Input } from '../TextInput/TextInput.style'
import useTheme from '../useTheme'

import PhoneInputProps from './PhoneInput.interface'
import {
  PhoneInputContainer,
  PhoneIndicator,
  MainInput,
  CountryOptions,
  FlagContainer,
} from './PhoneInput.style'

const COUNTRIES = [
  {
    code: 'fr',
    indicator: 33,
    flag: () => <Icon colored icon="flag-france" />,
  },
]

const PHONE_REGEXP = /\+([0-9]{2})(.*)/

const PhoneInput: React.FunctionComponent<PhoneInputProps> = ({
  error = false,
  disabled = false,
  small = false,
  onChange,
  value: rawValue = '',
  ...props
}) => {
  const [country, setCountry] = React.useState('fr')
  const theme = useTheme()

  const { indicator, flag: Flag } = React.useMemo(
    () => COUNTRIES.find(({ code }) => code === country),
    [country]
  )

  const value = React.useMemo(() => {
    if (rawValue.match(PHONE_REGEXP)) {
      const result = PHONE_REGEXP.exec(rawValue)

      const phoneNumber = result[2]
      const cleanPhoneNumber =
        phoneNumber !== '' && !phoneNumber.startsWith('0')
          ? `0${phoneNumber}`
          : phoneNumber
      return cleanPhoneNumber.replace(/(.{2})/g, ' $1').trim()
    }

    return rawValue
  }, [rawValue])

  const handleChange = React.useCallback(
    e => {
      const newValue = e.target.value

      const cleanValue = newValue.replace(/[^0-9]/g, '')
      const phoneNumber =
        cleanValue.startsWith('0') && cleanValue !== '0'
          ? cleanValue.substring(1)
          : cleanValue

      e.target.value = `+${indicator}${phoneNumber}`

      onChange(e)
    },
    [indicator, onChange]
  )

  useSSRLayoutEffect(() => {
    if (rawValue.match(PHONE_REGEXP)) {
      const result = PHONE_REGEXP.exec(rawValue)
      const indicator = parseInt(result[1], 10)
      const country = COUNTRIES.find(el => el.indicator === indicator)

      if (country) {
        setCountry(country.code)
      }
    }
  }, [])

  return (
    <PhoneInputContainer
      data-error={error}
      data-disabled={disabled}
      data-small={small}
      data-background={theme.backgroundColor !== '#FFFFFF'}
      {...props}
    >
      <CountryOptions>
        <FlagContainer>
          <Flag />
        </FlagContainer>
        <PhoneIndicator>{`+${indicator}`}</PhoneIndicator>
      </CountryOptions>
      <MainInput
        {...props}
        onChange={handleChange}
        value={value}
        disabled={disabled}
      />
    </PhoneInputContainer>
  )
}

export default PhoneInput
