export class CanvasChar {
	x: number;
	y: number;
	dx: number;
	dy: number;
	spd: number;
	width: number;
	height: number;
	ctx: CanvasRenderingContext2D;
	strokeStyle: any;
	fillStyle: any;

	constructor(
		x: number,
		y: number,
		dx: number,
		dy: number,
		spd: number,
		width: number,
		height: number,
		ctx: CanvasRenderingContext2D,
		fillStyle: string,
		strokeStyle: string
	) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.spd = spd;
		this.width = width;
		this.height = height;
		this.ctx = ctx;
		this.fillStyle = fillStyle;
		this.strokeStyle = strokeStyle;
	}

	render() {
		this.ctx.beginPath();
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
		this.ctx.fillStyle = this.fillStyle;
		this.ctx.fill();

		this.ctx.strokeRect(this.x, this.y, this.width, this.height);
		this.ctx.strokeStyle = this.strokeStyle;
		this.ctx.stroke();
		this.ctx.closePath();
	}

	moveX() {
		this.x += this.spd;
		this.render();
	}

	moveY() {
		this.y += this.spd;
		this.render();
	}
}
