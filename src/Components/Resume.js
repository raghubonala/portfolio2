import React, { useState } from 'react'

const Resume = () => {
    const [show, setShow] = useState(false)
    const [skil,setskil] = useState(false)
    const kuch = () => {
        setShow(!show)
    }
const kuchbi = () => {
    setskil(!skil)
}
    return (
        <>
            <div className='resume'>
                <div className='main'>
                    <h1>My Resume</h1>
                </div>
                <div className='main'>
                <div className='main'>
                    <h1 onClick={kuch}>Education</h1>
                    {show ? <div>
                        <span>University Of Mumbai - Class Of 2019 <br />

                            Bachelor Of Commerce In Economics With <br /> A Concentration In Finance And Management

                        </span>
                    </div> : null}
                </div>
                <div className='main'>
                <h1 onClick={kuchbi}>Skills</h1>
                {skil ? <div>
                        
<span>Proficient in Microsoft Word, Excel, Powerpoint, Google Suite, Hyperion, Salesforce, Canva, Final Cut Pro, Website Analytics</span>
                            

                        
                    </div> : null}
                </div>
                </div>
            </div>
        </>
    )
}

export default Resume