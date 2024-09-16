// 3rd party:
// React-Icons:
import { MdSearch } from 'react-icons/md';
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
    navigate(`/search?term=${term}`);
  }

  // JSX:
  return (
    <form onSubmit={handleSubmit}>
      <div className='relative'>
        <div className='absolute inset-y-0 flex items-center pl-3'>
          <button type='submit'>
            <MdSearch className='h-5 w-5 text-gray-500' />
          </button>
        </div>
        <input
          type='text'
          placeholder='package name...'
          value={input}
          onChange={(ev) => {
            setInput(() => ev.target.value);
          }}
          className='pl-10 py-2 w-full border-0 shadow-none'
        />
      </div>
    </form>
  );
};

export default SearchInput;
