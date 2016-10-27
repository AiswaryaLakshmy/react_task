var SignupForm = React.createClass({
  handleSubmit: function ( event ) {
    event.preventDefault();

    var username = this.refs.username.value.trim();
    var password = this.refs.password.value.trim();
    var confirm_password = this.refs.confirm_password.value.trim();

    // validate
    if (!password || !confirm_password || !username) {
      return false;
    }

    // submit
    var formData = $( this.refs.form ).serialize();
    this.props.onUserSubmit( formData, this.props.form.action );

    // reset form
    this.refs.username.value = "";
    this.refs.password.value = "";
    this.refs.confirm_password.value = "";
  },
  render: function () {
    return (
      <form ref="form" className="user-form" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
        <p><input ref="username" name="user[username]" placeholder="Username" /></p>
        <p><input type="password" ref="password" name="user[password]" placeholder="Password" /></p>
        <p><input type="password" ref="confirm_password" name="user[confirm_password]" placeholder="Confirm Password" /></p>
        <p><button type="submit">Submit user</button></p>
      </form>
    )
  }
});

