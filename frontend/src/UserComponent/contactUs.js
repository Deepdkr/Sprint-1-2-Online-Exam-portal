import "./contactUs.css"
function Contact() {
    
        return ( <div class="container">  
        <form id="contact" action="" method="post">
          <h1> Contact Form</h1>
          <br/>
          <fieldset>
            <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabindex="2" required/>
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number" type="tel" tabindex="3" required/>
          </fieldset>
         
          <fieldset>
            <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
         
        </form>
      </div>)
    }

export default Contact