import { createRoot } from "react-dom/client";
import { Counter } from "./counter";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <div className="container mx-auto pt-4 px-4 flex flex-col gap-2">
    <Counter initial={0} />
    <Counter initial={10} />
    <Counter initial={20} />
  </div>
);
