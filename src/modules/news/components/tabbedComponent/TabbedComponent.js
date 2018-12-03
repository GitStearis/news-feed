import React, { Component } from 'react';

import TabList from './tabList/TabList.js';
import Tab from './tab/Tab.js';
import TabContent from './tabContent/TabContent.js';

import './TabbedComponent.css';

class TabbedComponent extends Component {
  constructor(props) {
    super(props);
    this.tabNames = this.props.tabs;
  }

  componentWillMount() {
    const activeTab = 0;
    this.setState({activeTab});
    this.props.onTabChange(this.tabNames[activeTab]);
  }

  onTabChoose(index) {
    this.setState({ activeTab: index});
    this.props.onTabChange(this.tabNames[index]);
  }

  isTabActive(index) {
    return index === this.state.activeTab;
  }

  renderTabList() {
    let tabs = [];
    for (let i = 0; i < this.tabNames.length; i++) {
      tabs.push(
        <Tab key={`tab-${i}`} active={this.isTabActive(i)} onClick={() => this.onTabChoose(i)}>
          {this.tabNames[i]}
        </Tab>
      );
    }
    return (
      <TabList>
        {tabs}
      </TabList>
    );
  }

  renderTabContent() {
    return (
      <TabContent>
        {this.props.content || this.props.children}
      </TabContent>
    );
  }

  render() {
    return (
      <div className='tabbed-component'>
        {this.renderTabList()}
        {this.renderTabContent()}
      </div>
    );
  }
}

export default TabbedComponent;
