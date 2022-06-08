import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories">
      <h2>{categories.at(0)}</h2>
      <button type="submit" onClick={handleClick} className="checkStatus">
        Check status
      </button>
    </div>
  );
}

export default Categories;
