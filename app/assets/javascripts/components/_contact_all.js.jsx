var ContactAll = React.createClass({
  render: function () {
    var contactNodes = this.props.contacts.map(function ( contact ) {
      return <Contact name={ contact.name } phone={ contact.phone } key={ contact.id } />
    });

    return (
      <div className="contact-list">
        { contactNodes }
      </div>
    )
  }
});
