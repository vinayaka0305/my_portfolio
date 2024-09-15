import React from 'react'
import contantLogo from "../assets/images/contact_page.png"

const Contact = () => {

  return (
    <div>
        <div>
            <img src={contantLogo} alt="contact_image"/>
        </div>
        <h2>Email:
            <a href="mailto:vav6473@gmail.com"></a>
        </h2>
        <h2>GitHub:
            <a href="https://github.com/vinayaka0305"></a>
        </h2>
        <h2>leetcode:
            <a href="https://leetcode.com/vinayaka/submissions/#/1"></a>
        </h2>
    </div>
  )
}

export default Contact