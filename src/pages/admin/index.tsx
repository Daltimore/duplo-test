import React, {useState, useEffect} from 'react';
import { firestore } from "../../firebase";

const Admin: React.FC = () => {
  const [users, setUsers] = useState([] as any[]);
  const [isLoading, setIsLoading] = useState(false as any)
  const [loading, setLoading] = useState(false as any)

  const updateUserRole = async (userId: any, newRole: string) => {
    setLoading(true)
    try {
      await firestore.collection('users').doc(userId).update({ role: newRole });
      setLoading(false)
      fetchUsers()
    } catch (error) {
      setLoading(false)
      console.error('Error updating user role:', error);
    }
  }

  const fetchUsers = () => {
    setIsLoading(true)
    const usersCollection = firestore.collection('users');
    usersCollection.get().then((querySnapshot) => {
      const userData = [] as any[];
      querySnapshot.forEach((doc) => {
        setIsLoading(false)
        const data = doc.data();
        
        userData.push({
          id: doc.id,
          name: data.firstName + ' ' + data.lastName, 
          role: data.role,
        });
      });
      setUsers(userData);
    });
  }

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <div className='flex justify-center my-20'>
      <div>
        <h2 className='text-2xl font-semibold mb-6 text-center'>User List</h2>
        {
          users && !isLoading ? (
            <div>
              {users.map((user) => (
                <div key={user.id} className='pb-5'>
                  <strong>Name: {user.name}</strong> - Role: {user.role}
                  {user.role === 'hr' && (
                    <button className='bg-blue-300 ml-4 rounded p-2' onClick={() => updateUserRole(user.id, 'admin')}>{loading ? 'Updating...' : 'Update roles'}</button>
                  )}
                </div>
              ))}
          </div>
          ) : (
            <p>Loading user data...</p>
          )
        }
      </div>
    </div>
  )
}

export default Admin