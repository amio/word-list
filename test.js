import test from 'ava'
import m from './'

test(t => {
  t.true(typeof m === 'string')
  t.true(m.length > 1000)
})
