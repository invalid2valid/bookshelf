import { useState, useMemo } from "react";
import BookCard from "../components/BookCard.jsx";
import FilterBar from "../components/FilterBar.jsx";
import booksData from "../data/books.json";
import { sortBooks, filterBooks, getAllCategories } from "../utils/sorting.js";

const STATUS_GROUPS = [
  {
    key: "পড়ছি",
    label: "এখন পড়ছি",
    dotClass: "status-section__dot--reading",
  },
  {
    key: "পড়া শেষ",
    label: "পড়া শেষ হয়েছে",
    dotClass: "status-section__dot--done",
  },
  { key: "পড়বো", label: "পড়বো", dotClass: "status-section__dot--wishlist" },
];

const sortedAll = sortBooks(booksData);
const allCategories = getAllCategories(booksData);

const DEFAULT_FILTERS = { category: "সব", status: "সব", search: "" };

function getStats(books) {
  return {
    total: books.length,
    reading: books.filter((b) => b.status === "পড়ছি").length,
    done: books.filter((b) => b.status === "পড়া শেষ").length,
    wishlist: books.filter((b) => b.status === "পড়বো").length,
  };
}

function Home() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const stats = useMemo(() => getStats(booksData), []);

  const filteredBooks = useMemo(() => {
    return filterBooks(sortedAll, filters);
  }, [filters]);

  const hasActiveFilter =
    (filters.category && filters.category !== "সব") ||
    (filters.status && filters.status !== "সব") ||
    (filters.search && filters.search.trim() !== "");

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
        <p className="hero__eyebrow" style={{ color: "black" }}> ব্যক্তিগত পাঠতালিকা</p>
          <h1 className="hero__heading">
            {/* হযরত আলীর
            <br /> */}
            <span>বুকশেলফ</span>
          </h1>
          <p className="hero__subtitle">
            &ldquo;মানুষ;তাই মনে প্রশ্ন জাগে, উত্তর খুঁজি; তাই বই পড়ি, বই পড়ি; নতুন প্রশ্ন সামনে আসে—
            আবার নতুন বই পড়া শুরু করি।&rdquo;
          </p>
          <div className="hero__stats">
            <div className="stat-item stat-item--accent">
              <span className="stat-item__number">{stats.total}</span>
              <span className="stat-item__label">মোট বই</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">{stats.reading}</span>
              <span className="stat-item__label">পড়ছি</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">{stats.done}</span>
              <span className="stat-item__label">পড়া শেষ</span>
            </div>
            <div className="stat-item">
              <span className="stat-item__number">{stats.wishlist}</span>
              <span className="stat-item__label">পড়বো</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <FilterBar
        categories={allCategories}
        filters={filters}
        onChange={setFilters}
        resultCount={filteredBooks.length}
        totalCount={booksData.length}
      />

      {/* Main content */}
      <main className="main-content">
        <div className="container">
          {filteredBooks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state__icon">📭</div>
              <h3 className="empty-state__title">কোনো বই পাওয়া যায়নি</h3>
              <p className="empty-state__text">
                আপনার ফিল্টার পরিবর্তন করুন বা সার্চ মুছুন।
              </p>
            </div>
          ) : hasActiveFilter ? (
            /* Flat grid when filtering */
            <div className="book-grid" key={JSON.stringify(filters)}>
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            /* Grouped by status when no filter */
            STATUS_GROUPS.map(({ key, label, dotClass }) => {
              const groupBooks = filteredBooks.filter((b) => b.status === key);
              if (groupBooks.length === 0) return null;
              return (
                <section key={key} className="status-section">
                  <div className="status-section__header">
                    <span className={`status-section__dot ${dotClass}`} />
                    <h2 className="status-section__title">{label}</h2>
                    <span className="status-section__count">
                      {groupBooks.length}
                    </span>
                  </div>
                  <div className="book-grid">
                    {groupBooks.map((book) => (
                      <BookCard key={book.id} book={book} />
                    ))}
                  </div>
                </section>
              );
            })
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
