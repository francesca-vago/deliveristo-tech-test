import { useId, useState } from "react";
import searchIcon from "../assets/search.svg";
import { getRandomDogByBreed } from "../api/getDogs";
import {
  formContainer,
  searchButton,
  searchForm,
  searchInput,
} from "./SearchForm.css";

export function SearchForm() {
  const searchId = useId();
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchQuery(e.target.value);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getRandomDogByBreed("shiba");
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
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
    </div>
  );
}
