import * as React from 'react'

import Background from '../Background'
import Icon from '../Icon'
import Menu from '../Menu/Menu'
import MenuLine from '../MenuLine'

import countries, { Country } from './countries'
import {
  CountryOptions,
  FlagContainer,
  HiddenInput,
  MenuLineSubtitle,
  MenuLineTitle,
  PhoneIndicator,
} from './PhoneInput.style'

const SelectFlag: React.FunctionComponent<SelectFlagInterface> = ({
  value,
  onChange,
}) => {
  const Flag = value.flag as React.FunctionComponent
  const [open, setOpen] = React.useState<boolean>(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [filter, setFilter] = React.useState('')
  React.useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    } else {
      setFilter('')
    }
  }, [open])

  const isInFilter = React.useCallback(
    (country: Country) =>
      filter.length > 0 &&
      (country.name.toLocaleLowerCase().includes(filter.toLowerCase()) ||
        country.dialCode.includes(filter)),
    [filter]
  )

  const filteredCountries = React.useMemo(
    () =>
      [...countries].sort((countryA, countryB) => {
        const countryAInFilter = isInFilter(countryA)
        const countryBInFilter = isInFilter(countryB)
        if (countryAInFilter && countryBInFilter) {
          return countryA.name.localeCompare(countryB.name)
        }
        if (countryAInFilter) {
          return -1
        }
        if (countryBInFilter) {
          return 1
        }
        return countryA.name.localeCompare(countryB.name)
      }),
    [isInFilter]
  )

  return (
    <React.Fragment>
      <CountryOptions onClick={() => setOpen(true)}>
        <FlagContainer>
          {value.flag ? <Flag /> : value.iso2Code}
          <Icon icon="chevron-south" />
        </FlagContainer>
        <PhoneIndicator>{`+${value.dialCode}`}</PhoneIndicator>
      </CountryOptions>
      <HiddenInput
        tabIndex={-1} // do not allow to focus via tab
        ref={inputRef}
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <Menu
        open={open}
        onClose={() => setOpen(false)}
        scrollable
        fullScreenOnMobile
      >
        {(modal) =>
          modal.state !== 'closed' && (
            <Background backgroundColor="#fff">
              {filteredCountries.map((country) => (
                <MenuLine
                  key={country.name}
                  onClick={() => onChange(country)}
                  active={country === value}
                >
                  <MenuLineTitle>
                    {country.name}
                    <MenuLineSubtitle>+{country.dialCode}</MenuLineSubtitle>
                  </MenuLineTitle>
                </MenuLine>
              ))}
            </Background>
          )
        }
      </Menu>
    </React.Fragment>
  )
}

interface SelectFlagInterface {
  value: Country
  onChange: (value: Country) => void
}

export default SelectFlag
