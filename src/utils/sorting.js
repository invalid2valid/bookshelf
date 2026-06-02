const STATUS_ORDER = {
  'পড়ছি': 1,
  'পড়া শেষ': 2,
  'পড়বো': 3,
}

export function sortBooks(books) {
  return [...books].sort((a, b) => {
    const statusA = STATUS_ORDER[a.status] ?? 99
    const statusB = STATUS_ORDER[b.status] ?? 99
    if (statusA !== statusB) return statusA - statusB

    const priorityA = a.priority ?? 999
    const priorityB = b.priority ?? 999
    if (priorityA !== priorityB) return priorityA - priorityB

    return (a.title || '').localeCompare(b.title || '', 'bn')
  })
}

export function filterBooks(books, { category, status, search }) {
  return books.filter((book) => {
    if (category && category !== 'সব') {
      if (!book.categories || !book.categories.includes(category)) return false
    }

    if (status && status !== 'সব') {
      if (book.status !== status) return false
    }

    if (search && search.trim() !== '') {
      const q = search.trim().toLowerCase()
      const inTitle = (book.title || '').toLowerCase().includes(q)
      const inAuthor = (book.author || '').toLowerCase().includes(q)
      if (!inTitle && !inAuthor) return false
    }

    return true
  })
}

export function getAllCategories(books) {
  const set = new Set()
  books.forEach((book) => {
    if (Array.isArray(book.categories)) {
      book.categories.forEach((c) => set.add(c))
    }
  })
  return Array.from(set).sort((a, b) => a.localeCompare(b, 'bn'))
}
