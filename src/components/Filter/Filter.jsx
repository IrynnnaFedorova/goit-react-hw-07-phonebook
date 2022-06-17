import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction, filterSelectors } from '../../redux/contacts/filter';
import c from './Filter.module.css';

const Filter = () => {
  const value = useSelector(filterSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={c.label}>
        Find contacts by name
        <input
          className={c.input}
          type="text"
          value={value}
          onChange={e => dispatch(filterAction.updateFilter(e.target.value))}
        />
      </label>
    </>
  );
};

export default Filter;
