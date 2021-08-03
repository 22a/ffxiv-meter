import { modifier } from 'ember-modifier';

export default modifier(function onOverlayEvent(_element, [event, callback]) {
  window.addOverlayListener(event, callback);
  window.startOverlayEvents();

  return () => {
    window.removeOverlayListener(event, callback);
  };
});
