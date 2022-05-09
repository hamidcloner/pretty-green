export const sizes = {
    xs : '576px',
    sm : '576px',
    md : '768px',
    lg : '992px',
    xl : '1200px',
    xxl : '1400px'
};

export default {
    xs_devices : `(max-width : ${sizes.xs})`,
    sm_devices : `(min-width : ${sizes.sm})`,
    md_devices : `(min-width : ${sizes.md})`,
    lg_devices : `(min-width : ${sizes.lg})`,
    xl_devices : `(min-width : ${sizes.xl})`,
    xx_devices : `(min-width : ${sizes.xxl})`
};



