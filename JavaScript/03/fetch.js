fetch("/texto.txt")
  .then(response => {
    if (response.ok)
      return response.text()
  })