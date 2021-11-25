const message = "Hello World"

// 拼接到多少位数 在前面拼接  还是在后面拼接  用什么字符拼接
const newMessage = message.padStart(15,'*').padEnd(20,'-')
console.log(newMessage);


const cardNumber = "321324234242342342341312"
const lastFourCard = cardNumber.slice(-4)
const finalCard = lastFourCard.padStart(cardNumber.length, "*")
console.log(finalCard)