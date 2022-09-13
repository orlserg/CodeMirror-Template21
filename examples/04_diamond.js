// A pretty polygon

// A shortcut for time() * n
const t = (n = 1) => time() * n
// A shortcut for wave() with time of t(n), so we can have multiple waves with different intervals
const w = (a, b, n) => wave(a, b, t(n))

drawPolygon({
	pos: vec2(230, 164),
	pts: [
		vec2(w(-10, 10, 2), -80),
		vec2(80, w(-10, 10, 4)),
		vec2(w(30, 50, 4), 80),
		vec2(-30, w(50, 70, 2)),
		vec2(w(-50, -70, 4), 0),
	],
	// Define the color for each polygon points
	colors: [
		rgb(w(128, 255, 8), 255, w(128, 255, 4)),
		rgb(255, w(128, 255, 8), w(128, 255, 4)),
		rgb(w(128, 255, 8), w(128, 255, 4), 255),
		rgb(255, 128, w(128, 255, 4)),
		rgb(w(128, 255, 8), w(128, 255, 4), 128),
	],
	outline: {
		width: 4,
		color: rgb(0, 0, 0),
	},
})