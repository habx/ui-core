import * as React from 'react'

export default interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  type: 'display' | 'hero1' | 'hero2' | 'sectionTitle' | 'columnTitle' | 'title'
}
