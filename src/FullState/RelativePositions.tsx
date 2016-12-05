import * as React from "react";
import Robot, {IRobotPosition} from "../Robot"
import Ball, {IBallPosition} from "../Ball"
import {IRobotState, IBallState} from "./reducer"

export default ({robots, balls}:{robots:IRobotState[], balls:IBallState[]}) =>
    <svg viewBox="-3.25 -3.25 6.5 6.5" width="50%">
        <g transform="scale(1 -1)">
            <rect x="-3.25" y="-3.25" width="100%" height="100%" fill="darkgray" />
            {robots.map((robot, index) => <Robot key={index} position={robot.relativePosition} />)}
            {balls.map((ball, index) => <Ball key={index} position={ball.relativePosition} />)}
        </g>
    </svg>;