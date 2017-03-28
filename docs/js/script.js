const quotes = [
	{
		quote:'Love is the only force capable of transforming an enemy into a friend.',
		source:'Martin Luther King, Jr.'
	},
	{
		quote:'My best friend is the one who brings out the best in me.',
		source:'Henry Ford'
	},
	{
		quote:'The greatest gift of life is friendship, and I have received it.',
		source:'Hubert H. Humphrey'
	},
	{
		quote:'Friends show their love in times of trouble, not in happiness.',
		source:'Euripides'
	},
	{
		quote:'One of the most beautiful qualities of true friendship is to understand and to be understood.',
		source:'Lucius Annaeus Seneca'
	},
	{
		quote:'Share your smile with the world. It\'s a symbol of friendship and peace.',
		source:'Christie Brinkley'
	},
	{
		quote:'The greatest healing therapy is friendship and love.',
		source:'Hubert H. Humphrey'
	},
	{
		quote:'There is nothing on this earth more to be prized than true friendship.',
		source:'Thomas Aquinas'
	}
],
random = max => {
	return  Math.floor(Math.random() * (max - 1));
},
printQuote = () => {
	let randNum = random(quotes.length);
	document.querySelector('.quote').textContent = quotes[randNum].quote;
	document.querySelector('.source').textContent = quotes[randNum].source;
};
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.querySelector('#loadQuote').addEventListener("click", printQuote, false);