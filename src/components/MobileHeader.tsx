import Logo from "../assets/logo.png";
import SearchIcon from "../assets/search.svg";
import { header, logo, searchButton } from "./MobileHeader.css";

interface MobileHeaderProps {
  onClickSearch: () => void;
}

export function MobileHeader({ onClickSearch }: MobileHeaderProps) {
  return (
    <header className={header}>
      <h1>
        <img
          src={Logo}
          alt="Woofr, Pawfect images of dogs logo"
          className={logo}
        />
      </h1>
      <button
        type="submit"
        aria-label="search"
        className={searchButton}
        onClick={onClickSearch}
      >
        <img src={SearchIcon} alt="search icon" />
      </button>
    </header>
  );
}
