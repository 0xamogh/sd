/* global test, describe, it, expect */
'use strict'
import { cup1 } from '../../../files.js'

describe('this test prevents to any issues and problems, also to break the structure of cup1 data', () => {
  test('cup1 data files returns object', () => {
    expect(cup1).not.toBe('')
  })
})
