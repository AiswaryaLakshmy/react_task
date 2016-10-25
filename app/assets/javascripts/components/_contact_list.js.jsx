var ContactList = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },

  render: function () {
    return (
      <div className="contact-list">
        <ContactAll contacts={ this.state.contacts } />
      </div>
    );
  }
});
