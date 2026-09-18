"use client";

import { useEffect, useState } from "react";

function formatIN(t: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(t);

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";

  return `${get("month")}.${get("day")}, ${get("hour")}:${get("minute")} ${get("dayPeriod").toUpperCase()}`;
}

export default function Clock() {
  const [now, setNow] = useState<string>(() => formatIN(new Date()));

  useEffect(() => {
    const tick = () => {
      const next = formatIN(new Date());
      setNow((prev) => (prev === next ? prev : next));
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p
      className="pointer-events-none select-none text-sm leading-tight text-ink/80 sm:text-base"
      aria-live="off"
    >
      <span aria-hidden className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-leaf align-middle" />{" "}
      Now is {now} in Ahmedabad
    </p>
  );
}