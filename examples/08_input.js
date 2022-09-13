// isKeyDown() checks if a key is currently down
if (isKeyDown("space") || isMouseDown("left")) {
	drawTriangle({
		pos: mousePos(),
		p1: vec2(0, -48),
		p2: vec2(-60, 48),
		p3: vec2(60, 48),
		color: rgb(164, 250, 204),
		angle: time() * 120,
	})
}