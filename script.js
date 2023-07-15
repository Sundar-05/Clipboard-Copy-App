function copyToClipboard() {
  const text = prompt("Enter the text to copy:"); // Prompt the user for input
  if (text) {
    // Check if the user entered a value
    copy_to_Clipboard(text);
  }
}

function copy_to_Clipboard(text) {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);

  let selected = false;
  const selection = window.getSelection();
  if (selection.toString().length > 0) {
    selected = selection.toString();
  }

  el.select();

  navigator.clipboard.writeText(text)
    .then(() => {
      console.log("Text copied to clipboard successfully!");
    })
    .catch((error) => {
      console.error("ERROR", error);
    });

  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}
