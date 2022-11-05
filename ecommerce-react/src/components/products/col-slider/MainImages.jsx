import SlideProduct from "@/components/products/col-slider/SlideProduct";
import { useState } from 'react';

export default ({ARRAY_IMGS, ARRAY_IMGS_SMALL}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleOpenModal = () => window.innerWidth >= 768 && setIsOpenModal(true);
    
    const handleCloseModal = () => {
        setIsOpenModal(false);
    }
    return (
        <>
            <SlideProduct 
                ARRAY_IMGS={ARRAY_IMGS} 
                ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
                className="grid md:grid-cols-4 md:gap-6"
                handleOpenModal={handleOpenModal} 
            />
            {isOpenModal && (
                <SlideProduct 
                    ARRAY_IMGS={ARRAY_IMGS} 
                    ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
                    isOpenModal={isOpenModal}
                    handleCloseModal={handleCloseModal}
                    className="hidden md:grid md:grid-cols-4 md:gap-4 md:absolute md:max-w-xl md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 md:left-1/2" 
                />
            )} 
        </>
    );
}