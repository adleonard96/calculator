import { useState } from "react";
import "./font/SevenSegment.ttf";

const TotalBar = (props) => {
    const [total, setTotal] = useState(0);
    return(
        <h1 style={{textAlign: "right", color: "white", margin: 0, fontFamily: 'SeventSegment'}}>{`${props.expression}`}</h1>
    )
}

export default TotalBar;