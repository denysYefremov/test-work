// @flow
import * as React from 'react';
import ToggleItem from './ToggleItem';

type ValueType = string | number | boolean;

type TogglesProps = {
  items: { label: string, value: ValueType }[],
  onChange: (value: ValueType) => void,
  checkedItem?: ValueType;
};

type TogglesState = {
  checkedItem: ValueType | null | typeof undefined,
};

class Toggles extends React.Component<TogglesProps, TogglesState> {
  static defaultProps = {
    checkedItem: null,
  };

  state = {
    checkedItem: this.props.checkedItem,
  };

  componentDidMount() {
    if (this.state.checkedItem === null) {
      this.setState({ checkedItem: this.props.items[0].value });
    }
  }

  handleClick = (checkedItem: ValueType): void => {
    this.setState({ checkedItem });
    this.props.onChange(checkedItem);
  };

  render() {
    const { items } = this.props;
    return (
      <ul>
        {
          items.map(item => (
            <ToggleItem
              key={item.value.toString()}
              onClick={() => this.handleClick(item.value)}
              active={this.state.checkedItem === item.value}
            >
              {item.label}
            </ToggleItem>
          ))
        }
      </ul>
    );
  }
}

export default Toggles;
