import CSSRenderer from './CSSRenderer';

import styles from './FadingRenderer.scss';

export default class FadingRenderer extends CSSRenderer {
  get stylesComponent() {
    return styles.component;
  }
  get stylesDisplay() {
    return styles.display;
  }
  get stylesChildren() {
    return styles.children;
  }

}
