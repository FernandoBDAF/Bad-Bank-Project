import Card from './Card';
import React, {useContext} from 'react';
import { AppContext } from '../utils/Context';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

function CreateAccount(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const {addUser} = useContext(AppContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function createAccount() {
    console.log(name, email, password);
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    addUser({name, email, password, balance: 100});
    setShow(false);
  }

  return (
    <Layout>
      <h5>Welcome to Bad Bank!</h5>
      <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={show ? (
          <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
            <button type="submit" className="btn btn-light" onClick={createAccount}>Create Account</button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <Link  to="/log-in" className="btn btn-light">Go to login</Link>
          </>
        )}
      />
      <p>The Bad Bank app allow you to input all your transactions and keep track of your income and expenses. Create your account now so you can control your financial transactions</p>
    </Layout>
    );
}

export default CreateAccount;