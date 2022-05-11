import { AiOutlineDown } from 'react-icons/ai';
import logo from '../../assets/img/logo.svg';

export const icons = [AiOutlineDown];


export default [
    {
        id : 0,
        title : 'خیلی سبز',
        url : '/pretty-green',
        hasSubmenu : false,
        logoIcon : logo,
    },
    {
        id : 1,
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
        id : 2,
        title : 'وبلاگ',
        url : '/blog',
        hasSubmenu : true,
    },
    { 
        id : 3,
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
        id : 4,
        title : 'درباره ما',
        url : '/about-us',
        hasSubmenu : false
    }


]