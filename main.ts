import initDrawCode from "@draw"
import replID from "@replid"
import kaboom from "kaboom"

const canvas = document.querySelector("#draw")

const k = kaboom({
	global: false,
	canvas: canvas as HTMLCanvasElement,
	width: 480,
	height: 320,
	// debug: false,
})

let drawCode = initDrawCode
let lastDrawCode = null
let curRecording = null

const allowedOrigin = `https://${replID}.id.repl.co`;

window.addEventListener("message", (e) => {
	if (e.origin !== allowedOrigin) {
		return;
	}
	switch (e.data?.action) {
		case "FILE_UPDATE":
			if (e.data.file === "draw.js") {
				drawCode = e.data.content
				k.debug.clearLog()
			}
			break
		case "REQUEST_SCREENSHOT":
			const a = document.createElement('a')
			document.body.appendChild(a)
			a.setAttribute('style', 'display: none')
			a.href = k.screenshot()
			a.download = "kaboomdraw.png"
			a.click()
			document.body.removeChild(a)
			break
		case "REQUEST_TOGGLE_RECORD":
			if (curRecording) {
				curRecording.download("kaboomdraw.mp4")
				curRecording = null
				document.querySelector("#record")?.remove()
			} else {
				curRecording = k.record()
				const r = document.createElement("div")
				r.id = "record"
				r.style.position = "fixed"
				r.style.left = "12px"
				r.style.bottom = "12px"
				r.style.zIndex = "100"
				r.style.color = "red"
				r.style.fontFamily = "Sans-Serif"
				r.innerHTML = "Recording..."
				document.body.appendChild(r)
			}
			break;
	}
})

const whitelist = [
	"vec2",
	"rgb",
	"hsl2rgb",
	"width",
	"height",
	"center",
	"time",
	"dt",
	"isFocused",
	"isTouch",
	"mousePos",
	"mouseWorldPos",
	"mouseDeltaPos",
	"isKeyDown",
	"isKeyPressed",
	"isKeyReleased",
	"isMouseDown",
	"isMousePressed",
	"isMouseReleased",
	"isMouseMoved",
	"rand",
	"randi",
	"choose",
	"chance",
	"lerp",
	"map",
	"mapc",
	"dir",
	"wave",
	"deg2rad",
	"rad2deg",
	"drawCircle",
	"drawRect",
	"drawLine",
	"drawLines",
	"drawTriangle",
	"drawEllipse",
	"drawPolygon",
	"drawText",
	"drawMasked",
	"drawSubtracted",
	"pushTransform",
	"pushTranslate",
	"pushScale",
	"pushRotate",
	"popTransform",
	"Vec2",
	"Color",
	"debug",
]

const toWrap = [
	"drawSprite",
	"drawUVQuad",
]

for (const f of whitelist) {
	window[f] = k[f]
}

const errored = {}

for (const f of toWrap) {
	window[f] = (opt) => {
		// handle inline image dataurl
		if (opt.sprite?.startsWith("data:image/")) {
			if (errored[opt.sprite]) {
				k.debug.log(errored[opt.sprite])
				return
			}
			const spr = k.getSprite(opt.sprite)
			if (!spr) {
				k.loadSprite(opt.sprite, opt.sprite)
					.catch((e) => {
						errored[opt.sprite] = e
						k.debug.log(e)
					})
				return
			}
		}
		// handle inline frag shader
		if (opt.shader) {
			if (errored[opt.shader]) {
				k.debug.log(errored[opt.shader])
				return
			}
			const shader = k.getShader(opt.shader)
			if (!shader) {
				k.loadShader(opt.shader, null, opt.shader)
					.catch((e) => {
						errored[opt.sprite] = e
						k.debug.log(e)
					})
				return
			}
		}
		k[f](opt)
	}
}

let state = null

window.init = (s) => {
	if (!state) {
		state = typeof s === "function" ? s() : s
	}
	return state
}

k.onDraw(() => {
	if (drawCode) {
		try {
			eval(drawCode)	
			lastDrawCode = drawCode
		} catch (e) {
			if (lastDrawCode) {
				eval(lastDrawCode)
			}
			k.debug.log(e)
		}
	}
})