import React, {useState} from "react";
import PropTypes from "prop-types";
import axios from "axios";


/**
 * @component Form
 * @props - { object } -  config
 */
const ContactForm = (props) => {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  
 
  /**
  * @function handleFormSubmit
  * @param e { obj } - form event
  * @return void
  */
  const handleFormSubmit = e => {
    e.preventDefault();
   // console.log(formData.email);

    axios({
      method: "post",
      url: "https://cindy-ruet.fr/api/contact/index.php",
      headers: { "content-type": "application/json" },
      data: formData
    })
      .then(result => {
        if (result.data.sent) {
          setmailSent(result.data.sent)
          setError(false)
        } else {
          setError(true)
        }
      })
      .catch(error => setError( error.message ));
  };
  /**
    * @function handleChange
    * @param e { obj } - change event
    * @param field { string } - namve of the field
    * @return void
    */
   const handleChange = (e, field) => {
    let value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

    const { title,description, successMessage, errorMessage, fieldsConfig } = props.config;
    return (
      <div className="contact-form">
        <div className="contact-form__header">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
      <div className="contact-form__container">
        <div>
          <form action="#">
          <div className="form-content">
            {fieldsConfig &&
              fieldsConfig.map(field => {
                return (
                  <React.Fragment key={field.id}>
                    {field.type !== "textarea" ? (
                      <React.Fragment>
                      
                        <input
                          type={field.type}
                          className={field.klassName}
                          placeholder={field.placeholder}
                          value={field.name}
                          onChange={e => handleChange(e, field.fieldName)}
                          required
                        />
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        
                        <textarea className={field.klassName} placeholder={field.placeholder} onChange={e => handleChange(e, field.fieldName)} value={field.name} />
                      </React.Fragment>
                    )}
                  </React.Fragment>
                );
              })}
              </div>
            <input type="submit" onClick={e => handleFormSubmit(e)} value="Envoyer"  className=" hover button2"/>
            <div >
              {mailSent && <div className="sucsess">{successMessage}</div>}
              {error && <div className="error">{errorMessage}</div>}
            </div>
          </form>
        </div>
        </div>
      </div>
    );
}

export default ContactForm;
//propTypes for the component
ContactForm.propTypes = {
  config: PropTypes.object.isRequired
};