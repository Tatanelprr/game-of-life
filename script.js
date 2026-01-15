const rows = 30;
const cols = 30;
let grid = [];
let intervalId = null;
let generation = 0;

const gridContainer = document.getElementById('gridContainer');
const genCountSpan = document.getElementById('genCount');

// Initialisation de la grille
function createGrid() {
	gridContainer.innerHTML = '';
	grid = new Array(rows).fill(null).map(() => new Array(cols).fill(0));

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const cell = document.createElement('div');
			cell.classList.add('cell');
			cell.dataset.row = r;
			cell.dataset.col = c;
			cell.addEventListener('click', toggleCell);
			gridContainer.appendChild(cell);
		}
	}
}

// Interaction utilisateur : cliquer pour activer/désactiver une cellule
function toggleCell(e) {
	const r = parseInt(e.target.dataset.row);
	const c = parseInt(e.target.dataset.col);
	grid[r][c] = grid[r][c] ? 0 : 1;
	updateView();
}

// Mettre à jour l'affichage (DOM) basé sur le tableau grid
function updateView() {
	const cells = document.querySelectorAll('.cell');
	let i = 0;
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (grid[r][c] === 1) {
				cells[i].classList.add('alive');
			} else {
				cells[i].classList.remove('alive');
			}
			i++;
		}
	}
	genCountSpan.innerText = generation;
}

// Logique principale : Calculer la prochaine génération
function computeNextGen() {
	let nextGrid = grid.map(arr => [...arr]); // Copie profonde simple

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const neighbors = countNeighbors(r, c);
			const currentState = grid[r][c];

			// Règles du Jeu de la Vie
			if (currentState === 1 && (neighbors < 2 || neighbors > 3)) {
				nextGrid[r][c] = 0; // Meurt
			} else if (currentState === 0 && neighbors === 3) {
				nextGrid[r][c] = 1; // Naît
			}
		}
	}
	grid = nextGrid;
	generation++;
	updateView();
}

// Compter les voisins vivants autour d'une cellule
function countNeighbors(r, c) {
	let count = 0;
	for (let i = -1; i <= 1; i++) {
		for (let j = -1; j <= 1; j++) {
			if (i === 0 && j === 0) continue; // Ne pas se compter soi-même
			
			const x = r + i;
			const y = c + j;

			// Vérifier les limites de la grille
			if (x >= 0 && x < rows && y >= 0 && y < cols) {
				count += grid[x][y];
			}
		}
	}
	return count;
}

// Contrôles
document.getElementById('startBtn').addEventListener('click', () => {
	if (!intervalId) intervalId = setInterval(computeNextGen, 100);
});

document.getElementById('stopBtn').addEventListener('click', () => {
	clearInterval(intervalId);
	intervalId = null;
});

document.getElementById('resetBtn').addEventListener('click', () => {
	clearInterval(intervalId);
	intervalId = null;
	generation = 0;
	grid = grid.map(row => row.fill(0)); // Reset grid logic
	updateView();
});

// Lancement initial
createGrid();