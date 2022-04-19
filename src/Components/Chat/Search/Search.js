import './Search.css';
import {useRef} from 'react';

function Search({doSearch}) {
    const searchBox = useRef(null);

    const search = function(){
        doSearch(searchBox.current.value);
    }

    return(
        <div className='search-box  d-none d-md-block'>
            <div className='input-wrapper'>
            <i className="bi bi-search"></i>
            <input ref={searchBox} onKeyUp={search} type="text" className='search-bar' placeholder='Search here'></input>
            </div>
        </div>
    );
}

export default Search;