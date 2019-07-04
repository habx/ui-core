// same as UNESCAPE_MD_RE plus a space
const UNESCAPE_RE = /\\([ \\!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-])/g

function logo(state, silent) {
  let found
  let token
  const max = state.posMax
  const start = state.pos

  if (state.src.charCodeAt(start) !== 0x7e /* ~ */) {
    return false
  }
  if (silent) {
    return false
  } // don't run any pairs in validation mode
  if (start + 2 >= max) {
    return false
  }

  state.pos = start + 1

  while (state.pos < max) {
    if (state.src.charCodeAt(state.pos) === 0x7e /* ~ */) {
      found = true
      break
    }

    state.md.inline.skipToken(state)
  }

  if (!found || start + 1 === state.pos) {
    state.pos = start
    return false
  }

  const content = state.src.slice(start + 1, state.pos)

  // don't allow unescaped spaces/newlines inside
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state.pos = start
    return false
  }

  // found!
  state.posMax = state.pos
  state.pos = start + 1

  // Earlier we checked !silent, but this implementation does not need it
  token = state.push('logo_open', 'span', 1)
  token.attrs = [['data-habx-font', 1]]
  token.markup = '~'

  token = state.push('text', '', 0)
  token.content = content.replace(UNESCAPE_RE, '$1')

  token = state.push('logo_close', 'span', -1)
  token.markup = '~'

  state.pos = state.posMax + 1
  state.posMax = max
  return true
}

export default md => md.inline.ruler.after('emphasis', 'sub', logo)
