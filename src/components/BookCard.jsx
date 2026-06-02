import { useNavigate } from 'react-router-dom'

function getBadgeClass(status) {
  if (status === 'পড়ছি') return 'book-card__badge--reading'
  if (status === 'পড়া শেষ') return 'book-card__badge--done'
  return 'book-card__badge--wishlist'
}

function BookCard({ book }) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/book/${book.id}`)
  }

  return (
    <article
      className="book-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick() }}
      aria-label={`${book.title} — ${book.author}`}
    >
      {/* Cover */}
      <div className="book-card__cover-wrap">
        {book.cover ? (
          <img
            className="book-card__cover"
            src={book.cover}
            alt={`${book.title} এর প্রচ্ছদ`}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
        ) : null}
        <div
          className="book-card__cover-placeholder"
          style={{ display: book.cover ? 'none' : 'flex' }}
        >
          📖
        </div>

        {/* Status badge */}
        <span className={`book-card__badge ${getBadgeClass(book.status)}`}>
          {book.status}
        </span>
      </div>

      {/* Body */}
      <div className="book-card__body">
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>

        {Array.isArray(book.categories) && book.categories.length > 0 && (
          <div className="book-card__tags" aria-label="বিভাগ">
            {book.categories.slice(0, 3).map((cat) => (
              <span key={cat} className="tag">{cat}</span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="book-card__footer">
        <button
          className="btn-detail"
          onClick={(e) => { e.stopPropagation(); handleClick() }}
          aria-label={`${book.title} এর বিস্তারিত দেখুন`}
        >
          বিস্তারিত
        </button>
      </div>
    </article>
  )
}

export default BookCard
