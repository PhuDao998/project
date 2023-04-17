import '../../styles/navbar.css';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const handleExpandMenu = (e) =>{
    const sibarItem = e.target.closest('.sidebar_item')
    sibarItem.classList.toggle('expanded_menu')
  }
  const handleRidirect = (e) => {
    const listSibarItem = document.querySelectorAll('li.sidebar_item')
    listSibarItem.forEach(sibarItem => sibarItem.classList.remove('active'))
    const currentSibarItem = e.target.closest('.sidebar_item')
    currentSibarItem.classList.add('active')
  }
  return (
    <div className='main_sibar__container w-[260px] min-h-full  fixed'>
      <ul className="sidebar_container">
        <li className="sidebar_item user_info__sidebar h-[84px] gap-3 flex items-center px-[32px]">
            <div className="avatar">
              <img className='h-[44px] w-[44px] rounded-full ' src="https://themewagon.github.io/purple-react/static/media/face1.42d41e61.jpg" alt="avatar_user" />
            </div>
            <div className="user_more__action cursor-pointer relative">
              <div className="finfor" >
                <div className="font-bold text-[14px]">
                  Phu Van_Dao
                </div>
                <div className="text-light text-[12px] text-gray-400">
                  manager account
                </div>
              </div>
            </div>
            <LibraryAddCheckIcon className='!fill-[#0ea5e9] !text-[20px]'/>
        </li>
        <li className="sidebar_item active px-[32px]">
          <Link to={'/'} onClick={handleRidirect} className='flex item-center w-full py-[18px]'>
            {/* <a href="/sibar" className='flex item-center w-full py-[18px]'> */}
              <span className='menu-title inline-block mr-auto'>
                Dashboard
              </span>
              <HomeIcon />
            {/* </a> */}
          </Link>
        </li>
        <li className="sidebar_item">
          <div className="sidebar-item-link flex item-center py-[18px] w-full px-[32px]" onClick={handleExpandMenu}>
            <span className='mr-auto menu-title'>
              Basic UI Element
            </span>
            <KeyboardArrowDownIcon className='sibar_expand__meunu' />
            <GpsFixedIcon/>
          </div>
          <ul className="list_sidebar__subItem">
            <li className="sidebar_subItem__link px-[32px]">
              <Link to="dashboard1" onClick={handleRidirect} className='block py-3'>
                {/* <a href="/" className='block py-3'> */}
                  <ArrowRightAltIcon className='mr-3'/>
                  <span>Button</span>
                {/* </a> */}
              </Link>
            </li>
            <li className="sidebar_subItem__link px-[32px]">
              <Link to={'dashboard2'} onClick={handleRidirect}  className='block py-3'>
                {/* <a className='block py-3'> */}
                  <ArrowRightAltIcon className='mr-3'/>
                  <span>Dropdowns</span>
                {/* </a> */}
              </Link>
            </li>
            <li className="sidebar_subItem__link px-[32px]">
              <Link to={'dashboard3'} onClick={handleRidirect} className='block py-3'>
                {/* <a href="/" className='block py-3'> */}
                  <ArrowRightAltIcon className='mr-3'/>
                  <span>Typography</span>
                {/* </a> */}
              </Link>
            </li>
          </ul>
        </li>
        <li className="sidebar_item">
          <div className="sidebar-item-link flex item-center py-[18px] w-full px-[32px]" onClick={handleExpandMenu}>
            <span className='mr-auto menu-title'>
              Basic UI Element
            </span>
            <KeyboardArrowDownIcon className='sibar_expand__meunu' />
            <GpsFixedIcon/>
          </div>
          <ul className="list_sidebar__subItem">
            <li className="sidebar_subItem__link px-[32px]">
              <Link to="dashboard1" onClick={handleRidirect} className='block py-3'>
                {/* <a href="/" className='block py-3'> */}
                  <ArrowRightAltIcon className='mr-3'/>
                  <span>Button</span>
                {/* </a> */}
              </Link>
            </li>
            <li className="sidebar_subItem__link px-[32px]">
              <Link to={'dashboard2'} onClick={handleRidirect} className='block py-3'>
                {/* <a className='block py-3'> */}
                  <ArrowRightAltIcon className='mr-3'/>
                  <span>Dropdowns</span>
                {/* </a> */}
              </Link>
            </li>
            <li className="sidebar_subItem__link px-[32px]">
              <Link to={'dashboard3'} onClick={handleRidirect} className='block py-3'>
                {/* <a href="/" className='block py-3'> */}
                  <ArrowRightAltIcon className='mr-3'/>
                  <span>Typography</span>
                {/* </a> */}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}