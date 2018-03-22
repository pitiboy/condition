import RenderContainer from './RenderContainer';
import BasicRenderer from './BasicRenderer';
import FadingRenderer from './FadingRenderer';

const { name, version, homepage } = ENV.application;

module.exports = {
  // export all components
  RenderContainer,
  BasicRenderer,
  FadingRenderer,

  // export package information
  name,
  version,
  homepage,
};
