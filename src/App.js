import './styles/index.css';

import Welcome from "./components/Welcome";
import Input from "./components/Input";
import Toggle from "./components/Toggle";

const App = () => {
  return (
    <div className='app-component'>
      <Welcome name='Alica' />
      <Input />
      <Toggle />
    </div>
  );
}

export default App;
