"use client";

export function ShowScriptContent() {
  return (
    <code
      ref={(element) => {
        console.log("element", element);

        if (!element) return;

        const scripts = Array.from(document.querySelectorAll("script"));
        for (const script of scripts) {
          if (script.src) {
            fetch(script.src)
              .then((response) => response.text())
              .then((text) => {
                if (text.includes("Server validation:")) {
                  element.textContent = text;

                  const searchedText = "Server validation: You must be at least 12 to sign up";
                  const index = text.indexOf(searchedText);
                  const textElement = element.childNodes[0];

                  const range = new Range();
                  range.setStart(textElement, index);
                  range.setEnd(textElement, index + searchedText.length);
                  const highlight = new Highlight(range);
                  CSS.highlights.set("danger", highlight);

                  const selection = document.getSelection();
                  // scroll to the highlighted text
                  selection?.setBaseAndExtent(textElement, index, textElement, index + searchedText.length);
                  selection?.focusNode?.parentElement?.scrollIntoView();
                }
              });
          }
        }
      }}
    ></code>
  );
}
