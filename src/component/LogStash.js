import React from 'react';

const LogStash = ({logs = []}) => {
  return (
      <div className="log-stash">
        <div className="scroller">
          <div className="log-container">
            {logs.length === 0 && <p className="log-item">No activity.</p>}
            {logs.length > 0 && logs.map(log => <p className="log-item">{log}</p>)}
          </div>
        </div>
      </div>
  );
};

export default LogStash;
