interface RefreshButtonProps {
  onRefresh: VoidFunction;
}

export function RefreshButton({ onRefresh }: RefreshButtonProps) {
  return <button onClick={() => onRefresh()}>Refresh</button>;
}
