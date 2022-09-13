// Shader
// drawUVQuad() draws a rectangle with uv data
// The custom fragment shader expects a function frag() that takes in the vertex position, the texture coordinate (uv), the vertex color, and the texture
drawUVQuad({
	width: width(),
	height: height(),
	shader: `
uniform float u_time;
uniform vec2 u_mpos;
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	vec2 pp = uv - u_mpos;
	float angle = atan(pp.y, pp.x);
	float dis = length(pp);
	float c = sin(dis * 48.0 + u_time * 8.0 + angle);
	return vec4(c, c, c, 1);
}
	`,
	uniform: {
		"u_time": time(),
		"u_mpos": mousePos().scale(1 / width(), 1 / height()),
	},
})