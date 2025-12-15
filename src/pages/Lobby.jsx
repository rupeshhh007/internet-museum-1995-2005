import React from "react";
import Window from "../components/Window";
import StatusBar from "../components/StatusBar";

function Lobby() {
  return (
    <Window title="Internet Museum">
      <table width="100%" cellPadding="6" cellSpacing="0" border="0">
        <tbody>
          {/* INTRO */}
          <tr>
            <td>
              <p>
                Welcome to the Internet Museum (1995–2005). Wander through the early
                days of dial-up, personal homepages, blinking banners, and the clunky
                tools that shaped the web. Each room highlights a corner of that
                era—imperfect, noisy, and wonderfully human.
              </p>

              {/* MARQUEE (VERY 90s) */}
              <div className="marquee-container">
                <div className="marquee-text">
                  Welcome to the Internet Museum — Best viewed at 1024×768 —
                  Dial-up recommended — HTML 3.2 compliant —
                </div>
              </div>
            </td>
          </tr>

          {/* MAIN PANELS */}
          <tr>
            <td>
              <table width="100%" border="1" cellPadding="6">
                <tbody>
                  <tr>
                    {/* LEFT PANEL */}
                    <td width="60%" valign="top">
                      <b>Museum Control Panel</b>
                      <p>
                        Select a room below to explore a core part of early web
                        technology. Each room demonstrates real concepts using
                        simple interfaces — no abstractions, no automation.
                      </p>

                      <table width="100%" border="1" cellPadding="4">
                        <tbody>
                          <tr>
                            <td align="center">
                              <button
                                className="win95-button"
                                onClick={() => (window.location.href = "/email")}
                              >
                                Email Room
                              </button>
                            </td>
                            <td align="center">
                              <button
                                className="win95-button"
                                onClick={() => (window.location.href = "/servers")}
                              >
                                Server Room
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td align="center">
                              <button
                                className="win95-button"
                                onClick={() => (window.location.href = "/search")}
                              >
                                Search Room
                              </button>
                            </td>
                            <td align="center">
                              <button
                                className="win95-button"
                                onClick={() => (window.location.href = "/html")}
                              >
                                HTML Room
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>

                    {/* RIGHT PANEL */}
                    <td width="40%" valign="top">
                      <b>System Information</b>

                      <table width="100%" border="1" cellPadding="4">
                        <tbody>
                          <tr>
                            <td>Browser Mode</td>
                            <td>Legacy</td>
                          </tr>
                          <tr>
                            <td>Connection</td>
                            <td>Dial-up (simulated)</td>
                          </tr>
                          <tr>
                            <td>Rendering</td>
                            <td>HTML 3.2</td>
                          </tr>
                          <tr>
                            <td>Status</td>
                            <td>
                              <span className="blink">● ONLINE</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <p>
                        Tip: Rooms may be explored in any order. The experience is
                        intentionally slow and explicit to mirror early web usage.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* FOOTER TEXT */}
          <tr>
            <td>
              <small>
                Best viewed at 1024×768 • Optimized for Netscape Navigator • © 1999
              </small>
            </td>
          </tr>
        </tbody>
      </table>

      <StatusBar text="Ready • Localhost • Internet Museum v1.0" />
    </Window>
  );
}

export default Lobby;
