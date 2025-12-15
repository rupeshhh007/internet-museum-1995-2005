import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./styles/base.css";
import "./styles/window95.css";
import "./styles/crt.css";

import Lobby from "./pages/Lobby";
import EmailRoom from "./pages/EmailRoom";
import ServerRoom from "./pages/ServerRoom";
import SearchRoom from "./pages/SearchRoom";
import HtmlRoom from "./pages/HtmlRoom";

export default function App() {
  const [crtOn, setCrtOn] = useState(false);

  return (
    <div className={crtOn ? "crt" : ""}>
      <table width="100%" cellPadding="4">
        <tbody>
          <tr>
            <td align="right">
              <label>
                <input
                  type="checkbox"
                  checked={crtOn}
                  onChange={() => setCrtOn(!crtOn)}
                />{" "}
                CRT Mode
              </label>
            </td>
          </tr>
        </tbody>
      </table>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/email" element={<EmailRoom />} />
          <Route path="/servers" element={<ServerRoom />} />
          <Route path="/search" element={<SearchRoom />} />
          <Route path="/html" element={<HtmlRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
