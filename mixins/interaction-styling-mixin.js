/*jshint esnext:true, browserify:true, unused:vars */
'use strict';

/*
 * Interaction State Styling Mixin
 *
 * Simple mixin with utility methods for implementing CSS :active, :hover and
 * :focus pseudo-classes. Currently only supports :active.
 */
let InteractionStylingMixin = {
  getInitialState() {
    return {
      _interactionStateActive: false
    };
  },
  // Sets up listeners for mouse down and up events. Usage example:
  //    <button {...this.trackInteractionStateActive()}
  //      style={this.mergeStyles(
  //        this.interactionStateIsActive() && styles.active
  //    )}> My Button </button>
  trackInteractionStateActive() {
    return {
      onMouseDown: this._onMouseDown,
      onMouseUp: this._onMouseUp,
      onMouseLeave: this._onMouseUp
    };
  },
  // Checks if the interaction state is currently active (the mouse is down).
  // @return {Boolean}
  interactionStateIsActive() {
    return this.state._interactionStateActive === true;
  },
  _onMouseDown(e) {
    this.setState({ _interactionStateActive: true });
  },
  _onMouseUp(e) {
    this.setState({ _interactionStateActive: false });
  }
};

export default InteractionStylingMixin;
