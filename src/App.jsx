import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import BookDetail from "./pages/BookDetail.jsx";
import booksData from "./data/books.json";

function App() {
  return (
    <div className="app">
      <Header totalBooks={booksData.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <main className="container">
      <div className="not-found">
        <div className="not-found__code">৪০৪</div>
        <h2 className="not-found__title">পৃষ্ঠা পাওয়া যায়নি</h2>
        <p className="not-found__text">
          আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি অস্তিত্বে নেই।
        </p>
        <a href="#/" className="btn-home">
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
        </a>
      </div>
    </main>
  );
}

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <p className="footer__text">
//           তৈরি করেছেন <span className="footer__accent">হযরত আলী</span> — একটি ব্যক্তিগত পাঠতালিকা
//         </p>
//       </div>
//     </footer>
//   )
// }
const SOCIAL_LINKS = [
  {
    label: "ফেইসবুক",
    href: "https://www.facebook.com/ali.arbiter",
    color: "#1877F2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "ইউটিউব",
    href: "https://www.youtube.com/@ali.arbiter",
    color: "#FF0000",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="white"
        />
      </svg>
    ),
  },
  {
    label: "হোয়াটসঅ্যাপ",
    href: " https://wa.me/8801996770866",
    color: "#25D366",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.557 4.122 1.526 5.855L.057 23.882l6.18-1.449A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.385l-.36-.214-3.733.875.944-3.63-.234-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__social">
          {SOCIAL_LINKS.map(({ label, href, color, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              style={{ "--social-color": color }}
              aria-label={label}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
        <p className="footer__text">
          তৈরি করেছেন{" "}
          <a href="https://www.facebook.com/invalid.hazrat.ali">
            {" "}
            <span className="footer__accent">হযরত আলী</span>
          </a>{" "}
          — একটি ব্যক্তিগত পাঠতালিকা
        </p>
      </div>
    </footer>
  );
}
export default App;
