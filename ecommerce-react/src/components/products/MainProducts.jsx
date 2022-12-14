import DetailsProduct from "@/components/products/col-details/DetailsProduct";
import MainImages from "@/components/products/col-slider/MainImages";

import imgProduct1 from '@/assets/images/image-product-1.jpg';
import imgProduct2 from '@/assets/images/image-product-2.jpg';
import imgProduct3 from '@/assets/images/image-product-3.jpg';
import imgProduct4 from '@/assets/images/image-product-4.jpg';
import imgProduct1Small from '@/assets/images/image-product-1-thumbnail.jpg';
import imgProduct2Small from '@/assets/images/image-product-2-thumbnail.jpg';
import imgProduct3Small from '@/assets/images/image-product-3-thumbnail.jpg';
import imgProduct4Small from '@/assets/images/image-product-4-thumbnail.jpg';

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
const ARRAY_IMGS_SMALL = [imgProduct1Small, imgProduct2Small, imgProduct3Small, imgProduct4Small]

const MainProducts = () => {
    return (
        <main className="grid grid-cols-1 gap-8 md:grid-cols-2 md:min-h-[calc(100vh-88px-3px)] md:container md:mx-auto">
            <MainImages ARRAY_IMGS={ARRAY_IMGS} ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL} />
            <DetailsProduct />
        </main>
    );
}

export default MainProducts;