import PreviousIcon from '@/components/Icons/PreviousIcon';
import NextIcon from '@/components/Icons/NextIcon';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default ({ARRAY_IMGS = [], ARRAY_IMGS_SMALL = [], isOpenModal = false, handleOpenModal = null, handleCloseModal = null, ...props}) => {
    const btnSlider = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        isOpenModal && btnSlider.current.classList.remove('md:hidden'); 
    }, [isOpenModal])

    const handleClickNext = () => {
        index === ARRAY_IMGS.length-1 ? setIndex(0) : setIndex(index+1);
    }
    
    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMGS.length-1) : setIndex(index-1);
    }
    return (
        <section {...props}>
            { isOpenModal && <button className='md:col-span-4 text-right' onClick={handleCloseModal}>cerrar</button> }
            <div className='col-span-4 relative self-center'>
                <img src={ARRAY_IMGS[index]} alt="Imagen producto grande" className='aspect-[16/13] w-full md:cursor-pointer'onClick={handleOpenModal} />
                <div ref={btnSlider} className='absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-5 md:hidden'>
                    <button className='bg-white w-10 h-10 rounded-full grid place-items-center' onClick={handleClickPrev}><PreviousIcon /></button>
                    <button className='bg-white w-10 h-10 rounded-full grid place-items-center' onClick={handleClickNext}><NextIcon /></button>
                </div>
            </div>
            {
                ARRAY_IMGS_SMALL.map((smallImg, i) => (
                    <div key={i} onClick={() => {setIndex(i)}} className='relative rounded-md overflow-hidden cursor-pointer hover:border'>
                        <img src={smallImg} alt="Imagen producto" className='hidden md:block '/>
                        <span className={`absolute top-0 left-0 h-full w-full hover:bg-[rgba(255,255,255,.5)] ${i === index && 'bg-[rgba(255,255,255,.5)]'}`}></span>
                    </div>
                ))
            }
        </section>
    )
}