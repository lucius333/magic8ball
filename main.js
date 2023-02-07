let userName = prompt('What\'s your name?');
const userQuestion = prompt('What\'s your question?');
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
let myParagraph = document.querySelector("p");
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log(`${userName} asked: ${userQuestion}`);

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'It is uncertain';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'It seems not';
    break;
  case 7:
    eightBall = 'Signs point to yes';
  default:
    console.log(`There appears to be a problem ${userName}! Please contact nine bal services.`);
}

myParagraph.textContent = (`Magic8Ball says: ${eightBall}`);