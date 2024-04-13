import "./style.css";
import { Mino } from "./tetro";

const blockSize: number = 20;
const troutXMax = 10; // x座標の最大値
const troutYMax = 20; // y座標の最大値
const canvas = document.querySelector<HTMLCanvasElement>("canvas");
if (canvas) {
	canvas.width = blockSize * troutXMax;
	canvas.height = blockSize * troutYMax;
}
const ctx = canvas?.getContext("2d");

const main = () => {
	if (!ctx || !canvas) throw new Error();

	// I-mino
	const im = new Mino(
		0,
		0,
		blockSize,
		ctx,
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
		],
		"#A9CEEC"
	);

	im.render();
	window.addEventListener("keydown", (e) => {
		if (im.y < troutYMax) im.move(e);
	});
	window.addEventListener("keyup", () => {
		im.render();
	});
};

window.onload = () => main();
