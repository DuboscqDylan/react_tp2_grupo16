import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchBar } from './SearchBar';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key, 
  }),
}));

describe('SearchBar', () => {
  it('renders an input with the translated placeholder', () => {
    render(<SearchBar search="" setSearch={() => {}} />);
    const input = screen.getByPlaceholderText('search');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('displays the current search value', () => {
    render(<SearchBar search="hello" setSearch={() => {}} />);
    const input = screen.getByPlaceholderText('search');
    expect(input).toHaveValue('hello');
  });

  it('calls setSearch with the new value on change', () => {
    const setSearch = vi.fn();
    render(<SearchBar search="" setSearch={setSearch} />);
    const input = screen.getByPlaceholderText('search');

    fireEvent.change(input, { target: { value: 'new query' } });

    expect(setSearch).toHaveBeenCalledTimes(1);
    expect(setSearch).toHaveBeenCalledWith('new query');
  });

  it('applies the core styling classes', () => {
    render(<SearchBar search="" setSearch={() => {}} />);
    const input = screen.getByPlaceholderText('search');

    expect(input).toHaveClass('w-full', 'p-3', 'rounded-full');
    expect(input).toHaveClass('bg-white', 'text-black', 'border');
    expect(input).toHaveClass('dark:bg-gray-800', 'dark:text-white', 'dark:border-gray-700');
    expect(input).toHaveClass('transition');
  });
});