import { render, screen } from '@testing-library/react';
import App from './App';

const SECOND = 1000;
const MINUTE = SECOND * 60;
jest.setTimeout(5 * MINUTE);

test('simulate several long tests', (done) => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  setTimeout(() => {
    done();
  }, MINUTE * 4);
});

test('add another test', (done) => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  setTimeout(() => {
    done();
  }, MINUTE * 4);
});
