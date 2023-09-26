async function fetchData() {
	const request = new Request('https://raw.githubusercontent.com/myrhisyoinked/frontend-playground/main/Results%20summary%20component/data.json');
	const response = await fetch(request);

	const scores = await response.json();

	addScore(scores);
}

function addScore(obj) {
	const myList = document.querySelector('ul');
	for (const score of obj) {
		const listItem = document.createElement('li');
		let categorySpan;
		const categoryIcon = `<img src="${score.icon}" alt="${score.category}" />`;

		listItem.setAttribute('id', score.category.toLowerCase());

		categorySpan = categoryIcon;
		categorySpan += ` ${score.category}`;

		listItem.innerHTML += `<span>${categorySpan}</span>`;

		const totalScore = document.createElement('span');
		totalScore.setAttribute('class', 'total-score');
		totalScore.textContent += ' / 100';

		const activeScore = document.createElement('span');
		activeScore.setAttribute('class', 'active-score');
		activeScore.textContent = score.score;

		totalScore.prepend(activeScore);
		listItem.appendChild(totalScore);

		myList.appendChild(listItem);
	}
}

fetchData();