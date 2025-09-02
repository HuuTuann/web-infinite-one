"use client";

import { useEffect } from "react";

export function Sidebar() {
  useEffect(() => {
    console.log("Sidebar");
  }, []);

  return <div>Sidebar</div>;
}
