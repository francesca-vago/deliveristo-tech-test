import { BreedList } from "../components/BreedList";
import { SearchForm } from "../components/SearchForm";

export function Dashboard() {
  return (
    <main>
      <SearchForm />
      <BreedList />
    </main>
  );
}
