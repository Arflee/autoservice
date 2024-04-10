import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/contacts/page'

// todo remake test for contacts
test('Page', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Contacts' })).toBeDefined()
})