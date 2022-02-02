import React from "react"

import styles from "./flex.module.css"

const Flex = props => {
    const { center, gap, column, style, children, ...rest } = props

    let justifyContent = null
    let alignItems = null
    
    if(center) {
        justifyContent="center"
        alignItems="center"
    }

    const _style = {
        flexDirection: column ? "column" : "row",
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gap,
        ...style
    }

    return (
        <div className={styles.flex} style={_style} {...rest}>
            {children}
        </div>
    )
}

export default Flex