import React, { useState } from 'react'
import ClickAMole from '../AllTabs/clickAMole'
import UseEffectFetchData from '../AllTabs/useEffect-fetch-data'
import TabBtnItem from '../TabBtnItem'
import TabContent from '../TabContent'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('basics')

    return (
        <>
            <div style={{ marginTop: '-1.5rem' }}>
                <TabBtnItem title='Basics' id='tab1' activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabBtnItem title='Fetch Data' id='tab3' activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div>
                <TabContent id='tab1' activeTab={activeTab}>
                    <ClickAMole />
                </TabContent>
                <TabContent id='tab3' activeTab={activeTab}>
                    <UseEffectFetchData />
                </TabContent>

            </div>
        </>
    )
}

export default Tabs