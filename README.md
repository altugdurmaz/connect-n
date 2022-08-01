## Installation

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 12.13 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install
```
## Usage
Start the server:
```console
$ N=5 npm start
```
“N” is the number of pieces that need to line up in order for a player to win

if you didn't set a "N", there are will be default value 4

```console
$ npm start
```

## Big O notation
Complexity `O((A+4B)*AB)`
Number of moves AxB
