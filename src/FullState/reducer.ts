import {OtherAction, FullStateUpdateAction } from "../actions";
import {FULL_STATE_UPDATE} from "../constants"
import {IRobotPosition} from "../Robot"
import {IBallPosition} from "../Ball"

type RobotStateAction =
    FullStateUpdateAction |
    OtherAction

export interface IBallState {
    readonly globalPosition?: IBallPosition
    readonly relativePosition: IBallPosition
}
export interface IRobotState {
    readonly globalPosition?: IRobotPosition
    readonly relativePosition: IRobotPosition
}

export interface IFullState {
    readonly robots:IRobotState[]
    readonly balls:IBallState[]
}

const initialState:IFullState= {
    robots: [],
    balls: [],
};

const reducer = (state=initialState, action:RobotStateAction):IFullState => {
    switch (action.type) {
        case FULL_STATE_UPDATE:
            return action.payload
        default:
            return state;
    }
}

export default reducer;