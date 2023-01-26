import './styles/index.css';

// import Welcome from "./components/archive/Welcome";
// import Input from "./components/archive/Input";
// import Toggle from "./components/archive/Toggle";
// import Clock from "./components/archive/Clock";
// import Button from "./components/archive/Button";
import Users from "./components/Users";
import Form from "./components/Form";

const App = () => {
  return (
    <div className='app-component'>
      <header>
        <h1 className='title'>Список пользователей</h1>
      </header>
      <main>
        <Users />
        <Form />
      </main>
      {/*<Welcome name='Alica' />*/}
      {/*<Input />*/}
      {/*<Toggle />*/}
      {/*<Clock />*/}
      {/*<Button text='button' />*/}
    </div>
  );
}

export default App;
