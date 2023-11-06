import React, {useState, useEffect} from 'react';
import { firestore } from "../../firebase";

const Admin: React.FC = () => {
  const [users, setUsers] = useState([] as any[]);

  useEffect(() => {
    const usersCollection = firestore.collection('users');
    usersCollection.get().then((querySnapshot) => {
      const userData = [] as any[];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log('===>', data);
        
        userData.push({
          id: doc.id,
          name: data.name, // Replace with the field in your Firestore document
          role: data.role, // Replace with the field in your Firestore document
        });
      });
      setUsers(userData);
    });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name: {user.name}</strong> - Role: {user.role}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Admin