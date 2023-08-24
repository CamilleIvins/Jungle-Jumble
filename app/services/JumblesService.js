import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
Jumble
AppState

class JumblesService {
    setActive(jumbleId) {
        let chosenJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
        AppState.activeJumble = chosenJumble
        console.log(jumbleId);
    }

}

export const jumblesService = new JumblesService()