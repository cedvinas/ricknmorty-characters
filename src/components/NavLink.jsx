import React from "react";

export default function NavLink(props) {


    return (
        <a href={props.url}><li>{props.text}</li></a>
    )
}