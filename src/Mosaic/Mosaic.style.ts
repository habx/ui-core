import styled from "styled-components";

const spacingProperty = `
    &[data-spacing='true'] > * {
        border: 2px solid #fff;
    }
    `
const roundedProperty = `
    &[data-rounded='true'] > * {
        border-radius: 6px;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    height: 100%;
`

export const MosaicItem = styled.div`
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);

    &[data-items-length='1'] > * {
        display: grid;
        &:nth-child(1) {
            grid-column: 3 / 1;
            grid-row: 3 / 1;
        }
    }

    &[data-items-length='2'] > *  {
        display: grid;
        &:nth-child(1) {
            grid-column: 3 / 1;
        }
        &:nth-child(2) {
            grid-column: 3 / 1;
        }
    }

    &[data-items-length='3']  > *{
        &:nth-child(1) {
            grid-column: 3 / 1;
        }
    }

    &[data-items-length='4']{
        grid-auto-flow: column;
    }

    ${spacingProperty}

    ${roundedProperty}
`



export const Item = styled.div`
    > * {
        height:100%;
        width:100%;
    }
    ${spacingProperty}
    ${roundedProperty}
`