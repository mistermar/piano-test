export default {

	root( width, height ) {

		return {
			width: width || `100%`,
			height: height || 400,
			border: `1px solid #000`,
			margin: `30px 0`
		};

	},

	scatter: {

		data: {
			stroke: `#fff`,
			strokeWidth: 3,
			fill: `#00a3d6`
		}
	},

	line: {
		data: {
			strokeWidth: 3,
			stroke: `#00a3d6`
		}
	},

	axis: {
		ticks: {
			stroke: `red`,
			strokeWidth: 3,
			size: 4
		}
	}

};
