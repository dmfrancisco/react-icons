/*jshint esnext:true, browserify:true, unused:vars */
'use strict';

import React from 'react';
import StylingMixin from '../mixins/styling-mixin';
import InteractionStylingMixin from '../mixins/interaction-styling-mixin';
import Icon from './icon-component.jsx';

/*
 * Icon Button Component
 */
export default React.createClass({
  mixins: [StylingMixin, InteractionStylingMixin],
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    size: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    style: React.PropTypes.object
  },
  getDefaultProps() {
    return {
      onClick() {}
    };
  },
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state._interactionStateActive != nextState._interactionStateActive)
      return true;
    return false;
  },
  render() {
    let styles = {
      button: {
        background: "none",
        border: "none",
        borderRadius: "50%",
        color: "inherit",
        cursor: "pointer",
        lineHeight: 0,
        outline: "none",
        padding: this.remCalc(8),
        transition: "background 250ms",
        verticalAlign: "middle"
      },
      active: {
        background: "rgba(0,0,0,.1)",
        transition: "none"
      }
    };

    return (
      <button
        {...this.trackInteractionStateActive()}
        onClick={this.props.onClick}
        style={this.mergeStyles(
          styles.button,
          this.props.style,
          this.interactionStateIsActive() && styles.active
        )}>
          <Icon icon={this.props.icon} size={this.props.size}/>
      </button>
    );
  }
});
