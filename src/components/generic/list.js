
import React from '/lib/react.js'

export const List = ( {
    items,
    renderer: ItemComponent
} ) => (
    <ul>
        { items.map( ( item, index ) => (
            <li key={ index }>
                <ItemComponent { ... item } />
            </li>
        ) ) }
    </ul>
)

export default List
