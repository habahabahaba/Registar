// 3rd party:
// Redux RTK:
// Store:
// React Router:
import { useNavigate } from 'react-router-dom';
// React:
import { useState } from 'react';
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC, FormEvent } from 'react';

const SearchInput: FC = () => {
  // State:
  const [input, setInput] = useState<string>('');

  // Navigation:
  const navigate = useNavigate();

  // Handlers:
  function handleSubmit(ev: FormEvent) {
    // Prevent default page reload:
    ev.preventDefault();

    // Validation:
    const term = input.trim();
    if (!term.length) return;

    // Navigating to the search page:
    navigate(`/search?=${term}`);
  }

  // JSX:
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='package name...'
        value={input}
        onChange={(ev) => {
          setInput(() => ev.target.value);
        }}
      />
    </form>
  );
};

export default SearchInput;
