import MenuCart from '@/components/Icons/MenuCart';

export default () => {
    return (
        <section className="container mx-auto p-4 flex flex-col gap-6 md:px-0">
            <p className="text-blue-900 font-bold">Computech</p>
            <h2 className="font-bold text-3xl">No esperes más, encuentra tu nuevo ordenador hoy!</h2>
            <p className="text-dark-grayish-blue">
                Este potente ordenador es una elección perfecta para edición audiovisual y gaming, lo mejor es que podrás llevarlo a donde tú quieras.
            </p>
            <ul>
                <li><img src="" alt="Icono tarjeta gráfica" />GTX 1660ti</li>
                <li><img src="" alt="Icono procesador" />AMD Ryzen 5 3600X</li>
                <li><img src="" alt="Icono memoria RAM" />16gb RAM</li>
                <li><img src="" alt="Icono disco almacenamiento" />SSD 256GB</li>
                <li><img src="" alt="Icono pantalla" />16'' HD 1920x1080</li>
            </ul>
            <div className="flex gap-6 font-bold">
                <span className="text-2xl">$2,733,000</span>
                <span className="mr-auto rounded-md bg-purple-200 p-2">5%</span>
            </div>
            <div className="grid grid-cols-3 gap-2 font-bold md:grid-cols-[1fr_1.5fr] items-center">
                <div className="col-span-3 flex items-center justify-between p-3 w-[85%] mx-auto text-2xl bg-gray-100 rounded-md md:w-[75%] md:col-span-1">
                    <button>-</button>
                    <span className='text-xl'>0</span>
                    <button>+</button>
                </div>
                <button className="flex justify-center w-[85%]  gap-3 mx-auto col-span-3 bg-blue-700 p-4 text-white rounded-md hover:bg-blue-900 transition-all md:col-span-1 md:w-full">
                    <MenuCart className="fill-white" />
                    <span>Agregar al carrito</span>
                </button>
            </div>
        </section>        
    )
}