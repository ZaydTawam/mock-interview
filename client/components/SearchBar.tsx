interface Props {
  onSearch: (name: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const input = e.currentTarget.elements.namedItem("q") as HTMLInputElement;
        onSearch(input.value);
      }}
    >
      <input name="q" placeholder="Search a Pokémon (e.g. pikachu)" />
      <button type="submit">Search</button>
    </form>
  );
}