import React, { useState, useEffect } from "react";
import Window from "../components/Window";
import StatusBar from "../components/StatusBar";

export default function EmailRoom() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [inbox, setInbox] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("museumInbox");
    if (saved) {
      setInbox(JSON.parse(saved));
    }
  }, []);

  function handleSend() {
    if (!to || !subject || !body) {
      alert("All fields are required.");
      return;
    }

    const mail = {
      to,
      subject,
      body,
      time: new Date().toLocaleString()
    };

    const updated = [mail, ...inbox];
    setInbox(updated);
    localStorage.setItem("museumInbox", JSON.stringify(updated));

    setTo("");
    setSubject("");
    setBody("");
  }

  return (
    <Window title="Email Room">
      <table width="100%" border="1" cellPadding="6">
        <tbody>
          {/* TOP: COMPOSE */}
          <tr>
            <td colSpan="2">
              <b>Compose Message</b>
              <table width="100%" border="1" cellPadding="4">
                <tbody>
                  <tr>
                    <td width="80">To</td>
                    <td>
                      <input
                        className="win95-input"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Subject</td>
                    <td>
                      <input
                        className="win95-input"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Message</td>
                    <td>
                      <textarea
                        className="win95-textarea"
                        rows="3"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" align="right">
                      <button className="win95-button" onClick={handleSend}>
                        Send
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* MIDDLE: MAIL CLIENT */}
          <tr>
            <td width="25%" valign="top">
              <b>Folders</b>
              <table width="100%" border="1" cellPadding="4">
                <tbody>
                  <tr><td>Inbox</td></tr>
                  <tr><td>Sent</td></tr>
                  <tr><td>Drafts</td></tr>
                  <tr><td>Trash</td></tr>
                </tbody>
              </table>
            </td>

            <td width="75%" valign="top">
              <b>Inbox</b>
              <table width="100%" border="1" cellPadding="4">
                <tbody>
                  {inbox.length === 0 && (
                    <tr><td>No messages.</td></tr>
                  )}

                  {inbox.map((mail, i) => (
                    <tr
                      key={i}
                      onClick={() => setSelected(mail)}
                      style={{ cursor: "pointer" }}
                    >
                      <td>
                        <b>{mail.subject}</b><br />
                        <small>{mail.to} • {mail.time}</small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>

          {/* BOTTOM: MESSAGE VIEW */}
          <tr>
            <td colSpan="2">
              <b>Message Viewer</b>
              <table width="100%" border="1" cellPadding="6">
                <tbody>
                  {!selected && (
                    <tr><td>Select a message to view.</td></tr>
                  )}

                  {selected && (
                    <tr>
                      <td>
                        <b>To:</b> {selected.to}<br />
                        <b>Subject:</b> {selected.subject}<br />
                        <small>{selected.time}</small>
                        <p>{selected.body}</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </td>
          </tr>

          {/* FOOTER */}
          <tr>
            <td colSpan="2" align="right">
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

      <StatusBar text="Inbox Ready • Messages Loaded" />
    </Window>
  );
}
