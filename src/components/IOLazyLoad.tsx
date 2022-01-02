import React, { Suspense, useEffect, useRef, useState } from "react";

type IOLazyLoadProps = {
  Component: React.LazyExoticComponent<React.FC<any>>;
  Loader: any;
} & any;

const IOLazyLoad: React.FC<IOLazyLoadProps> = ({
  Component,
  Loader,
  ...restProps
}): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsLoaded(entry.isIntersecting);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  if (isLoaded) {
    return (
      <div>
        <Suspense fallback={null}>
          <Component {...restProps} />
        </Suspense>
      </div>
    );
  }

  return Loader ? <Loader ref={containerRef} /> : <div ref={containerRef} />;
};

export default IOLazyLoad;
