function SearchBar() {
  return (
    <div className="search-wrapper">
      <div className="search-box">
        <input
          type="text"
          placeholder="Tìm kiếm công việc..."
        />

        <button>Tìm kiếm</button>
      </div>
    </div>
  );
}

export default SearchBar;