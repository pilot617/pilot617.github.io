import { useEffect, useRef } from 'react';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: ensure content doesn't render as blank if IntersectionObserver doesn't fire.
    const addVisible = () => el.classList.add('visible');

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      addVisible();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          addVisible();
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    // In some navigation / deep-link cases, the callback may not fire immediately.
    // This prevents a "blank page" UX regression.
    const timeoutId = window.setTimeout(() => {
      if (!el.classList.contains('visible')) {
        addVisible();
        observer.disconnect();
      }
    }, 1500);

    return () => {
      window.clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);
  return ref;
}

export default function FadeIn({ children, className = '', stagger = false }: { children: React.ReactNode; className?: string; stagger?: boolean }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`${stagger ? 'stagger-children' : 'fade-in-section'} ${className}`}>
      {children}
    </div>
  );
}
