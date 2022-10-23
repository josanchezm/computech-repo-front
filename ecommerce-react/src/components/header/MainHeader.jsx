import LogoCompuTech from '@/assets/images/logo.svg'
import FotoPerfilUsuario from '@/assets/images/image-avatar.png'
import MenuIcon from '@/components/Icons/MenuIcon';
import MenuCart from '@/components/Icons/MenuCart';
import CloseMenu from '@/components/Icons/CloseMenu';
import { useState } from 'react';

const MainHeader = () => {
    const [navClass, setNavClass] = useState('hidden font-bold md:flex md:mr-auto md:h-auto md:flex-row md:gap-6 md:static md:p-0');

    const handleOpenMenu = () => {
        setNavClass('absolute top-0 left-0 h-full p-6 gap-5 font-bold w-4/5 bg-white flex flex-col md:flex md:flex-row md:mr-auto md:gap-6 md:static md:p-0');
    }

    const handleCloseMenu = () => {
        setNavClass('hidden font-bold md:flex md:mr-auto md:h-auto md:flex-row md:gap-6 md:static md:p-0');
    }

    return (
        <header className='container flex items-center mx-auto px-2 py-6 gap-2'>
            <button className='md:hidden' onClick={handleOpenMenu}>
               <MenuIcon />
            </button>
            <img src={LogoCompuTech} alt="Logo CompuTech"  className='mr-auto pr-2 mb-1 md:mr-0'/>
            <nav className={navClass}>
                <button className='mb-6 md:hidden' onClick={handleCloseMenu}>
                    <CloseMenu />
                </button>
                <a href="#">Componentes</a>
                <a href="#">Torres</a>
                <a href="#">Portátiles</a>
                <a href="#">Acerca de</a>
                <a href="#">Contacto</a>
            </nav>
            <div className='flex gap-4'>
                <button>
                    <MenuCart />
                </button>
                <img src={FotoPerfilUsuario} alt="Foto de perfil de usuario" className='w-10'/>
            </div>
        </header>
    );
}
export default MainHeader;