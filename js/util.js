const createElement = (type, className, text) => {
	const newElement = document.createElement(type);
	if (className) {
		newElement.className = className;
	}
	newElement.textContent = text || '';

	return newElement;
};

const createLinkElement = (href, className, text, rel, target) => {
	const newLinkElement = document.createElement('a');
	newLinkElement.href = href;
	if (className) {
		newLinkElement.className = className;
	}
	newLinkElement.textContent = text || '';
	if (rel) {
		newLinkElement.rel = rel;
	}
	if (target) {
		newLinkElement.target = target;
	}

	return newLinkElement;
};

const createImageElement = (src, className, alt, width, height) => {
	const newImageElement = document.createElement('img');
	newImageElement.src = src;
	if (className) {
		newImageElement.className = className;
	}
	newImageElement.alt = alt || '';
	if (width) {
		newImageElement.width = width;
	}
	if (height) {
		newImageElement.height = height;
	}

	return newImageElement;
};
