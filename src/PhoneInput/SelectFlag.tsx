import { ModalState } from '@delangle/use-modal'
import * as React from 'react'

import { Icon } from '../Icon'
import { Menu } from '../Menu'
import { MenuLine } from '../MenuLine'

import { countries, Country } from './countries'
import {
  CountryFilterInput,
  PhoneInputContainer,
  FlagButton,
  MenuLineSubtitle,
  MenuLineTitle,
  PhoneIndicator,
} from './PhoneInput.style'

export const SelectFlag: React.FunctionComponent<SelectFlagProps> = ({
  value,
  onChange,
  inputContainerRef,
}) => {
  const Flag = value.flag
  const filterInputRef = React.useRef<HTMLInputElement>(null)

  const [isOpen, setIsOpen] = React.useState(false)
  const [filter, setFilter] = React.useState('')

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
      <CountryFilterInput
        ref={filterInputRef}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <PhoneInputContainer>
        <FlagButton onClick={() => setIsOpen(true)}>
          {Flag ? <Flag /> : value.iso2Code}
          <Icon icon="chevron-south" />
        </FlagButton>
        <PhoneIndicator>{`+${value.dialCode}`}</PhoneIndicator>
      </PhoneInputContainer>
      <Menu
        open={isOpen}
        onClose={() => setIsOpen(false)}
        triggerRef={inputContainerRef}
        scrollable
      >
        {(modal) =>
          modal.state !== ModalState.closed && (
            <React.Fragment>
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
            </React.Fragment>
          )
        }
      </Menu>
    </React.Fragment>
  )
}

interface SelectFlagProps {
  value: Country
  onChange: (value: Country) => void
  inputContainerRef: React.RefObject<HTMLInputElement>
}
