// This one demonstrates how to use shapes to compose a simple drawing and animation

// All our shapes will use this outline
const outline = {
	width: 4,
	color: rgb(0, 0, 0),
}

// Draw background
drawRect({
	// width() and height() give you the canvas size
	width: width(),
	height: height(),
	color: rgb(206, 85, 155),
})

// Wrap everything in a function so we can draw many cars
function drawCar(pos) {

	pushTransform()
	pushTranslate(pos)

	// Applying
	pushTransform()
	// wave(min, max, time) is a function that gives you an interpolated value on a sine wave, we'll use this a lot to achieve a smooth animation
	pushTranslate(vec2(0, wave(-2, 0, time() * 12)))
	
	// Draw the body of the car
	drawPolygon({
		pos: vec2(64, 0),
		pts: [
			vec2(0),
			vec2(-64, 81),
			vec2(-62, 111),
			vec2(221, 109),
			vec2(221, 79),
			vec2(129, 1),
		],
		color: rgb(39, 185, 129),
		outline,
	})

	// Draw the first window
	drawPolygon({
		pos: vec2(79, 18),
		pts: [
			vec2(0),
			vec2(-31, 45),
			vec2(39, 44),
			vec2(37, 0),
		],
		color: rgb(95, 205, 242),
		outline,
	})

	// Draw the second window
	drawPolygon({
		pos: vec2(139, 17),
		pts: [
			vec2(0),
			vec2(-1, 47),
			vec2(84, 44),
			vec2(47, 0),
		],
		color: rgb(95, 205, 242),
		outline,
	})

	popTransform()

	// Draw 2 wheels
	for (let i = 0; i < 2; i++) {
		drawEllipse({
			pos: vec2(80, 109).add(i * 106, 0),
			radiusX: 33,
			radiusY: 35,
			outline,
			// The rotation is based on time, plus we have different radiusX and radiusY above, thus we get a rolling animation!
			angle: time() * 360 + i * 40,
			color: rgb(204, 219, 128),
		})
	}

	popTransform()
	
}

// What if we parameterize more things, like the size of the car? The speed of animation? The color?
drawCar(vec2(109, 104))