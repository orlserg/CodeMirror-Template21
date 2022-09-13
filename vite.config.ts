import { defineConfig } from "vite"
import fs from "fs"

// for initially loading "draw.js"
function importDrawJS() {
	
	const modID = '@draw'
	const resolvedModID = '\0' + modID

	return {
		name: "importDrawJS",
		resolveId(id) {
			if (id === modID) {
				return resolvedModID
			}
		},
		load(id) {
			if (id === resolvedModID) {
				const content = fs.readFileSync("draw.js")
				return `export default \`${content.toString()}\``
			}
		}
	}
}

// for initially loading "draw.js"
function importReplID() {
	
	const modID = '@replid'
	const resolvedModID = '\0' + modID

	return {
		name: "imporReplID",
		resolveId(id) {
			if (id === modID) {
				return resolvedModID
			}
		},
		load(id) {
			if (id === resolvedModID) {
				return `export default "${process.env.REPL_ID}"`
			}
		}
	}
}

export default defineConfig({
	server: {
		host: "0.0.0.0",
		hmr: { port: 443 },
	},
	plugins: [
		importDrawJS(),
		importReplID(),
	],
})