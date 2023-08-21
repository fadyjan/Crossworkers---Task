import { useSelector,useDispatch } from "react-redux";
import React , {FunctionComponent} from "react";
import {setSearchOutput,setSearchTerm} from '../store/ReduxSlices/DataSlice'

const SearchBar: FunctionComponent= () => {
  const dispatch = useDispatch();
  const ConversationList = useSelector(
    (state :any) => state.moviesSlice.AllMovies 
  );
  dispatch(setSearchOutput(ConversationList))

    const OnChangeHandler = (e :any) => {
    const SearchInput = e.target.value.toLowerCase();
    dispatch(setSearchTerm(SearchInput))

    const filteredData = ConversationList.filter((record :any) => {      
      //if no input the return the original
      if (SearchInput === "") {
        return record;
      } else {
        return record.title.toLowerCase().includes(SearchInput);
      }
    });

    if(SearchInput ==""){
      dispatch(setSearchOutput(ConversationList))
    }
    else{
      dispatch(setSearchOutput(filteredData))

    }
  };
  return (
    <div id="SearchBar">
      <img id="SearchIcon"></img>
      <input
        id="SearchInputField"
        placeholder="Search for movies or TV series"
        onChange={OnChangeHandler}
      ></input>
    </div>
  );
};

export default SearchBar;
