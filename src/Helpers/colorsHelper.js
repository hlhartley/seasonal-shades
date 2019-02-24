export const formatColorName = (input) => {
    if (input) {
        return input.toLowerCase().trim().replace(/[\s'&_()-]/g, '');
    }
    return 'none';
}

export const loadColors = (productType) => {
    const allColors = {};
    const productColors = [];
    
    productType.forEach((product) => {
        product.product_colors.forEach(color => {
            if (color.colour_name) {
                productColors.push(color.colour_name.trim());
                allColors[formatColorName(color.colour_name)] = {
                    product,
                    hexcode: color.hex_value,
                };
            }
        });
    });
    
    productColors.sort()

    return {
        allColors,
        productColors,
    };
}
