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

    startTime() {
        // start time at zero and count up
        // end time at one minute
        // record time == fastest time
        // save fastest time to local storage
    }

}

export const jumblesService = new JumblesService()