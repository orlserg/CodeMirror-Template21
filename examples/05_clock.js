function drawClock(pos, size = 80) {

	// Get the date info
	const date = new Date()
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()
	const color = rgb(0, 0, 0)
	
	pushTransform()
	pushTranslate(pos)

	// base
	drawCircle({
		radius: size,
		color: rgb(255, 255, 255),
		outline: {
			width: 4,
			color: color,
		},
	})

	// hour
	drawLine({
		p1: Vec2.fromAngle((hours / 12) * 360 - 90).scale(size * 0.4),
		p2: vec2(0),
		width: 4,
		color: color,
	})

	// minutes
	drawLine({
		p1: Vec2.fromAngle((minutes / 60) * 360 - 90).scale(size * 0.6),
		p2: vec2(0),
		width: 2,
		color: color,
	})

	// seconds
	drawLine({
		p1: Vec2.fromAngle((seconds / 60) * 360 - 90).scale(size * 0.7),
		p2: vec2(0),
		width: 2,
		color: rgb(255, 0, 0),
	})

	popTransform()
	
}

drawClock(vec2(244, 166))