import RenderContainer from './RenderContainer';
import FadingRenderer from './FadingRenderer';

const { name, version, homepage } = ENV.application;

module.exports = {
  // export all components
  RenderContainer,
  FadingRenderer,

  // export package information
  name,
  version,
  homepage,
};
