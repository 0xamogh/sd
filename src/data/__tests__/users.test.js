/* global test, describe, it, expect */
'use strict'
import {usersFilePath} from '../../../files.js'
const users = require(usersFilePath)

describe('users data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of users', () => {
    expect(users).not.toBe('')
  })
})
