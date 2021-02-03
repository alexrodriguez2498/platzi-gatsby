import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const Success = () => {
return (
<div>
    <SEO title="successful purchase" />
    <Purchase>
    <h2>successful purchase</h2>
    <p>Enjoy your swag, wear it pride. </p>
    <p>We'll wait for you back!</p>
    <span role="img" aria-label="emoji">
        🤝
    </span>
    <Link to="/">
        <Button>volver</Button>
    </Link>
    </Purchase>
</div>
)
}

export default Success
