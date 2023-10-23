interface RestoreButtonProps {
  onRestore: VoidFunction;
}

export function RestoreButton({ onRestore }: RestoreButtonProps) {
  return <button onClick={() => onRestore()}>Refresh</button>;
}
