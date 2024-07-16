import { AppState } from "../AppState.js"
import { click1 } from "../models/click.js"


class UfoService {
    updated1() {
        AppState.Total--
        const click1 = AppState.upgrade[0]
        const click10 = AppState.upgrade[2]
        click1.quantity++
        console.log(click1.quantity);
        click1.price += 5
    }
    clickUfo() {
        AppState.Total++
        const click1 = AppState.upgrade[0]
        AppState.Total += (click1.quantity * click1.multiplier)

        // this.updated1()

        if (AppState.Total <= 0) AppState.Total = 0
    }
}

export const ufoService = new UfoService()