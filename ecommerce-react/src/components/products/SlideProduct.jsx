import imgProduct1 from '@/assets/images/image-product-1.jpg';
import imgProduct2 from '@/assets/images/image-product-2.jpg';
import imgProduct3 from '@/assets/images/image-product-3.jpg';
import imgProduct4 from '@/assets/images/image-product-4.jpg';
import imgProduct1Small from '@/assets/images/image-product-1-thumbnail.jpg';
import imgProduct2Small from '@/assets/images/image-product-2-thumbnail.jpg';
import imgProduct3Small from '@/assets/images/image-product-3-thumbnail.jpg';
import imgProduct4Small from '@/assets/images/image-product-4-thumbnail.jpg';
import PreviousIcon from '@/components/Icons/PreviousIcon';
import NextIcon from '@/components/Icons/NextIcon';
import { useState } from 'react';

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

export default () => {
    const [index, setIndex] = useState(0);

    const handleClickNext = () => {
        index === ARRAY_IMGS.length-1 ? setIndex(0) : setIndex(index+1);
    }
    
    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMGS.length-1) : setIndex(index-1);
    }
    return (
        <section className="grid md:grid-cols-4 md:gap-4">
            <div className='col-span-4 relative'>
                <img src={ARRAY_IMGS[index]} alt="Imagen producto grande" className='aspect-[16/12]'/>
                <div className='absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-5'>
                    <button className='bg-white w-10 h-10 rounded-full grid place-items-center' onClick={handleClickPrev}><PreviousIcon /></button>
                    <button className='bg-white w-10 h-10 rounded-full grid place-items-center' onClick={handleClickNext}><NextIcon /></button>
                </div>
            </div>
            <img src={imgProduct1Small} alt="Imagen 1 producto" className='hidden md:block'/>
            <img src={imgProduct2Small} alt="Imagen 2 producto" className='hidden md:block'/>
            <img src={imgProduct3Small} alt="Imagen 3 producto" className='hidden md:block'/>
            <img src={imgProduct4Small} alt="Imagen 4 producto" className='hidden md:block'/>
        </section>
    )
}