var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1>About</h1>
	      <img src={ this.props.imgSrc }/>
	      <h4>Test pic </h4>
      </div>
    )
  }
});
