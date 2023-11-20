import React, { useState } from 'react';

function FilterBar({ section, onFilterChange, onSortChange }) {
  const [selectedFilter, setSelectedFilter] = useState('Todas');
  const [selectedSort, setSelectedSort] = useState('Por defecto');

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="filter-bar">
      <select value={selectedFilter} onChange={handleFilterChange}>
        {/* Opciones de filtro específicas para la sección */}
        {/* ... */}
      </select>
      <select value={selectedSort} onChange={handleSortChange}>
        <option value="Por defecto">Por defecto</option>
        <option value="Mayor a menor">Mayor a menor</option>
        <option value="Por autor">Por autor</option>
      </select>
    </div>
  );
}

export default FilterBar;