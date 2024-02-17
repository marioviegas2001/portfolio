import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Check if window is defined

    const textElements = document.querySelectorAll('span, a, svg, p, h1, h2, h3, h4, h5, h6, li, button, .word, .char');
    const cursor = document.querySelector('.cursor');

    if (!cursor) return; // Check if cursor exists before proceeding
    const animateCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    const scaleCursor = () => {
      cursor.style.transform = 'scale(8)';
    };

    const resetCursor = () => {
      cursor.style.transform = '';
    };

    textElements.forEach(el => {
      el.addEventListener('mouseenter', scaleCursor);
      el.addEventListener('mouseleave', resetCursor);
    });

    window.addEventListener('mousemove', animateCursor);

    return () => {
      textElements.forEach(el => {
        el.removeEventListener('mouseenter', scaleCursor);
        el.removeEventListener('mouseleave', resetCursor);
      });
      window.removeEventListener('mousemove', animateCursor);
    };
  }, []);

  if (typeof window === "undefined" || window.innerWidth <= 768) return null; // Hide the cursor on mobile devices

  return (
    <div className="cursor"></div>
  );
};

export default CustomCursor;
