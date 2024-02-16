import { Outlet } from 'react-router-dom'
import Topbar from '../Topbar'
import './index.scss'

const Layout = () => {
    return ( 
        <div className="App"> 
          <Topbar />
          <div className="page">
            <span className='tags top-tags'>
            <span className='bottom-tag-html'>&lt;html&gt;</span>
              <br/>
              &lt;body&gt;
            </span>

            <Outlet />
            <span className='tags bottom-tags'>
              &lt;/body&gt;
              <br />
              <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
          </div> 
        </div>
    )
}

export default Layout