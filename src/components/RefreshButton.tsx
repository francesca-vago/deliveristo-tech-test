import { refreshButton } from "./RefreshButton.css";

interface RefreshButtonProps {
  onRefresh: VoidFunction;
}

export function RefreshButton({ onRefresh }: RefreshButtonProps) {
  return (
    <button onClick={() => onRefresh()} className={refreshButton}>
      Get another image!
    </button>
  );
}
