import * as React from "react";
import Robot, {IRobotPosition} from "../Robot"
import Ball, {IBallPosition} from "../Ball"
import FieldLines from "../FieldLines"
import Goal from "../Goal"
import {IRobotState, IBallState} from "./reducer"

export default ({robots, balls}:{robots:IRobotState[], balls:IBallState[]}) =>
    <svg viewBox="-0.9 -0.6 6.3 4.2"  width="50%">
        <g transform="scale(1 -1) translate(0 -3)">
            <rect x="-0.9" y="-0.6" width="100%" height="100%" fill="darkgray" />
            <rect x="-0.8" y="-0.5" width="6.100" height="4.00" fill="LimeGreen" />
            <FieldLines />
            {robots.map((robot,index) => <Robot key={index} position={robot.globalPosition} />)}
            {balls.map((ball,index) => <Ball key={index} position={ball.globalPosition} />)}
            <Goal />
            <Goal flipX={true} x={4.55} color="blue" />
        </g>
    </svg>;