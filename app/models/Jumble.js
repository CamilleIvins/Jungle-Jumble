import { generateId } from "../utils/generateId.js"



export class Jumble {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.body = data.body
        // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
        this.fastestTime = null
        this.startTime = null
        this.endTime = null
        console.log('constructor for model');
    }

    get jumbleTemplate() {
        return /*html*/`
        <button onclick="app.JumblesController.setActive('${this.id}')" >Start</button>
        <span>${this.name}</span>
        <span>Fastest Speed</span>
        <span>WPM</span>
       `
    }

    // draw active jumble template
}



