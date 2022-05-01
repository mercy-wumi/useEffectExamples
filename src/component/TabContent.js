import React from 'react'

const TabContent = ({ id, activeTab, children }) => {
    return (
        activeTab === id ?
            <div style={{ marginTop: '2rem' }}>{children}</div> : null)
}

export default TabContent