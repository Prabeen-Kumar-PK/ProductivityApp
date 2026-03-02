import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function PageWrapper({ children }) {
  const el = useRef();

  useEffect(() => {
    gsap.fromTo(
      el.current,

      { opacity: 0, scale: 0.98 },

      { opacity: 1, scale: 1, duration: 0.5 },
    );

    return () => {
      gsap.to(el.current, {
        opacity: 0,

        duration: 0.3,
      });
    };
  }, []);

  return <div ref={el}>{children}</div>;
}

export default PageWrapper;
