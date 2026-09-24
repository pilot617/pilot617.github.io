import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import Layout from './components/Layout';
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));

export default function App() {
  return (
    <Suspense
      fallback={
        <Layout>
          <div className="container page-loading" role="status">
            Opening the notebook…
          </div>
        </Layout>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route
          path="*"
          element={
            <Layout>
              <div className="container empty-state not-found">
                <p className="eyebrow accent">404 / A SMALL DETOUR</p>
                <h1>Nothing built here. Yet.</h1>
                <p>Let’s get you back to something good.</p>
                <Link className="button button-primary" to="/">
                  Back to home ↗
                </Link>
              </div>
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
}
