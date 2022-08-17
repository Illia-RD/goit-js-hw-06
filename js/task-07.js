const fontSizeRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.cssText = `
font-size: ${Number(fontSizeRange.value)}px;
 transition: font-size 150ms;
`;
fontSizeRange.addEventListener(
  'input',
  () => (text.style.fontSize = `${Number(fontSizeRange.value)}px`)
);
