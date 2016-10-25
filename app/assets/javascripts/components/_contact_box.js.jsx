var ContactBox = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.newcontact);
  },

  handleContactSubmit: function ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ contact: data });
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="contact-box">
        <hr />
        <h2>Add a contact:</h2>
        <ContactForm form={ this.state.form } onContactSubmit={ this.handleContactSubmit } />
      </div>
    );
  }
});
