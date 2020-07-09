import React, { useState, useEffect } from "react";

const names = ["World", "Google", "FireFox", "Safari", "Chrome"];
export const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);

  useEffect(() => {
    const results = names.filter(name =>
      name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNames(results);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {filteredNames.length > 0 ? (
        filteredNames.map(name => <p>{name}</p>)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};
