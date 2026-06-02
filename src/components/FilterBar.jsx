const ALL_STATUSES = ['পড়ছি', 'পড়া শেষ', 'পড়বো']

function FilterBar({ categories, filters, onChange, resultCount, totalCount }) {
  const hasActiveFilter =
    (filters.category && filters.category !== 'সব') ||
    (filters.status && filters.status !== 'সব') ||
    (filters.search && filters.search.trim() !== '')

  function handleClear() {
    onChange({ category: 'সব', status: 'সব', search: '' })
  }

  return (
    <section className="filter-section">
      <div className="container">
        <div className="filter-bar">
          {/* Search */}
          <div className="filter-bar__search">
            <span className="filter-bar__search-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="search"
              placeholder="বই বা লেখক খুঁজুন..."
              value={filters.search}
              onChange={(e) => onChange({ ...filters, search: e.target.value })}
              aria-label="বই খুঁজুন"
            />
          </div>

          {/* Category select */}
          <select
            className="filter-bar__select"
            value={filters.category}
            onChange={(e) => onChange({ ...filters, category: e.target.value })}
            aria-label="বিভাগ নির্বাচন করুন"
          >
            <option value="সব">সব বিভাগ</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Status select */}
          <select
            className="filter-bar__select"
            value={filters.status}
            onChange={(e) => onChange({ ...filters, status: e.target.value })}
            aria-label="অবস্থা নির্বাচন করুন"
          >
            <option value="সব">সব অবস্থা</option>
            {ALL_STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          {/* Clear filters */}
          {hasActiveFilter && (
            <button
              className="filter-bar__clear"
              onClick={handleClear}
              aria-label="ফিল্টার মুছুন"
            >
              ফিল্টার মুছুন
            </button>
          )}
        </div>

        {hasActiveFilter && (
          <p className="filter-result-count">
            {totalCount}টির মধ্যে {resultCount}টি বই দেখানো হচ্ছে
          </p>
        )}
      </div>
    </section>
  )
}

export default FilterBar
