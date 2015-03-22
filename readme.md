### React Component for Icons using Inline SVG

React [supports](http://facebook.github.io/react/docs/tags-and-attributes.html#svg-elements) several SVG elements which means you can embed your icon code directly into a component. Inline SVG has [good browser support](http://caniuse.com/#feat=svg-html5) and by using it you can save HTTP requests, icons are still cachable and you can control them using CSS.

Here's a very simple implementation of an **Icon** component with 2 icons:

```js
React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    style: React.PropTypes.object
  },
  getDefaultProps() {
    return {
      size: 24
    };
  },
  _mergeStyles(...args) {
    // This is the m function from "CSS in JS" and can be extracted to a mixin
    return Object.assign({}, ...args);
  },
  renderGraphic() {
    switch (this.props.icon) {
      case 'my-icon':
        return (
          <g><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"/></g>
        );
      case 'another-icon':
        return (
          <g><path d="M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z"/></g>
        );
      // Add more icons here
    }
  },
  render() {
    let styles = {
      fill: "currentcolor",
      verticalAlign: "middle",
      width: this.props.size // CSS instead of the width attr to support non-pixel units
    };
    return (
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fit
        style={this._mergeStyles(
          styles,
          this.props.style // This lets the parent pass custom styles
        )}>
          {this.renderGraphic()}
      </svg>
    );
  }
});
```

This component can be later used like this:

```js
<Icon size="2rem" icon="my-icon" />
```

JSX supports multiline strings, so you can add line breaks to the `d` attribute safely.  
For an **IconButton** component [check out the source](https://github.com/dmfrancisco/react-icons/blob/master/components/icon-button-component.jsx).

### Icon Set

[Browse a collection](https://dmfrancisco.github.io/react-icons) of optimized SVG icons created by the [Polymer Team](https://github.com/Polymer/core-icons).
