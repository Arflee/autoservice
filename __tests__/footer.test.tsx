import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '@/components/footer'

test('Footer has 4 links', () => {
  render(<Footer />)
  expect(screen.getAllByRole('link')).toHaveLength(4);
});

test('Contact link leads to contact page', () => {
  expect(screen.getByText('Kontakty').getAttribute('href')).toEqual('/contacts')
});