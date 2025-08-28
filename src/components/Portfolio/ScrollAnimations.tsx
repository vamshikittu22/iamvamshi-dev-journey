import { useEffect } from "react";

const ScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    // Observe all fade-in and slide-in elements
    const animatedElements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right"
    );
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return null;
};

export default ScrollAnimations;