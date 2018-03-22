import RenderContainer from './RenderContainer';
import BasicRenderer from './BasicRenderer';

const { name, version, homepage } = ENV.application;

module.exports = {
  // export all components
  RenderContainer,
  BasicRenderer,

  // export package information
  name,
  version,
  homepage,
};
