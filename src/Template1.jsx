import { Outlet } from 'react-router-dom';
import { useUserData } from './UserDataContext';
import Navbar from './temp1_comp/Navbar';
import Footer from './temp1_comp/Footer';

export default function Template1() {
  const { userData } = useUserData();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex flex-col">
      <Navbar userData={userData} />
      <main className="flex-grow">
        <Outlet /> {/* Context is automatically available to children */}
      </main>
      <Footer userData={userData} />
    </div>
  );
}