import CSSRenderer from './CSSRenderer';

import styles from './FlexRenderer.scss';

export default class FlexRenderer extends CSSRenderer {
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
