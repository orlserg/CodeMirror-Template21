// Drawing basic shapes

// drawRect() draws a rectangle
drawRect({
	// vec2() returns a 2d vector, mainly used for positions and directions
	// Try hold down the alt key and drag the vec2 label! 
	pos: vec2(54, 52),
	width: 120,
	height: 80,
	// rgb() constructs a color from RGB values. Try hold Alt and click on the rgb label!
	color: rgb(250, 242, 164),
})

// drawPolygon() draws a polygon from a list of points
drawPolygon({
	pos: vec2(141, 220),
	// Try adding more points and drag them around!
	pts: [
		vec2(0, -48),
		vec2(-64, 0),
		vec2(-32, 64),
		vec2(32, 64),
		vec2(64, 0),
	],
	color: rgb(250, 164, 226),
})

drawEllipse({
	pos: vec2(301, 89),
	radiusX: 64,
	radiusY: 40,
	color: rgb(164, 209, 250),
})

// drawTriangle() is a shortcut to drawPolygon() with only 3 points
drawTriangle({
	pos: vec2(305, 191),
	p1: vec2(0, -48),
	p2: vec2(-60, 48),
	p3: vec2(77, 32),
	color: rgb(164, 250, 204),
	angle: 68,
})

// Now try dragging a shape from the belt below and create some drawings!