import { useId, useState } from "react";
import searchIcon from "../assets/search.svg";
import { getRandomDogByBreed } from "../api/getDogs";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={searchId} hidden>
          Search
        </label>
        <input
          type="search"
          value={searchQuery}
          onChange={handleChangeInput}
          id={searchId}
          placeholder="Search"
        />
        <button type="submit" aria-label="search">
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
    </div>
  );
}
