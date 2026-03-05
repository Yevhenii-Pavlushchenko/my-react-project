// src/main.tsx

import { createRoot } from "react-dom/client";
import App from "./components/App";
import Mailbox from "./components/MailBox";


createRoot(document.getElementById("root") as HTMLElement).render(<App />);

<Mailbox username="aaaa" messages={["a", "b", "c"]} />