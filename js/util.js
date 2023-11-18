const createElementAttribute = (name, value) => {
	return {
		name,
		value,
	};
};

const createElement = (tag, className, text, attributes) => {
	const newElement = document.createElement(tag);
	if (className) {
		newElement.className = className;
	}
	newElement.textContent = text || '';
	if (attributes && attributes.length > 0) {
		for (const attr of attributes) {
			newElement.setAttribute(attr.name, attr.value);
		}
	}
	return newElement;
};
