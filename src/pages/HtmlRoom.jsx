import React, { useState } from "react";
import Window from "../components/Window";

export default function HtmlRoom() {
  const [code, setCode] = useState(
`<h1>Welcome to HTML</h1>
<p>This is a simple HTML preview.</p>
<ul>
  <li>HTML tags</li>
  <li>Lists</li>
  <li>Headings</li>
</ul>`
  );

  const [output, setOutput] = useState(code);

  function renderHtml() {
    setOutput(code);
  }

  return (
    <Window title="HTML Room">
      <table width="100%" cellPadding="6" cellSpacing="0" border="0">
        <tbody>
          <tr>
            <td colSpan="2">
              <p>
                Edit raw HTML on the left and render it on the right.
                This mimics early HTML editors and browsers.
              </p>
            </td>
          </tr>

          <tr>
            <td width="50%" valign="top">
              <b>HTML Source</b>
              <br />
              <textarea
                className="win95-textarea"
                rows="12"
                style={{ width: "100%" }}
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <br />
              <button
                className="win95-button"
                type="button"
                onClick={renderHtml}
              >
                Render HTML
              </button>
            </td>

            <td width="50%" valign="top">
              <b>Browser Preview</b>
              <table
                width="100%"
                height="100%"
                border="1"
                cellPadding="6"
                style={{ background: "#fff" }}
              >
                <tbody>
                  <tr>
                    <td>
                      <div
                        dangerouslySetInnerHTML={{ __html: output }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td colSpan="2" align="right">
              <button
                className="win95-button"
                type="button"
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
