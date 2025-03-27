import React from 'react'
import ChatContainer from '../components/ChatContainer'

function Dashboard() {
    return (
        <div className='dashboard'>
            <ChatContainer />
            <div className='swiper-container'>
                <div className="card-container"></div>
            </div>
        </div>
    )
}

export default Dashboard