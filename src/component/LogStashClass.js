import React from 'react';

class LogStashClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNoActivity: true,
    };
  }

  componentDidMount() {
    console.log('Log stash mounted!');
  }

  componentWillUnmount() {
    console.log('Log stash will be unmounted!');
  }

  componentDidUpdate() {
    // BAIKNYA tidak melakukan update state
    if (this.props.logs) {
      const logs = this.props.logs;
      console.log(logs[logs.length - 1]);
    }

    if (this.state.showNoActivity && this.props.logs) {
      this.setState({
        showNoActivity: false,
      });
      console.log('Changing no activity...');
    }
  }

  render() {
    const showNoActivity = this.state.showNoActivity;
    const logs = this.props.logs;

    return (
      <div className="log-stash">
        <div className="scroller">
          <div className="log-container">
            {showNoActivity && <p className="log-item">No activity.</p>}
            {logs.length > 0 && logs.map((log) => <p className="log-item">{log}</p>)}
          </div>
        </div>
      </div>
    );
  }
}

export default LogStashClass;
