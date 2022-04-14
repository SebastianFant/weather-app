import React, { useRef} from 'react';

const Search = ({callback}) => {
    const searchVal = useRef();

    return (<>
    <input type="text" class="form-control-sm w-25 mt-2 mb-2"ref={searchVal}/>
    <button class="btn btn-success mt-2 mb-2" onClick={() => callback(searchVal.current.value)}>Sök</button>
    </>  );
}
 
export default Search;
