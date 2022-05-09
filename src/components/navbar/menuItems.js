import { AiOutlineDown } from 'react-icons/ai';

export const icons = [AiOutlineDown];


export default [
    {
        title : 'خیلی سبز',
        url : '/pretty-green',
        hasSubmenu : false,
    },
    {
        title : 'محصولات',
        url : '/products',
        hasSubmenu : true,
        subMenuItems : [
            {
                title : 'قرنیز',
                url : 'products/cornice',
            },
            {
                title : 'فیتینگ',
                url : 'products/fitting',
            },
            {
                title : 'کاغذ دیواری',
                url : '/products/wallpaaper',
            },
            {
                title : 'سقف کاذب',
                url : '/products/droppedceiling',
            },
            {
                title : 'پارتیشن',
                url : '/products/partition',
            },
            {
                title : 'ورق MDF',
                url : '/products/mdf-sheets',
            }
        ]
    },
    {
        title : 'وبلاگ',
        url : '/blog',
        hasSubmenu : true,
    },
    { 
        title : 'خدمات',
        url : '/services',
        hasSubmenu : true,
        subMenuItems : [
            {
                title : 'بنا',
                url : '/services/building',
                subMenuItems : [
                    {
                        title : 'ساخت سازه',
                        url : '/services/building/structures-construction',
                    },
                    {
                        title : 'تخریب بنا',
                        url : '/services/building/building-demolition',
                    },
                    {
                        title : 'نقشه کشی',
                        url : '/services/building/drawing',
                    }
                ]
            },
            {
                title : 'معماری داخلی',
                url : '/services/interior-architecture',
            }
        
        ]

    },
    {
        title : 'درباره ما',
        url : '/about-us',
        hasSubmenu : false
    }


]