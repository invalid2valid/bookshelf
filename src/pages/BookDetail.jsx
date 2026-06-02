import { useParams, Link } from "react-router-dom";
import booksData from "../data/books.json";

function getBadgeClass(status) {
  if (status === "পড়ছি") return "book-card__badge--reading";
  if (status === "পড়া শেষ") return "book-card__badge--done";
  return "book-card__badge--wishlist";
}

function BookDetail() {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === id);

  if (!book) {
    return (
      <main className="container">
        <div className="not-found">
          <div className="not-found__code">৪০৪</div>
          <h2 className="not-found__title">বইটি পাওয়া যায়নি</h2>
          <p className="not-found__text">
            এই আইডিতে কোনো বই নেই। JSON ফাইল চেক করুন।
          </p>
          <Link to="/" className="btn-home">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            হোমে ফিরুন
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <div className="container">
        {/* Back link */}
        <Link to="/" className="detail-back">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          সব বই
        </Link>

        {/* Two-column layout */}
        <div className="detail-layout">
          {/* Left: cover */}
          <div className="detail-cover-wrap">
            {book.cover ? (
              <img
                className="detail-cover"
                src={book.cover}
                alt={`${book.title} এর প্রচ্ছদ`}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}
            <div
              className="detail-cover-placeholder"
              style={{ display: book.cover ? "none" : "flex" }}
            >
              📖
            </div>

            <div className="detail-cover-badge">
              <span
                className={`book-card__badge ${getBadgeClass(book.status)}`}
                style={{ position: "static", display: "inline-block" }}
              >
                {book.status}
              </span>
            </div>
          </div>

          {/* Right: info */}
          <div className="detail-info animate-in">
            {/* Categories */}
            {Array.isArray(book.categories) && book.categories.length > 0 && (
              <div className="detail-categories">
                {book.categories.map((cat) => (
                  <span key={cat} className="tag">
                    {cat}
                  </span>
                ))}
              </div>
            )}

            {/* Title & Author */}
            <h1 className="detail-title">{book.title}</h1>
            <p className="detail-author">{book.author}</p>

            <div className="detail-divider" />

            {/* Meta */}
            <div className="detail-meta">
              {book.year && (
                <div className="detail-meta-item">
                  <span className="detail-meta-item__label">সংগ্রহ</span>
                  <span className="detail-meta-item__value">{book.year}</span>
                </div>
              )}
              <div className="detail-meta-item">
                <span className="detail-meta-item__label">অবস্থা</span>
                <span className="detail-meta-item__value">{book.status}</span>
              </div>
              {/* {book.priority && (
                <div className="detail-meta-item">
                  <span className="detail-meta-item__label">অগ্রাধিকার</span>
                  <span className="detail-meta-item__value">#{book.priority}</span>
                </div>
              )} */}
            </div>

            {/* Description */}
            {book.description && (
              <>
                <div className="detail-divider" />
                <p className="detail-description">{book.description}</p>
              </>
            )}

            {/* Store link */}
            {book.storeLink && (
              <a
                href={book.storeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-store-btn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                বইটি কিনুন
              </a>
            )}
          </div>
        </div>

        {/* Review section */}
        <div
          className="review-section animate-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="review-section__header">
            <div className="review-section__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h2 className="review-section__title">আমি যা শিখেছি / রিভিউ</h2>
          </div>

          {book.review && book.review.trim() !== "" ? (
            <p className="review-section__body">{book.review}</p>
          ) : (
            <p className="review-empty">
              এখনো রিভিউ লেখা হয়নি। books.json ফাইলে &quot;review&quot; ফিল্ডে
              আপনার মতামত যুক্ত করুন।
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default BookDetail;
