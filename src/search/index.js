import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import getSuggestions from './mockSearchService';
import Highlight from './highlight';
import './index.scss';

const SearchContainer = () => {
  const [searchData, setSearchData] = useState({
    value: '',
    showDropDown: false,
  });

  /* promise options taking input as search value & return array result contains label & value */
  const promiseOptions = (inputValue) => {
    const updatedSearchData = { ...searchData };
    return getSuggestions(inputValue) // calling api to get suggestion by search value
      .then((suggestions) => {
        updatedSearchData.error = false; //  case: success, error set to false
        return suggestions.map((suggestion) => {
          return {
            label: <Highlight search={inputValue}>{suggestion}</Highlight>, // highlight search value
            value: suggestion, // plain suggestion text
          };
        });
      })
      .catch(() => {
        updatedSearchData.error = true; //  case: error, error set to true
        return [];
      })
      .finally(() => {
        setSearchData(() => updatedSearchData); // update search data (error: either true/false)
      });
  };

  /* when input field change */
  const onEmailInputChange = (val) => {
    const updatedSearchData = { ...searchData };
    updatedSearchData.showDropDown = !!val; // if no search value, hide dropdropdown else show dropdropdown
    setSearchData(() => updatedSearchData);
  };

  /* when dropdown select */
  const onDropdownSelect = () => {
    const updatedSearchData = { ...searchData };
    updatedSearchData.showDropDown = false; // hide dropdown, after selectional of dropdown
    setSearchData(() => updatedSearchData);
  };

  return (
    <div className="search-container">
      <div className="search-container__search-heading">Search</div>
      <AsyncSelect
        className={searchData.error ? 'search-container__async-select error' : 'search-container__async-select'}
        loadOptions={promiseOptions}
        isFocused
        isMulti
        menuIsOpen={searchData.showDropDown}
        onInputChange={onEmailInputChange}
        onChange={onDropdownSelect}
        noOptionsMessage={() => (searchData.error ? 'unable to fetch data' : 'No data')}
        loadingMessage={() => 'loading...'}
        placeholder="search..."
      />
    </div>
  );
};

export default SearchContainer;
