var About = React.createClass({
  render: function () {
    return (
      <div>
         <h1>About</h1>
         <img src={ this.props.imgSrc } alt={ this.props.imgAlt } />
         <h4>Test pic </h4>
      </div>
    )
  }
});
