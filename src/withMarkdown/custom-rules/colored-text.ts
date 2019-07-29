import MarkdownIt from 'markdown-it'
import StateCore from 'markdown-it/lib/rules_core/state_core'

const CHAR_COLOR_CODE_START = 0x5b // [
const CHAR_COLOR_CODE_END = 0x5d // ]
const CHAR_TEXT_START = 0x7b // {
const CHAR_TEXT_END = 0x7d // }

function parseAttribute(
  startChar: number,
  endChar: number,
  state: StateCore,
  start: number
) {
  let level
  let found
  let marker
  let prevPos
  let labelEnd = -1
  let max = state.posMax
  let oldPos = state.pos

  state.pos = start + 1
  level = 1

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos)
    if (marker === endChar) {
      level--
      if (level === 0) {
        found = true
        break
      }
    }

    prevPos = state.pos
    state.md.inline.skipToken(state)
    if (marker === startChar) {
      if (prevPos === state.pos - 1) {
        // increase level if we find a CHAR_COLOR_CODE_START, which is not a part of any token
        level++
      } else {
        state.pos = oldPos
        return -1
      }
    }
  }

  if (found) {
    labelEnd = state.pos
  }

  // restore old state
  state.pos = oldPos

  return labelEnd
}

const parseColorCode = parseAttribute.bind(
  null,
  CHAR_COLOR_CODE_START,
  CHAR_COLOR_CODE_END
)
const parseColoredText = parseAttribute.bind(
  null,
  CHAR_TEXT_START,
  CHAR_TEXT_END
)

function coloredText(state: StateCore, silent?: boolean) {
  let colorStart
  let colorEnd
  let textStart
  let textEnd
  let token

  const max = state.posMax

  if (state.src.charCodeAt(state.pos) !== CHAR_COLOR_CODE_START) {
    return false
  }

  colorStart = state.pos + 1
  colorEnd = parseColorCode(state, state.pos)

  // parser failed to find CHAR_COLOR_CODE_END, so it's not a valid colored text
  if (colorEnd < 0) {
    return false
  }

  let pos = colorEnd + 1
  const rawColor = state.src.slice(colorStart, colorEnd)
  const color =
    (state.env &&
      state.env.theme &&
      state.env.theme.palette &&
      state.env.theme.palette[rawColor]) ||
    rawColor

  // The format is not correct, we don't have the "colored text" part
  if (state.src.charCodeAt(pos) !== CHAR_TEXT_START) {
    return false
  }

  textStart = pos + 1
  textEnd = parseColoredText(state, pos)

  if (textEnd < 0) {
    return false
  }

  pos = textEnd + 1
  const text = state.src.slice(textStart, textEnd)

  if (!silent) {
    state.pos = colorStart
    state.posMax = colorEnd

    token = state.push('colored_text_open', 'span', 1)
    token.attrs = [['style', `color: ${color};`], ['data-ace-color', 1]]

    token = state.push('text', '', 0)
    token.content = text

    state.push('colored_text_close', 'span', -1)
  }

  state.pos = pos
  state.posMax = max
  return true
}

export default (md: MarkdownIt) =>
  md.inline.ruler.after('emphasis', 'sub', coloredText)
