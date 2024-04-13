export class Mino {
	x: number;
	y: number;
	width: number;
	height: number;
	ctx: CanvasRenderingContext2D;
	minos: number[][];
	fillColor: string;
	constructor(
		x: number,
		y: number,
		oneSide: number,
		ctx: CanvasRenderingContext2D,
		minos: number[][],
		fillColor: string
	) {
		this.x = x;
		this.y = y;
		this.width = oneSide;
		this.height = oneSide;
		this.ctx = ctx;
		this.minos = minos;
		this.fillColor = fillColor;
	}

	render(): void {
		this.ctx.clearRect(this.x, this.y, this.width, this.height);
		for (const row in this.minos) {
			for (const col in this.minos) {
				if (this.minos[row][col]) {
					// x座標
					const px: number = (this.x + parseInt(col)) * this.width;
					// y座標
					const py: number = (this.y + parseInt(row)) * this.height;

					// 描画
					this.ctx.beginPath();
					this.ctx.fillRect(px, py, this.width, this.height);
					this.ctx.fillStyle = this.fillColor;
					this.ctx.fill();
					this.ctx.strokeRect(px, py, this.width, this.height);
					this.ctx.strokeStyle = "#000000";
					this.ctx.stroke();
				}
			}
		}
	}

	move(e: KeyboardEvent): void | undefined {
		console.log(this.x, this.y);
		switch (e.key) {
			case "ArrowLeft":
				this.x--;
				break;
			case "ArrowRight":
				this.x++;
				break;
			case "ArrowDown":
				this.y++;
				break;
			case "Space":
				break;
			default:
				return;
		}
		this.render();
	}
}
