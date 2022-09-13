// Here we're going to use a little math to create some more interesting effect

const pos = vec2(329, 137)
const size = 453
// Hold 'alt' and slide this value around
const segments = 18

// Here we're basically constructing a circle from triangle fans.
for (let i = 0; i < segments; i++) {
	// Calculating
	const p1 = Vec2.fromAngle(360 / segments * i).scale(size)
	const p2 = Vec2.fromAngle(360 / segments * (i + 1)).scale(size)
	drawTriangle({
		pos: pos,
		p1: vec2(0, 0),
		p2: p1,
		p3: p2,
		// Color.fromHSL() lets us define color with HSL, where we can use the "hue" component to achieve some neat color effects
		color: Color.fromHSL(
			(i * 0.1 + time() / 2) % 1,
			0.6,
			0.8
		),
	})	
}

// Draw a sun in the middle
drawCircle({
	pos: pos,
	radius: 64 + wave(0, 16, time() * 2),
	color: rgb(242, 255, 143),
})