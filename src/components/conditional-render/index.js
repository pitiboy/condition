import RenderContainer from './RenderContainer';
import FadingRenderer from './FadingRenderer';
import FlexRenderer from './FlexRenderer';
import StrikeThrougRenderer from './StrikeThrougRenderer';

const { name, version, homepage } = ENV.application;

module.exports = {
  // export all components
  RenderContainer,
  FadingRenderer,
  FlexRenderer,
  StrikeThrougRenderer,

  // export package information
  name,
  version,
  homepage,
};
