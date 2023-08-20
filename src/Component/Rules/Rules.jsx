import React, { useState } from 'react'
import './Rules.css'
import rulesimage from '../../images/image-rules-bonus.svg'
import closeimage from '../../images/icon-close.svg'

export default function Rules() {

    const [ShowRules, setShowRules] = useState(false)

    const handleRuleModal = () => {
        setShowRules(!ShowRules)
    }

    return (
        <>
            <button className="btn" id='rule-btn' onClick={handleRuleModal}>
                Rules
            </button>

            {ShowRules && (<div id="rules-back">
                <div id='rules'>
                    <div className='rules-head' >
                        <h1>Rules</h1>
                        <img src={closeimage} alt="CLOSE" onClick={handleRuleModal} style={{ cursor: 'pointer' }} />
                    </div>
                    <img src={rulesimage} alt="" />
                </div>
            </div>)}
        </>
    )
}
