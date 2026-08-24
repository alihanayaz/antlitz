import { Button } from "antlitz";

export function Document() {
  return (
    <div className="typeset w-full max-w-lg">
      <h2>Setting long-form content</h2>
      <p>
        Typeset styles content rendered from data, where every node arrives as a
        plain element and there is nothing to wrap in a component.
      </p>
      <ul>
        <li>Headings mirror the Heading component’s scale</li>
        <li>
          Space between blocks scales with each block’s own size
          <ul>
            <li>Nested lists sit closer than separate blocks</li>
          </ul>
        </li>
      </ul>
      <blockquote>
        <p>A quotation, set off by a rule on the inline start edge.</p>
      </blockquote>
      <p>
        Inline <code>code</code>, a <a href="#typeset">link</a>, and a{" "}
        <kbd>⌘K</kbd> key.
      </p>
    </div>
  );
}

export function OptOut() {
  return (
    <div className="typeset w-full max-w-lg">
      <p>Styled by Typeset.</p>
      <div className="not-typeset flex flex-col gap-2">
        <p>Opted out — this paragraph keeps the browser’s defaults.</p>
        <Button size="sm" className="w-fit">
          Components keep their own styling
        </Button>
      </div>
    </div>
  );
}
