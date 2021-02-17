import React from 'react'
import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <div className="searchBar">
            <form onSubmit={props.handleSubmit}>
            <input name='query' className='search_input' placeholder='Enter your location...' ></input>
            
            <input type="Submit" defaultValue="Search" className="searchButton"></input>
            </form>
        </div>
    )
}
