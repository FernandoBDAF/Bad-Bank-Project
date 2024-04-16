import './App.css';
import Body from './components/Body';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <div className="App">
        <div>Bad Bank</div>
        <Body text="Welcome to the bank"/>
      </div>
    </Layout>
  );
}

export default App;
