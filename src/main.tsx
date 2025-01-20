import { createRoot } from "react-dom/client";
import { App } from "@/App";

const rootElement: HTMLDivElement = document.querySelector(
  "#root"
) as HTMLDivElement;
const root = createRoot(rootElement);

root.render(<App />);
