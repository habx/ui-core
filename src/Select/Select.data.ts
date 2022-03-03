import { palette } from '../palette'

import { SelectOption } from './Select.interface'

export const OPTIONS: SelectOption[] = [
  { value: 'aix-en-provence', label: 'Aix-en-Provence' },
  { value: 'amiens', label: 'Amiens' },
  { value: 'angers', label: 'Angers' },
  { value: 'annecy', label: 'Annecy' },
  { value: 'bordeaux', label: 'Bordeaux' },
  { value: 'brest', label: 'Brest' },
  { value: 'clermond-ferrand', label: 'Clermond-Ferrand' },
  { value: 'dijon', label: 'Dijon' },
  { value: 'grenoble', label: 'Grenoble' },
  { value: 'le-havre', label: 'Le Havre' },
  { value: 'le-mans', label: 'Le Mans' },
  { value: 'lille', label: 'Lille' },
  { value: 'limoges', label: 'Limoges' },
  { value: 'lyon', label: 'Lyon' },
  { value: 'marseille', label: 'Marseille' },
  { value: 'montpelier', label: 'Montpelier' },
  { value: 'nantes', label: 'Nantes' },
  { value: 'nice', label: 'Nice' },
  { value: 'nimes', label: 'Nïmes' },
  { value: 'paris', label: 'Paris' },
  { value: 'perpignan', label: 'Perpignan' },
  { value: 'reims', label: 'Reims' },
  { value: 'rennes', label: 'Rennes' },
  { value: 'saint-denis', label: 'Saint-Denis' },
  { value: 'saint-etienne', label: 'Saint-Etienne' },
  { value: 'strasbourg', label: 'Strasbourg' },
  { value: 'toulon', label: 'Toulon' },
  { value: 'toulouse', label: 'Toulouse' },
  { value: 'tours', label: 'Tours' },
  { value: 'villeurbanne', label: 'Villeurbanne' },
]

export const COLORED_OPTIONS: SelectOption[] = [
  { label: 'Opened', value: 'opened', color: palette.yellowSunlight[700] },
  {
    label: 'Resolved',
    value: 'resolved',
    color: palette.neutralBlackWithOpacityFading[700],
  },
  {
    label: 'Confirmed',
    value: 'confirmed',
    color: palette.greenNorthernLight[700],
  },
  {
    label: 'Cancelled',
    value: 'cancelled',
    color: palette.neutralBlackWithOpacityFading[400],
  },
]

export const SELECTOR_OPTIONS = [
  {
    label: 'Vue drone',
    value: 'drone',
    group: 'view',
  },
  {
    label: 'Vue aérienne',
    value: 'aerial',
    group: 'view',
  },
  {
    label: 'Toit',
    value: 'roof',
    group: 'floor',
  },
  {
    label: '2ème étage',
    value: '2',
    group: 'floor',
    description: '3 lots disponibles',
  },
  {
    label: '1er étage',
    value: '1',
    group: 'floor',
  },
]
