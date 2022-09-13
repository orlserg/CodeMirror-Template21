// background
drawRect({
	pos: vec2(0),
	width: width(),
	height: height(),
	color: rgb(0, 0, 0),
});

drawCircle({
	pos: vec2(100, 100),
	radius: drawText({
	text: "122xxx<hr>h",
	pos: vec2(60, 60),
}),
	color: rgb(181, 164, 250),
})
// stars
for (let i = 0; i < 3; i++) {
	drawCircle({
		pos: vec2(rand(0, width()), rand(0, height())),
		radius: 1,
		color: rgb(255, 255, 255),
	})
}

function drawPlanet(opt = {
	offset: 0,
	color: rgb(255, 255, 255),
	size: 12,
	revolution: 0,
	rotation: 0,
	children: null,
}) {

	// transform functions like pushTanslate(), pushScale(), pushRotate() affect all subsequent draws

	// pushTransform() is similar to p5js's push(), or canvas 2d's save(), it saves the current transform, which calling popTransform() will recover
	pushTransform()

	// draw rail
	drawCircle({
		radius: opt.offset,
		fill: false,
		outline: {
			width: 1,
			color: rgb(36, 36, 36)
		},
	})

	// rotation around parent
	pushRotate(time() * opt.revolution)
	// offset to parent
	pushTranslate(vec2(opt.offset, 0))
	// self rotation
	pushRotate(time() * opt.rotation)

	// draw planet itself
	drawCircle({
		radius: opt.size,
		color: opt.color,
	})

	// draw children planet here, if any
	if (opt.children) {
		opt.children()
	}

	popTransform()
	
}

pushTransform()

// sun's position
pushTranslate(vec2(237, 162))
pushScale(wave(1, 1.2, time()))

// sun
drawCircle({
	radius: 22,
	color: rgb(255, 214, 66),
})

// earth
drawPlanet({
	offset: 69,
	size: 12,
	revolution: 166,
	rotation: 0,
	color: rgb(66, 217, 255),
	children: () => {
		drawPlanet({
			offset: 24,
			size: 3,
			revolution: 166,
			rotation: 0,
			color: rgb(255, 255, 255),
		})
	}
})

// mercury
drawPlanet({
	offset: 40,
	size: 6,
	revolution: 120,
	rotation: 0,
	color: rgb(123, 66, 255),
})

// mars
drawPlanet({
	offset: 100,
	size: 9,
	revolution: 88,
	rotation: 0,
	color: rgb(255, 66, 123),
})

// saturn
drawPlanet({
	offset: 143,
	size: 9,
	revolution: 59,
	rotation: 0,
	color: rgb(180, 96, 75),
	children: () => {
		drawPlanet({
			offset: 21,
			size: 3,
			revolution: 73,
			rotation: 0,
			color: rgb(91, 154, 98),
		})
	}
})

popTransform()