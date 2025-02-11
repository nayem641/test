import React from 'react'

export default function Story() {
  return (
    <div>
      <h2 style={{ color: "red" }}>Webpage is under development</h2>
      <button
        onClick={() => {
          window.location.href = "/";
        }}
      >
        go home
      </button>
    </div>
  );
}
