/**
 * Created by phyrion on 26/03/17.
 */
import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>In a new Component!</p>
                {5 == 2 ? "Yes" : "No"}
            </div>
        );
    }
}
