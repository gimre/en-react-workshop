
import React from '/lib/react.js'

export const Button = ( {
    action,
    text
} ) => (
    <button onClick={ action }>
        { text }
    </button>
)

export default Button
