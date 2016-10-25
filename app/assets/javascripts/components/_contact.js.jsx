var Contact = React.createClass({
  render: function () {
    return (
      <div>
        <h4>Name: { this.props.name }</h4>
        <p>Phone: { this.props.phone }</p>
      </div>
    )
  }
});
