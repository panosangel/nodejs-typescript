# Debugging

## Instructions for WebStorm

1. Add in `package.json` under scripts
```json
{
  "dev": "nodemon"
}
```

2. Add in nodemon configuration (nodemon.json) the command to enable debugging
```json
{
  "exec": "node --inspect --require ts-node/register ./src/index.ts"
}
```

3. Add in nodemon configuration (nodemon.json) the option to deal with the bug of nodemon & node-ts combination not killing child processes  
```json
{
  "signal": "SIGHUP"
}
```

4. Run the `dev` npm script with debug on and enjoy!

## Sources

- [Node.js with TypeScript, Debug inside VSCode and Nodemon](https://dev.to/oieduardorabelo/nodejs-with-typescript-debug-inside-vscode-and-nodemon-23o7)
- [TypeScript Pedia - Debugging](https://typescript.programmingpedia.net/en/tutorial/9131/debugging)
- [JetBrains - Running and debugging Node.js](https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html)
- [JetBrains - Running and debugging TypeScript](https://www.jetbrains.com/help/webstorm/running-and-debugging-typescript.html)
- [Nodemon frequently leaves the child process running (detached) #1025](https://github.com/remy/nodemon/issues/1025)
