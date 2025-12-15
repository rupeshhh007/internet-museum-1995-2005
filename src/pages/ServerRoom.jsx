import React, { useState, useEffect, useRef } from "react";
import Window from "../components/Window";
import { execute } from "../server/commands";

export default function ServerRoom() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState("/");
  const terminalRef = useRef(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Boot sequence
  function runBootSequence() {
    setLines([]);
    const boot = [
      "[BOOT] Initializing Internet Server v1.2",
      "[OK] Loading TCP/IP stack",
      "[OK] Starting DNS service",
      "[OK] Mounting /var/www",
      "[OK] HTTP server listening on port 80",
      "[OK] FTP server listening on port 21",
      "[READY] System online",
      ""
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLines(prev => [...prev, boot[i]]);
      i++;
      if (i >= boot.length) clearInterval(interval);
    }, 300);
  }

  useEffect(() => {
    runBootSequence();
  }, []);

  // Execute command via command engine
  function executeCommand(cmd) {
    if (!cmd) return;

    const output = execute(cmd, {
        cwd,
        setCwd,
        reboot: runBootSequence
      });
      
      if (output.includes("__CLEAR__")) {
        setLines([]);
        return;
      }
      
      if (output.length > 0) {
        setLines(prev => [
          ...prev,
          `server@localhost:${cwd}$ ${cmd}`,
          ...output,
          ""
        ]);
      }
      
  }

  function handleKey(e) {
    if (e.key === "Enter") {
      executeCommand(input.trim());
      setInput("");
    }
  }

  function quick(cmd) {
    executeCommand(cmd);
  }

  return (
    <Window title="Server Room">
      <table width="100%" border="1" cellPadding="6">
        <tbody>
          {/* TERMINAL */}
          <tr>
            <td>
              <div
                ref={terminalRef}
                style={{
                  background: "#000",
                  color: "#00ff00",
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: "13px",
                  height: "280px",
                  overflowY: "auto",
                  padding: "6px",
                  border: "2px inset #808080"
                }}
              >
                {lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}

                <div>
                  server@localhost:{cwd}$ {input}
                  <span className="blink">█</span>
                </div>
              </div>
            </td>
          </tr>

          {/* INPUT */}
          <tr>
            <td>
              <input
                className="win95-input"
                style={{ width: "100%" }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="type a command and press Enter (try: help)"
              />
            </td>
          </tr>

          {/* QUICK COMMANDS */}
          <tr>
            <td>
              <table width="100%" cellPadding="4">
                <tbody>
                  <tr>
                    <td align="center">
                      <button className="win95-button" onClick={() => quick("help")}>help</button>
                    </td>
                    <td align="center">
                      <button className="win95-button" onClick={() => quick("status")}>status</button>
                    </td>
                    <td align="center">
                      <button className="win95-button" onClick={() => quick("ls")}>ls</button>
                    </td>
                    <td align="center">
                      <button className="win95-button" onClick={() => quick("pwd")}>pwd</button>
                    </td>
                    <td align="center">
                      <button className="win95-button" onClick={() => quick("clear")}>clear</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* FOOTER */}
          <tr>
            <td align="right">
              <button
                className="win95-button"
                onClick={() => (window.location.href = "/")}
              >
                Back
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Window>
  );
}
