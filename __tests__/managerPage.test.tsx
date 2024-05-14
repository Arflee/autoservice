import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import ManagerPage from '@/components/managerPage';

test('Footer has 4 links', () => {
  render(<ManagerPage reservations={[{}]} services={[{cena: 100, id_sluzba: 1, nazev: "test", popis: "popis"}]} />)
  expect(screen.getAllByRole('link')).toHaveLength(4);
});

test('Contact link leads to contact page', () => {
  expect(screen.getByText('Kontakty').getAttribute('href')).toEqual('/contacts')
});