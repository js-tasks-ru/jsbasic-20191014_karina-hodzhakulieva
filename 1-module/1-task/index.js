/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let result = m;
	for (let x = 1; x < n; x++) {
		result *= m;
	}
	return result;

	};

	let first_number = prompt ('Введите число', '');
	let second_number = prompt ('Введите его степень', '');
	
	alert("Ответ: " + pow(first_number, second_number));
	

}
