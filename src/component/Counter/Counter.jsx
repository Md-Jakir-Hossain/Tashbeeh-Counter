/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState({ a: 0, b: 0, c: 0 });

  const subhanAllah = () => {
    setCount((prev) => {
      const counting = {
        ...prev,
        a: prev.a < 33 ? prev.a + 1 : prev.a,
      };
      console.log(prev);
      return counting;
    });
  };

  const alhamdulillah = () => {
    setCount((prev) => {
      const counting = {
        ...prev,
        b: prev.b < 33 ? prev.b + 1 : prev.b,
      };
      return counting;
    });
  };
  const allahuakbar = () => {
    setCount((prev) => {
      const counting = {
        ...prev,
        c: prev.c < 34 ? prev.c + 1 : prev.c,
      };
      return counting;
    });
  };
  const total = () => {
    setCount((prev) => {
      const counting = {
        ...prev,
        c: prev.a + prev.b + prev.c,
      };
      return counting;
    });
  };
  return (
    <div>
      <h1>Tashbeeh Counter</h1>
      <hr></hr>
      <div className="main">
        <h1 className="head">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h1>
        <h1>{count.a + count.b + count.c}</h1>
        <button onClick={() => setCount({ a: 0, b: 0, c: 0 })}>reset</button>
        <div className="btn">
          <div className="single">
            <h1>{count.a}</h1>
            <button onClick={subhanAllah}>سبحان الله</button>
          </div>
          <div className="single">
            <h1>{count.b}</h1>
            <button onClick={alhamdulillah}>ٱلْحَمْدُ لِلّٰهِ</button>
          </div>

          <div className="single">
            <h1>{count.c}</h1>
            <button onClick={allahuakbar}>اللَّهُ أَكْبَرُ</button>
          </div>
          <div className="single"></div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Counter;
