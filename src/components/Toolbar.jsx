const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
      <div className="toolbar">
        {filters.map((filter) => (
          <button
            key={filter}
            className={selected === filter ? 'button active' : 'button'}
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  };
  
  export default Toolbar;