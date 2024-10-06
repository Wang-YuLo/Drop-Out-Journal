document.addEventListener('DOMContentLoaded', () => {
  const getCopyButton = () => {
    const button = document.createElement("div")
    button.innerHTML = `Cpoy`
    button.className = 'copy-button'
    return button
  }

  const codeBlocks = document.querySelectorAll('figure.highlight')

  codeBlocks.forEach((codeBlock) => {
    const copyButton = getCopyButton();
    copyButton.onclick = () => {
      try {
        const code = codeBlock.querySelector('code').innerText
        navigator.clipboard.writeText(code);
        copyButton.innerText = 'Copied!'
      } catch {
        copyButton.innerText = 'False'
      } finally {
        setTimeout(() => {
          copyButton.innerText = 'Copy'
        }, 1000)
      }
    }
    codeBlock.appendChild(copyButton)
  })
})
