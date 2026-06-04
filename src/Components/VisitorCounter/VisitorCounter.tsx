import { useState, useEffect } from "react";
import { Eye } from "lucide-react";

const VISITED_KEY = "pr_visited";

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const track = async () => {
      try {
        const alreadyVisited = localStorage.getItem(VISITED_KEY);

        if (alreadyVisited) {
          setCount(parseInt(alreadyVisited, 10));
          return;
        }

        const res = await fetch("/api/counter");
        if (!res.ok) throw new Error("fail");
        const data = await res.json();

        if (!cancelled && typeof data.count === "number") {
          setCount(data.count);
          localStorage.setItem(VISITED_KEY, String(data.count));
        }
      } catch {
        if (!cancelled) setCount(null);
      }
    };

    track();
    return () => { cancelled = true; };
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-1.5 text-xs text-gray-600">
      <Eye className="w-3 h-3" />
      <span className="font-mono">{count.toLocaleString()}</span>
      <span>visitas</span>
    </div>
  );
};

export default VisitorCounter;
