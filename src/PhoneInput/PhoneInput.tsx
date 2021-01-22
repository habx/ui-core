import * as React from 'react'

import { useSSRLayoutEffect } from '../_internal/ssr'
import { useMergedRef } from '../_internal/useMergedRef'
import { Icon } from '../Icon'
import { TextInput } from '../TextInput'

import { countries, Country } from './countries'
import { PhoneInputProps } from './PhoneInput.interface'
import { SelectFlag } from './SelectFlag'

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  (props, ref) => {
    const { onChange, value: rawValue = '', ...rest } = props

    const inputContainerRef = useMergedRef(ref)

    const [country, setCountry] = React.useState<Country>({
      name: 'France',
      iso2Code: 'fr',
      dialCode: '33',
      areaCodes: [],
      flag: () => <Icon colored icon="flag-france" />,
    })

    const PHONE_REGEXP = React.useMemo(
      () => new RegExp(`\\+([0-9]{${country.dialCode.length}})(.*)`),
      [country.dialCode.length]
    )

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
      <TextInput
        ref={ref}
        containerRef={inputContainerRef}
        {...rest}
        elementLeft={
          <SelectFlag
            value={country}
            onChange={setCountry}
            inputContainerRef={inputContainerRef}
          />
        }
        value={value}
        onChange={handleChange}
      />
    )
  }
)
