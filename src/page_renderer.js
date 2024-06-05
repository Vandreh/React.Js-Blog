import React from 'react';
import { useMatch } from "react-router-dom"

let generatePage = page => {
    console.log("generatepage")
    const component = () => require(`./pages/${page}.js`).default

    try {
        return React.createElement(component())
    } catch (err) {
        return React.createElement(() => 404)
    }
}

export default function PageRederer() {
    console.log("page-renderer")
    const {
        params: { page }
    } = useMatch()

    return generatePage(page)
}