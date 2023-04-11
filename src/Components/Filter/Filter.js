import React from 'react';
import './Filter.css'

const Filter = ({lists, selectFilter}) => {

const filterList = lists.map((list, index) => {
return (
    <button className="filter-item" key={`filter${index}`} name={list.list_name} onClick={(event) => selectFilter(event.target.name)}>{list.list_name}</button>
)
})
    return (
        <div className="filter-section">{filterList}</div>
    )
}

export default Filter;