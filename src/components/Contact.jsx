import React from 'react'
import { MailOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
const Contact = () => {
  return (
    <div class="container mt-5" >
      <div className="row py-2 justify-content-center align-items-center">
        <div className="col-12 text-center">
          <h2 className="py-3 text-capitalize fw-bold border-bottom border-gray-400">
            My Contacts
          </h2>
          <p className="max-w-lg fw-normal h6">Feel free to contact or connect with me using the following platforms:</p>
        </div>
        <div className="row pt-2 ">
          <div className="col">
              <div className="d-flex gap-5 justify-content-center align-items-center">
                <MailOutlined className="h2" />
                <p className='h6'><a href='mailto:mwikalimercy50@gmail.com'>mwikalimercy50@gmail.com</a></p>
              </div>
          </div>
          <div className="row">
              <div className="col d-flex justify-content-center align-items-center gap-5">
                <LinkedinOutlined className="h2" />
                <p className='h6'><a href="https://www.linkedin.com/in/mercy-mwikali-9b380a14b/">LinkedIn Profile</a></p>
              </div>
          </div>
          <div className="row">
              <div className="d-flex justify-content-center align-items-center gap-5">
                  <GithubOutlined className="h2" />
                  <p className='h6'><a href='https://github.com/mercymwikali'>Github Profile</a></p>
                </div>
              </div>
     </div>


      </div>

    </div>
  )
}

export default Contact