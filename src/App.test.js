import { render, screen } from '@testing-library/react';
import App from './App';

const SECOND = 1000;
const MINUTE = SECOND * 60;
jest.setTimeout(5 * MINUTE);

test('test1', (done) => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  setTimeout(() => {
    done();
  }, MINUTE);
});

test('test2', (done) => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  setTimeout(() => {
    done();
  }, MINUTE);
});

test('test3', (done) => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  setTimeout(() => {
    done();
  }, MINUTE);
});

test('test4', (done) => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  setTimeout(() => {
    done();
  }, MINUTE);
});

test('test5', (done) => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  setTimeout(() => {
    done();
  }, MINUTE);
});
