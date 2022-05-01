import React from 'react'

const TabBtnItem = ({ id, title, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(id)
    }
    return (
        <button className={`btn ${activeTab === id ? 'active' : ''}`} onClick={handleClick}>{title}</button>
    )
}

export default TabBtnItem