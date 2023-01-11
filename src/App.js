
import './App.css';
import react from 'react';

export default function App() {
      const users = [
{ id: 1, name: 'Nathan', role: 'Web Developer' },
{ id: 2, name: 'John', role: 'Web Designer' },
{ id: 3, name: 'Jane', role: 'Team Leader' },
];
  return (
    <div className="App">
       <h1>Users</h1>
       <p>The current active users in the list</p>
       <ul>
        {
          users.map(function(user){
            return(<li key={user.id}>Mr {user.name}as the {user.role}</li>)
          })

        }
       </ul>

    </div>
  );
}

//export default App;
