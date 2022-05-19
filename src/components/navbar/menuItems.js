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
                id : 0,
                title : 'قرنیز',
                url : '/products/cornice',
            },
            {
                id : 1,
                title : 'فیتینگ',
                url : '/products/fitting',
            },
            {
                id : 2,
                title : 'کاغذ دیواری',
                url : '/products/wallpaaper',
            },
            {
                id : 3,
                title : 'سقف کاذب',
                url : '/products/droppedceiling',
            },
            {
                id : 4,
                title : 'پارتیشن',
                url : '/products/partition',
            },
            {
                id : 5,
                title : 'ورق MDF',
                url : '/products/mdf-sheets',
            }
        ]
    },
    {
        id : 2,
        title : 'وبلاگ',
        url : '/blog',
        hasSubmenu : false,
    },
    { 
        id : 3,
        title : 'خدمات',
        url : '/services',
        hasSubmenu : true,
        subMenuItems : [
            {
                id : 0,
                title : 'بنا',
                url : '/services/building',
                subMenuItems : [
                    {
                        id : 0,
                        title : 'ساخت سازه',
                        url : '/services/building/structures-construction',
                    },
                    {
                        id : 1,
                        title : 'تخریب بنا',
                        url : '/services/building/building-demolition',
                    },
                    {
                        id : 2,
                        title : 'نقشه کشی',
                        url : '/services/building/drawing',
                    }
                ]
            },
            {
                id : 1,
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