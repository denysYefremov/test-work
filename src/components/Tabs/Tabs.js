// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import actions from './actions';
import selectors from './selectors';
import {
  Wrapper,
  TabsContainer,
  Tab,
  Button,
} from './Components';

type TabsProps = {
  children: any,
  initialActive?: string,
  setActiveTab: (string) => void,
  activeTab: string,
};

class Tabs extends React.Component<TabsProps> {
  static Tab = Tab;

  static defaultProps = {
    initialActive: null,
  };

  componentDidMount() {
    const { initialActive, children, setActiveTab } = this.props;
    setActiveTab(initialActive != null ? initialActive : children[0].props.label);
  }

  render() {
    const { children, activeTab } = this.props;

    return (
      <Wrapper>
        {
          React.Children.map(
            children,
            child => React.cloneElement(child, { hidden: activeTab !== child.props.label }),
          )
        }
        <TabsContainer>
          {
            React.Children.map(
              children,
              (child) => {
                const { label, disabled } = child.props;
                return (
                  <Button
                    active={activeTab === label}
                    disabled={disabled}
                    onClick={disabled ? null : () => this.props.setActiveTab(label)}
                  >
                    {label}
                  </Button>
                );
              },
            )
          }
        </TabsContainer>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  activeTab: selectors.getActiveTab,
});

const mapDispatchToProps = {
  setActiveTab: actions.activateTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
