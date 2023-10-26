import { useId, useState } from "react";
import SearchIcon from "../assets/search.svg";
import {
  formContainer,
  searchButton,
  searchForm,
  searchInput,
} from "./SearchForm.css";

interface SearchFormProps {
  onSearchChange?: (searchQuery: string) => void;
  onFormSubmit?: (searchQuery: string) => void;
}

export function SearchForm({ onSearchChange, onFormSubmit }: SearchFormProps) {
  const searchId = useId();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
    onSearchChange?.(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onFormSubmit?.(searchQuery);
  };

  return (
    <div className={formContainer}>
      <form onSubmit={handleSubmit} className={searchForm}>
        <label htmlFor={searchId} hidden>
          Search
        </label>
        <input
          type="search"
          value={searchQuery}
          onChange={handleChangeInput}
          id={searchId}
          placeholder="Search"
          className={searchInput}
        />
        <button type="submit" aria-label="search" className={searchButton}>
          <img src={SearchIcon} alt="search icon" />
        </button>
      </form>
    </div>
  );
}
