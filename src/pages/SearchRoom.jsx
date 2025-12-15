import React, { useState } from "react";
import Window from "../components/Window";

const PAGES = [
  {
    title: "Yahoo!",
    description: "Directory-based search engine popular in the 90s",
    url: "http://www.yahoo.com"
  },
  {
    title: "AltaVista",
    description: "Early full-text web search engine",
    url: "http://www.altavista.com"
  },
  {
    title: "GeoCities",
    description: "Free personal web hosting service",
    url: "http://www.geocities.com"
  },
  {
    title: "Hotmail",
    description: "One of the first free webmail services",
    url: "http://www.hotmail.com"
  },
  {
    title: "Netscape",
    description: "Popular early web browser",
    url: "http://www.netscape.com"
  }
];

export default function SearchRoom() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function handleSearch() {
    if (!query) {
      alert("Please enter a search term.");
      return;
    }

    const filtered = PAGES.filter((page) =>
      page.title.toLowerCase().includes(query.toLowerCase()) ||
      page.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }

  return (
    <Window title="Search Room">
      <table width="100%" cellPadding="6" cellSpacing="0" border="0">
        <tbody>
          <tr>
            <td align="center">
              <b>Internet Search (1998)</b>
            </td>
          </tr>

          <tr>
            <td align="center">
              <input
                className="win95-input"
                type="text"
                size="40"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              &nbsp;
              <button
                className="win95-button"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <table width="100%" border="1" cellPadding="4">
                <tbody>
                  {results.length === 0 && (
                    <tr>
                      <td>No results.</td>
                    </tr>
                  )}

                  {results.map((page, index) => (
                    <tr key={index}>
                      <td>
                        <b>{page.title}</b><br />
                        <small>{page.url}</small>
                        <p>{page.description}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td align="right">
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
