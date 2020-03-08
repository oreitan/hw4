import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Axios from 'axios';
import AddMsgItem from './components/listCom/AddMegItem';
import Mesgs from './components/listCom/Mesgs';

function App() {
  const [Megs, setMegs] = React.useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setMegs(res.data ))
      .catch(res => console.log(res));
  }, []);

  function addMsgItem(title, body) {
    Axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body
    })
      .then(res => setMegs([...Megs, res.data]))
      .catch(res => console.log(res));
  };

  function updateMesgItem(id, title, body) {

    Axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title,
      body
    })
      .then(res => setMegs(Megs.map(MesgItem => MesgItem.id !== res.data.id ? MesgItem : res.data)))
      .catch(res => console.log(res));
  }

  function delMsg(id) {
    Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setMegs([...Megs.filter(MesgItem => MesgItem.id !== id)]))
      .catch(res => console.log(res));
  }









  return (
    <div>
      <div className='mid-pic'></div>
      <div className='container background-img'>
        <div className='p-com d-flex justify-content-center'>
          <AddMsgItem addMsgItem={addMsgItem} />
            <div className ='mesg'>
          <Mesgs Megs={Megs} delMsg={delMsg} updateMesgItem={updateMesgItem} ></Mesgs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
