import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useEffect, useState } from 'react';

function SearchBar({ setSearchQuery, placeholder }) {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    if (!event.target.value) {
      setSearchQuery('');
    } else {
      setSearch(event.target.value);
    }
  };

  useEffect(() => {
    setSearchQuery(search);
  }, [search]);

  return (
    <TextField
      sx={{ borderRadius: 30, marginBottom: 3, width: { xs: '100%', sm: '40%', md: '30%' } }}
      placeholder={placeholder || "Search name, occupation..."}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ marginRight: 1 }}>
            <Search fontSize="large" />
          </InputAdornment>),
        style: {
          borderRadius: "32px",
        },
      }}
      onChange={handleSearchChange}
    />
  );
}

export default SearchBar;
