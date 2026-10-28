"use client";

import Link from "next/link";

export default function ScrollLink({ href, children, ...props }) {
  const handleClick = (event) => {
    if (!href?.startsWith("#")) return;

    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
