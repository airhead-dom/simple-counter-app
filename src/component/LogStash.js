import React, { useEffect } from 'react';

// component lifecycle -> event proses "kehidupan" komponent, ada event saat komponent di mount dan di unmount
// contoh kasus -> sebelum render, do api call

const LogStash = ({ logs = undefined }) => {
  useEffect(() => {
    // effect -> how do i react with changes
    // return () => { -> clean up == componentWillUnmount
    //   cleanup
    // }
  }, [logs]); // dependency

  // first form -> will be run on EVERY UPDATE
  // useEffect(() => {});

  // second form -> will be run ONLY ONCE ON MOUNT
  // useEffect(() => {}, []);

  // third form ->
  // useEffect(() => {}, [depOne]) -> will be run WHEN THE DEPS CHANGES

  return (
    <div className="log-stash">
      <div className="scroller">
        <div className="log-container">
          {logs.length === 0 && <p className="log-item">No activity.</p>}
          {logs.length > 0 && logs.map((log) => <p className="log-item">{log}</p>)}
        </div>
      </div>
    </div>
  );
};

export default LogStash;
