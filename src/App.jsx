import { useState } from 'react';
import LeftPanel from './components/LeftPanel.jsx';
import CenterPanel from './components/CenterPanel.jsx';
import RightPanel from './components/RightPanel.jsx';
import { MODELS, CLASSES } from './config.js';

export default function App() {
  const [model, setModel] = useState(MODELS[0]);
  const [targetClass, setTargetClass] = useState(CLASSES[0]);

  return (
    <div className="app">
      <div className="slot left">
        <LeftPanel
          models={MODELS} model={model} onModelChange={setModel}
          classes={CLASSES} targetClass={targetClass} onClassChange={setTargetClass}
          onRun={() => {}} // call backend from here
        />
      </div>
      <CenterPanel layer="conv2_1" />
      <div className="slot right">
        <RightPanel />
      </div>
    </div>
  );
}
// [left panel] [splitter] [center panel] [splitter] [right panel] ?