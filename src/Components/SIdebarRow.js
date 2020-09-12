import React from 'react'
import '../custom/sidebarRow.css'
import Avatar from '@material-ui/core/Avatar'

function SIdebarRow({title, src, Icon}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
    )
}

export default SIdebarRow
