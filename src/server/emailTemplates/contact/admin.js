module.exports = (data) => `

    <div className="contact-email">
        <div className="header" style="background-color: #0b7c80; padding: 10px 20px;">
          Chiro Bressuire
        </div>

        <div className="content" style="padding: 20px; font-size: 18px; margin-bottom: 2rem;">
          <h1 style="font-size: 20px">Un message a été envoyé avec les informations suivantes</h1>
          <div className="message" style="padding-bottom: 20px; font-size: 14px">
            <div style="padding-left: 20px;">
                <b>Nom : </b>${data.name}<br/>
                <b>Telephone : </b>${data.phone}<br/>
                <b>Email : </b>${data.email}<br/>
                <b>Subject : </b>${data.subject}<br/>
                <b>Message : </b>${data.message}<br/>
            </div>

            <div className="sign" style="padding-top: 10px;  font-size: 14px">
              Cordialement.<br>
              <span style="font-size: 16px; font-style: italic; font-weight: bold;">Dev service.</span>
            </div>
          </div>
        </div>
    </div>     
`;
