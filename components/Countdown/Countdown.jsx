"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

const PromoCountdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="mx-1">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="text-center p-4 bg-black/10 min-h-[50vh] rounded-md mb-10">
      <div className="space-y-5 mt-[5rem]">
        <div className="">
          <h1 className="text-3xl capitalize">
            best offer - up to{" "}
            <span className="text-blue-400 italic font-semibold text-4xl">
              50%
            </span>
          </h1>
        </div>
        <p className="lg:px-[10rem] text-black/60">
          Explore our latest New Arrivals & unlock discounts of up to 50% off!
        </p>
      </div>
      <div className="text-2xl flex items-center justify-center mt-10">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Promo has expired!</span>
        )}
      </div>

      <div className="mt-10">
        <Button className="text-white w-1/3 lg:w-1/5 hover:bg-red-500 transition duration-500 capitalize">
          shop now
        </Button>
      </div>
    </div>
  );
};

export default PromoCountdown;
