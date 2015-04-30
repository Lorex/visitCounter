Visit Counter
=============

A simple website visit counter.

### Installation
`$ npm install git+https://git@github.com/Lorex/visitCounter.git`

### Demo
`$ node demo.js`

### API
- Frontend
	- `counter.getVisit()` - Get current visit count.
- Console
	- `counter.status()` - Show current status in console.
	- `counter.getLineDesplay()` - Get lines of history that display in console.
	- `counter.setLineDisplay()` - Set lines of history to display in console.
- Control
	- `counter.addVisit()` - Add a visit.
	- `counter.purge()` - Reset counter and clean history log.
	- `counter.addStatus(str)` - Add a status to history log.