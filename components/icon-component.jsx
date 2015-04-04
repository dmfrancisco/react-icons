/*jshint esnext:true, browserify:true, unused:true */
'use strict';

import React from 'react/addons';
import StylingMixin from '../mixins/styling-mixin';

/*
 * Subset of the SVG icon collection from the Polymer project (goo.gl/N7SB5G)
 */
export default React.createClass({
  mixins: [StylingMixin],
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
      // Use CSS instead of the width prop to support non-pixel units (eg: rem)
      width: this.props.size,
      height: this.props.size
    };
    return (
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fit
        style={this.mergeStyles(
          styles,
          this.props.style
        )}>
          {this.renderGraphic()}
      </svg>
    );
  }
});
