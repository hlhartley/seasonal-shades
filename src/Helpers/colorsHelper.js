export const formatColorName = (input) => {
    if (input) {
        return input.toLowerCase().trim().replace(/[\s'_()]/g, '');
    }
    return 'none';
}

export const loadColors = (productType) => {
    const allColors = {};
    const productColors = [];

    productType.forEach((product) => {
        product.product_colors.forEach(color => {
            productColors.push(color.colour_name);
            allColors[formatColorName(color.colour_name)] = {
                product,
                hexcode: color.hex_value,
            };
        });
    });

    return {
        allColors,
        productColors,
    };
}
