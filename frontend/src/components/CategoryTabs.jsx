// components/CategoryTabs.jsx
import React from 'react';

const CategoryTabs = ({ categories, selectedCategory, setSelectedCategory, categoryIndex, setCategoryIndex, categoryRefs }) => {
  return (
    <div className="relative flex items-center justify-center mb-8">
      <div
        id="category-scroll"
        className="flex px-12 py-4 space-x-6 overflow-hidden"
        style={{ scrollBehavior: 'smooth', width: '100%', maxWidth: '880px' }}
      >
        {categories.map((cat, idx) => (
          <div
            key={idx}
            ref={(el) => (categoryRefs.current[idx] = el)}
            onClick={() => {
              setSelectedCategory(cat.name);
              setCategoryIndex(idx);
              categoryRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }}
            className={`min-w-[200px] max-w-[200px] h-[140px] rounded-xl shadow-md flex flex-col items-center justify-center cursor-pointer transition-transform ${selectedCategory === cat.name ? 'bg-orange-300 text-black font-semibold scale-105' : 'bg-white hover:scale-105'}`}
          >
            <img src={cat.image} alt={cat.name} className="w-12 h-12 mb-2 object-contain" />

            <span className="text-sm font-semibold text-center">{cat.name}</span>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          if (categoryIndex > 0) {
            const newIndex = categoryIndex - 1;
            setCategoryIndex(newIndex);
            setSelectedCategory(categories[newIndex].name);
            document.getElementById('category-scroll').scrollBy({ left: -220, behavior: 'smooth' });
          }
        }}
        className="absolute left-0 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10"
      >‹</button>
      <button
        onClick={() => {
          if (categoryIndex < categories.length - 1) {
            const newIndex = categoryIndex + 1;
            setCategoryIndex(newIndex);
            setSelectedCategory(categories[newIndex].name);
            document.getElementById('category-scroll').scrollBy({ left: 220, behavior: 'smooth' });
          }
        }}
        className="absolute right-0 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold z-10"
      >›</button>
    </div>
  );
};

export default CategoryTabs;