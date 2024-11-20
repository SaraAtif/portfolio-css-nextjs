import "../style/contact.css"

const ContactPage =()=>{
    return(
        <div id="contact">
            <section className="contact-section">
  <div className="contact-maindiv">
    <div className="contact-div1">
      <iframe
        width="100%"
        height="100%"
        className="contact-iframe"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2083678036897!2d67.01386797414085!3d24.856732045409096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0eff26c7e5%3A0x5e1a4ac700449659!2sShahrah-e-Liaquat%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1728504856435!5m2!1sen!2s"
        style={{ filter: "contrast(1.2) opacity(0.4)" }}
      />
      <div className="contact-div2">
        <div className="contact-div3">
          <h3 className="contact-add">
            ADDRESS
          </h3>
          <p className="contact-para">
            Shahrah-e-Liaqat, Burns road Karachi
          </p>
        </div>
        <div className="contact-div4">
          <h3 className="contact-email">
            EMAIL
          </h3>
          <a className="contact-a">
            saraatif135@gmail.com</a>
          <h3 className="contact-phone">
            PHONE
          </h3>
          <p className="para-phone">0307-2180000</p>
        </div>
      </div>
    </div>
    <div className="contact-div5">
      <h1 className="contact-h1">
        Contact
      </h1>
      
      <div className="contact-input-div">
        <label htmlFor="name" className="contact-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="contact-input"
        />
      </div>
      <div className="contact-input-div">
        <label htmlFor="email" className="contact-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="contact-input"
        />
      </div>
      <div className="contact-input-div">
        <label htmlFor="message" className="contact-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="contact-input"
          defaultValue={""}
        />
      </div>
      <div className="contact-btn div">
      <button className="contact-button">
        Send message
      </button>
      </div>
      
    </div>
  </div>
</section>

        </div>

    )
}
export default ContactPage;
