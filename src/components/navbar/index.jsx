import React from 'react';
import '../../styles/navbar.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import '../../styles/navbar.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Cookies from 'universal-cookie';
import { Link, useNavigate } from 'react-router-dom';

export default function NavbarConponent() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const handleSignOut = () => {
        cookies.remove('refreshToken');
        navigate("/login");
    };
    const handleShowSideBar = (e) => {
        const homeContainer = e.target.closest('.home_container');
        console.log(homeContainer);
        homeContainer.classList.toggle('small_sidebar');
    };

    const handleShowMoreInfo = (e) => {
        const showMoreInfoContainer = e.target.closest('.user_more__action').querySelector('.more_infor_container');
        showMoreInfoContainer.classList.toggle('show');
    };

    return (
        <nav className='nav_container p-3  h-[70px] flex items-center sticky top-0 z-[1000] bg-white'>
            <div className="logo_nav">
                <img className='large_logo w-[140px] m-auto h-[28px]' src="https://themewagon.github.io/purple-react/static/media/logo.a76c464b.svg" alt="logo" />
                <img className='small_logo w-[20px] m-auto h-[28px]' src="https://themewagon.github.io/purple-react/static/media/logo-mini.d16823d3.svg" alt="logo" />
            </div>
            <div className="nav_main__menu flex items-center px-6 gap-5">
                <div className="toggle_icon cursor-pointer" onClick={handleShowSideBar}>
                    <MenuOutlinedIcon className='!fill-[#a1a1aa] ' />
                </div>
                <div className="nav_search rounded-2xl overflow-hidden flex items-center">
                    <div className='px-2 pt-1  '>
                        <SearchIcon className="font-light !fill-[#a1a1aa] !w-[17px] !h-[17px] cursor-pointer" />
                    </div>
                    <input type="text" placeholder='Search project ...' className="nav_search__input text-[14px] px-2 min-w-[300px] border-none" />
                </div>
                <div className="left_nav__container ml-auto flex items-center gap-5">
                    <div className="user_info flex gap-3 items-center">
                        <div className="avatar">
                            <img className='h-[32px] w-[32px] rounded-full ' src="https://themewagon.github.io/purple-react/static/media/face1.42d41e61.jpg" alt="avatar_user" />
                        </div>
                        <div className="user_more__action cursor-pointer relative">
                            <div className="name flex items-center" onClick={handleShowMoreInfo}>
                                Phu Dao_Van
                                <KeyboardArrowDownIcon className='!h-[18px] !fill-[#4c1d95]' />
                            </div>
                            <div className="more_infor_container absolute top-[45px] right-0 w-[160px] bg-white rounded-sm shadow-md">
                                <div className="sign_out px-[13px] py-[13px] hover:bg-gray-100 flex items-center">
                                    <AutorenewIcon className='!fill-[#22d3ee] !text-[17px] mr-2' />
                                    Active Account
                                </div>
                                <Link to={'login'} className="sign_out px-[13px] py-[13px] hover:bg-gray-100 flex items-center" onClick={handleSignOut}>
                                    <LogoutIcon className='!fill-[#b66dff] !text-[17px] mr-2' />
                                    Sign out
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mail active cursor-pointer mx-2 ">
                        <MailOutlineIcon className='!fill-[#a1a1aa] !h-[20px] ' />
                    </div>
                    <div className="user_noti cursor-pointer mx-2" >
                        <NotificationAddIcon className='!fill-[#a1a1aa]' />
                    </div>
                </div>
            </div>
        </nav>

    );
}