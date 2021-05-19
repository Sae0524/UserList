// import logo from './logo.svg';
import './App.css';
// import User from './User.js';

function User(props) {
  return (
    <>
      <li>
        <div className="name">{props.name}</div>
        <div className="adress">{props.adress}</div>
        <div className="phrase">{props.phrase}</div>
        <div className=""><button>Delete</button></div>
        <div className=""><button>Edite</button></div>
      </li>
    </>
  );
}

export default User;

//// button add class name