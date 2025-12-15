import React from "react";
import "../styles/window95.css";

function Window({ title, children }) {
  return (
    <div
      className="win95-window"
      style={{ width: "900px", margin: "20px auto" }}
    >
      <table width="100%" cellPadding="0" cellSpacing="0" border="0">
        <tbody>
          {/* TITLE BAR */}
          <tr>
            <td className="win95-titlebar">
              <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                  <tr>
                    <td className="win95-title">{title}</td>
                    <td align="right" width="24">
                      <button
                        className="win95-button"
                        type="button"
                        tabIndex="-1"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* MENU BAR */}
          <tr>
            <td className="win95-menubar">
              <span className="win95-menu-item">File</span>
              <span className="win95-menu-item">Edit</span>
              <span className="win95-menu-item">View</span>
              <span
                className="win95-menu-item"
                onClick={() =>
                  alert("Internet Museum\nVersion 1.0\nHTML • CSS • JavaScript")
                }
              >
                Help
              </span>
            </td>
          </tr>

          {/* CONTENT */}
          <tr>
            <td className="win95-content">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Window;
