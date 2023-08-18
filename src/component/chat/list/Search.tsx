import { ChangeEvent, Dispatch, memo, useCallback } from "react";

interface ISearchProps {
  dispatch: Dispatch<any>;
}

const Search = memo(({ dispatch }: ISearchProps) => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "search_keyword", keyword: e.target.value });
    },
    [dispatch]
  );

  return (
    <div id="search">
      <div className="search_button" id="search_button"></div>
      <input placeholder="Search" onChange={onChange} />
    </div>
  );
});

export default Search;
