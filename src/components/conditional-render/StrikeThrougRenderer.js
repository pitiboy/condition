import CSSRenderer from './CSSRenderer';

import styles from './StrikeThrougRenderer.scss';

export default class StrikeThrougRenderer extends CSSRenderer {
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
