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

    spellCheck() {
        let challenge = document.getElementById('challenge')
        // @ts-ignore
        if (challenge.value == AppState.activeJumble.body) {
            window.alert('Success')
        } else {
            window.alert('failure, try again')
        }
    }

    startTime() {
        // start time at zero and count up
        // end time at one minute
        // record time == fastest time
        // save fastest time to local storage
        // document.getElementById('timer').innerText = AppState.time
        if (AppState.time == 60) {
            // debugger
            let challenge = document.getElementById('challenge')
            // @ts-ignore
            if (challenge.value == AppState.activeJumble.body) {
                window.alert('Success')
            } else {
                window.alert('failure, try again')
            }
        }

    }

}

export const jumblesService = new JumblesService()