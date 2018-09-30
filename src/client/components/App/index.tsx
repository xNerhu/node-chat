import React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import StartSettings from '../StartSettings';

@observer
class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        {store.startSettingsVisible && <StartSettings />}
      </div>
    );
  }
}

export default App;
