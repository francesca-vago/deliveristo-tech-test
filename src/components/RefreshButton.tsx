interface RefreshButtonProps {
  selectedBreedName: string;
  onRefresh: VoidFunction;
}

export function RefreshButton({
  selectedBreedName,
  onRefresh,
}: RefreshButtonProps) {
  return <button onClick={() => onRefresh()}>Refresh</button>;
}
