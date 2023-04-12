import React, { useState } from 'react';
import './Filter.css'

const Filter = ({lists, selectFilter}) => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="filter-section">{lists.map((list, index) => {
            return (
                <button key={`filter${index}`} className={`filter-item ${selected === index ? 'active-filter' : ''}`} name={list.list_name} data-index={index} onClick={(event) => {selectFilter(event.target.name); setSelected(parseInt(event.target.dataset.index))}}>{list.list_name}</button>
            )
        })}</div>
    )
}

export default Filter;