// src/SearchBar.tsx
// Komponen bar pencarian untuk memfilter buku berdasarkan judul.
// Ini harus ditempatkan di folder 'src': C:/Users/Arirhm/bookshelf-app-react-vite-tailwind-main/bookshelf-app-react-vite-tailwind-main/src/SearchBar.tsx

import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Cari Buku</h2>
      <input
        type="text"
        placeholder="Cari berdasarkan judul..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;