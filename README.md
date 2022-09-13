# Development
First of all get familiarize yourself with codemirror, the docs are great place to start https://codemirror.net/6/docs/

Once you've done that, you can start writing your extension under inside the `./src` folder. You'll see that we have a simple theme extension that changes the color of the editor's lines as a template.

Simply hit the Run button to start a development server and to start using your extension. The development files are under `./dev`

You can also write tests under the `./test` folder. Here's an example of [a test file](https://github.com/codemirror/commands/blob/acab64fc3d911393b6728c1e8eacadf5c11cc9bf/test/test-commands.ts).


# Publishing

1. Make your package's title and descript inside `package.json`
2. Update this README file to include information about your package
3. Update the package's version using `yarn version` https://classic.yarnpkg.com/en/docs/cli/version
4. `yarn login` https://classic.yarnpkg.com/en/docs/cli/login
5. `yarn build`
6. `yarn publish` https://classic.yarnpkg.com/en/docs/cli/publish