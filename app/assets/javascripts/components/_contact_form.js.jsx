var ContactForm = React.createClass({
  handleSubmit: function ( event ) {
    event.preventDefault();

    var name = this.refs.name.value.trim();
    var phone = this.refs.phone.value.trim();

    // validate
    if (!phone || !name) {
      return false;
    }

    // submit
    var formData = $( this.refs.form ).serialize();
    this.props.onContactSubmit( formData, this.props.form.action );

    // reset form
    this.refs.name.value = "";
    this.refs.phone.value = "";
  },
  render: function () {
    return (
      <form ref="form" className="contact-form" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
        <p><input ref="name" name="contact[name]" placeholder="Name" /></p>
        <p><input ref="phone" name="contact[phone]" placeholder="Phone" /></p>
        <p><button type="submit">Submit contact</button></p>
      </form>
    )
  }
});

