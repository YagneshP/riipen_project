
import Link from "next/link";


const NavAdmin = () => {

  return ( 
    <div className="adm-container">
    <div className="sidebar">
      <ul>
      <li><Link class="active" href="/admin">Dashboard</Link></li>
      <li><Link href="/admin/products-list">Products</Link></li>
      </ul>
    </div>

      <div className="content">
        <h2>Admin Content</h2>
       
      </div>
    </div>
		
   );
}
 
export default NavAdmin;