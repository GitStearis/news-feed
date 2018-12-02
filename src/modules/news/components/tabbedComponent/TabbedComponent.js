import React, { Component } from 'react';

import TabList from './tabList/TabList.js';
import Tab from './tab/Tab.js';
import TabContent from './tabContent/TabContent.js';
import TabPanel from './tabPanel/TabPanel.js';

import './TabbedComponent.css';

class TabbedComponent extends Component {
  constructor(props) {
    super(props);
    this.onTabChoose = this.onTabChoose.bind(this);
    this.tabNames = this.props.data.map(datum => datum.tabName || '');
    this.tabPanels = this.props.data.map(datum => datum.tabPanel || '');
    this.data = props.data;
  }

  componentWillMount() {
    this.setState({ activeTab: 0});
  }

  onTabChoose(index) {
    this.setState({ activeTab: index});
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
    let tabs = [];
    for (let i = 0; i < this.tabPanels.length; i++) {
      tabs.push(
        <TabPanel key={`tab-panel-${i}`} active={this.isTabActive(i)}>
          {this.tabPanels[i]}
        </TabPanel>
      );
    }
    return (
      <TabContent>
        {tabs}
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
