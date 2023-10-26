import { errorContainer, retryButton } from "./Error.css";

interface ErrorProps {
  retry?: () => void;
}

export function Error({ retry }: ErrorProps) {
  return (
    <div className={errorContainer}>
      <div>An error occurred :(</div>
      {retry && (
        <button type="button" onClick={retry} className={retryButton}>
          Retry
        </button>
      )}
    </div>
  );
}
