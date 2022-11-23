import React from "react";
import Button from "../components/Button";
export default function test() {
  return (
    <div style={{ fontSize: "2rem", padding: 30 }}>
      <Button
        // Accordion에 넘겨줄 props
        title="This is a Title"
        content="This is a content"
      />
    </div>
  );
}
