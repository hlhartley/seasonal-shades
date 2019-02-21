export const API = async (path) => {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${path}`;
    const response = await fetch(url);
    if (response.status >=300) {
        throw new Error(`Error fetching: ${response.statusText}`)
    } else {
        const result = await response.json();
        return result
    }
}