import React, { useEffect, useRef, useState } from "react";

export default function Numbers() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const elementRef = useRef();
  const intervalRef1 = useRef(null);
  const intervalRef2 = useRef(null);
  const intervalRef3 = useRef(null);
  const target1 = 20;
  const target2 = 1500;
  const target3 = 50000;

  function startCount() {
    clearInterval(intervalRef1.current);
    clearInterval(intervalRef2.current);
    clearInterval(intervalRef3.current);

    intervalRef1.current = setInterval(() => {
      setCount1((prev) => {
        if (prev >= target1) {
          clearInterval(intervalRef1.current);
          return target1;
        }
        return prev + 1;
      });
    }, 75);
    intervalRef2.current = setInterval(() => {
      setCount2((prev) => {
        if (prev >= target2) {
          clearInterval(intervalRef2.current);
          return target2;
        }
        return prev + 37;
      });
    }, 37);
    intervalRef3.current = setInterval(() => {
      setCount3((prev) => {
        if (prev >= target3) {
          clearInterval(intervalRef3.current);
          return target3;
        }
        return prev + 1250;
      });
    }, 37);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setCount1(0);
          setCount2(0);
          setCount3(0);
          startCount();
        } else {
          clearInterval(intervalRef1.current);
          clearInterval(intervalRef2.current);
          clearInterval(intervalRef3.current);
          setCount1(0);
          setCount2(0);
          setCount3(0);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
      clearInterval(intervalRef1.current);
      clearInterval(intervalRef2.current);
      clearInterval(intervalRef3.current);
    };
  }, []);

  return (
    <div
      ref={(ref) => {
        elementRef.current = ref;
      }}
      className="bg-[var(--bg)] p-1 flex justify-center"
      
    >
      <div className="max-w-[1300px] flex justify-center mb-10 max-md:flex-col max-md:gap-10">
        <div className="flex flex-col px-20">
          <h1 className="text-[var(--text2)] text-[clamp(2rem,4vw,5rem)] font-bold text-center">
            {count1}+
          </h1>
          <p className="text-[var(--text)] font-medium text-[20px] text-center">
            Expert-Led Internships
          </p>
        </div>
        <div className="flex flex-col border-l-2 px-20 border-white max-md:border-0">
          <h1 className="text-[var(--text2)] text-[clamp(2rem,4vw,5rem)] font-bold text-center">
            {count2}+
          </h1>
          <p className="text-[var(--text)] font-medium text-[20px] text-center">
            Successful Graduates
          </p>
        </div>
        <div className="flex flex-col border-l-2 px-20 border-white max-md:border-0">
          <h1 className="text-[var(--text2)] text-[clamp(2rem,4vw,5rem)] font-bold text-center">
            {count3}+
          </h1>
          <p className="text-[var(--text)] font-medium text-[20px] text-center">
            LinkedIn Followers
          </p>
        </div>
      </div>
    </div>
  );
}
