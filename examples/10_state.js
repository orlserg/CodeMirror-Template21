// Persistent state

// init() is the only non-kaboom function that's exclusive in Kaboom Draw, it allows you to operate on a persistent state, instead of every frame is independent
// pass the initial state to the function, any update to this state requires reload
const state = init({
	trail: [],
})

if (isMouseMoved()) {
	state.trail.push({
		pos: mousePos(),
		color: rgb(
			wave(128, 255, time() * 4),
			wave(128, 255, time() * 2),
			255,
		),
	})
}

// black background
drawRect({
	width: width(),
	height: height(),
	color: rgb(0, 0, 0),
})

// draw the mouse trail
for (let i = 0; i < state.trail.length - 1; i++) {
	drawLine({
		p1: state.trail[i].pos,
		p2: state.trail[i + 1].pos,
		width: 3,
		color: state.trail[i].color,
	})
}