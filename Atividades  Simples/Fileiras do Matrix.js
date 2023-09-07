function generateRandomString(length) {
  let result = '';
  const characters = '01';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Número de fileiras desejadas
const numRows = 4;

// Comprimento da string em cada fileira
const rowLength = 8;

// Loop para criar as fileiras intercaladas
for (let i = 0; i < numRows; i++) {
  const randomString = generateRandomString(rowLength);
  console.log(randomString);
}