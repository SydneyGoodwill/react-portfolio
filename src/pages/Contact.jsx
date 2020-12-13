import React from 'react';

const Contact = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-xs-10.25 col-md-8 col-lg-10">
          <div class="white-box">
            <h1 class="contact">Contact</h1>
            <h6 class="contact">Feel free to contact me: sydneyjogoodwill@gmail.com</h6>
            <p>Check out my <a href="https://www.linkedin.com/in/sydney-goodwill-670828199/">LinkedIn</a> profile. You can also find a copy of my <a href="https://docs.google.com/document/d/1tWFm28m_l3ojeyWH6q1dU_-IpvcN43ZXgpE4Wpkwrl8/edit#heading=h.ocvpswguxa6m">Resume</a> here!
             </p>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </input>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=" ">
                </input>
              </div>

              <p>
                <button class="btn btn-primary">Send</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;