import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { jumblesService } from "../services/JumblesService.js";
import { setHTML } from "../utils/Writer.js";
import { generateId } from "../utils/generateId.js"



generateId

function _drawJumble() {
    // make template for jumbles in model
    // est HTML for
    let jumbles = AppState.jumbles
    let content = ''
    jumbles.forEach(jumble => content += jumble.jumbleTemplate)
    setHTML('jumbles-list', content)
}

function _drawActive() {
    console.log('activedraw');
    let active = AppState.activeJumble
    console.log(AppState.activeJumble);
    setHTML('active-jumble', active.name)
    console.log('from draw');
}

export class JumblesController {
    constructor() {
        console.log('controller loaded');
        _drawJumble()
        AppState.on('activeJumble', _drawActive)
    }

    setActive(jumbleId) {
        debugger
        jumblesService.setActive(jumbleId)

    }

}