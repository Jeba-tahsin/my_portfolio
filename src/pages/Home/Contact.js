import React from "react";
import {MdEmail} from 'react-icons/md';
import {BsFillTelephoneFill} from 'react-icons/bs';

const Contact = () => {
  return (
      <div className="container mt-5" id="contact">
      <h2 className="my-5">Contact</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="">
            <h4>
              <BsFillTelephoneFill /> Phone
            </h4>
            <h6>+88015********</h6>
             <h4>
              <MdEmail /> Email
            </h4>
            <p>jebatahsin500@gmail.com</p>
          </div>
        </div>
        <div className="col-md-8">
          <div class="row mb-3 d-flex justify-content-center">
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="colFormLabelSm"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="row mb-3 d-flex justify-content-center">
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="colFormLabel"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="row mb-3 d-flex justify-content-center">
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="colFormLabel"
                placeholder="subject"
              />
            </div>
          </div>
          <div class="row mb-3 d-flex justify-content-center">
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control form-control-lg"
                id="colFormLabel"
                placeholder="Your Massage"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-info">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
