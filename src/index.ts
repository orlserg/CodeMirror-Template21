import {EditorView} from "@codemirror/view"
import {Extension} from "@codemirror/state"

const myThemeExtension = EditorView.baseTheme({
  "&light .cm-line:nth-child(even)": {backgroundColor: "black", color: "white"},
})

export default function createExtension(): Extension {
  return myThemeExtension;
}