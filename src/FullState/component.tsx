import * as React from "react"
import RelativePositions from "./RelativePositions"
import GlobalPositions from "./GlobalPositions"
import {IFullState} from "./reducer"

export default (props:IFullState) =>
    <g>
        <RelativePositions {...props} />
        <GlobalPositions {...props} />
    </g>;