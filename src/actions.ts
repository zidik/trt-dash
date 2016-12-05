import {FULL_STATE_UPDATE} from "./constants";
import {IFullState} from "./FullState/reducer"

export type OtherAction = { type: '' };
export const OtherAction : OtherAction = { type: '' };

export type FullStateUpdateAction = {
    type: FULL_STATE_UPDATE,
    payload: IFullState
}

export const updateFullState = (newState:IFullState):FullStateUpdateAction => ({
    type:FULL_STATE_UPDATE,
    payload: newState
})

