var SignUp = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.signup);
  },

  handleUserSubmit: function ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ user: data });
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="user-box">
        <hr />
        <h2>Sign Up</h2>
        <SignupForm form={ this.state.form } onUserSubmit={ this.handleUserSubmit } />
      </div>
    );
  }
});
