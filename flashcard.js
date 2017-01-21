"use strict";

function BasicCard(front, back) {
	if (!(this instanceof BasicCard)) {
		return new BasicCard(front, back);
	}

	this.front = front;
	this.back = back;
}

function ClozeCard(text, cloze) {
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}

	this.text = text;
	this.cloze = cloze;
}