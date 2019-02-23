export const formatColorName = (input) => {
    if (input) {
        return input.toLowerCase().trim().replace(/[\s']/g, '');
    }
    return 'none';
}

export const makeColorObj = (productType, allColors) => {
    productType.forEach((product) => {
        product.product_colors.forEach(color => {
            allColors[formatColorName(color.colour_name)] = {
                product,
                hexcode: color.hex_value,
            };
        });
    });
}
