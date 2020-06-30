import React, { Component } from 'react';
import styles from './Select.module.scss';

class Select extends Component {
  state = {
    opened: false,
  };
  handleControlClick = () => {
    const { opened = false } = this.state;
    this.setState({ opened: !opened });
  };
  handleItemClick = (el) => {
    const { onSelected = () => {} } = this.props;
    onSelected(el);
    this.setState({ opened: false });
  };
  render() {
    const { opened = false } = this.state;
    const {
      items = ['Jean', 'Paul', 'Jacques'],
      selected = 'Jacques',
    } = this.props;

    return (
      <div className={styles.host}>
        <div className={styles.control} onClick={this.handleControlClick}>
          {selected}
        </div>
        {opened && (
          <div className={styles.menu}>
            {items.map((el) => (
              <div
                key={el}
                className={styles.item}
                onClick={() => this.handleItemClick(el)}
              >
                {el}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
