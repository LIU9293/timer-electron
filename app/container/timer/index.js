import React from 'react';
import Section from 'component/section';
import Sidebar from 'react-sidebar';
import { connect } from 'react-redux';
import SidebarContent from 'component/sidebarContent';
import {
  FlexWrapper
} from 'component/wrapper';

class Timer extends React.PureComponent {
  state = {
    sidebarOpen: false
  }

  onSetSidebarOpen = (open) => {
    this.setState({
      sidebarOpen: open
    });
  }

  openSidebar = () => {
    this.onSetSidebarOpen(true);
  }

  render() {
    const { params } = this.props.match;
    const section = params.section ? parseInt(params.section, 10) : 1;
    if (section > this.props.SectionLength) {
      this.props.history.push('/timer/1');
    }
    return (
      <FlexWrapper>
        <Sidebar
          sidebar={<SidebarContent sections={this.props.Sections} step={section - 1} />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
        >
          <Section
            type={this.props.Sections[`section_${section}`].type}
            config={this.props.Sections[`section_${section}`]}
            sections={this.props.Sections}
            currentSection={section}
            sectionLength={this.props.SectionLength}
            onSidebarTrigger={this.openSidebar}
            player={this.props.PlayerInfo}
            globalConfig={this.props.Sections}
          />
        </Sidebar>
      </FlexWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    PlayerInfo: state.PlayerInfo,
    Sections: state.Sections,
    SectionLength: Object.keys(state.Sections).length,
  };
}

export default connect(mapStateToProps)(Timer);
