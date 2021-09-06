const getHeavier = (w1, w2, w3) => {
	if (w1 < w2) {
		w1 = w2;
	}
	if (w1 < w3) {
		w1 = w3;
	}
	return w1;
};

console.log(getHeavier(12, 45, 70)); //70
