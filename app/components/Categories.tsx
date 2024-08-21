import { categories } from "@/data/categories";
import Link from "next/link";
import { useState } from "react";

export default function Categories() {
  return (
    <>
      <div>
        {categories.map((cat, index) => (
          <a>{cat.name}</a>
        ))}
      </div>
    </>
  );
}
