import { ChangeEvent, memo, useCallback } from "react";
import { ISearchProps } from "./ChatList";

const Search = memo(({ onSearch }: ISearchProps) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onSearch({ keyword: e.target.value });
    },
    [onSearch]
  );

  return (
    <div id="search">
      <div className="search_button" id="search_button"></div>
      <input placeholder="Search" onChange={onChange} />
    </div>
  );
});

export default Search;
