import { getAllColors, getLipstick, getLipstickColors, getBlush, getBlushColors, getEyeshadow, getEyeshadowColors, getNailpolish, getNailpolishColors, setLoading, setError } from '../Actions/index';
import { API } from '../Helpers/requests';
import { makeColorObj } from '../Helpers/colorsHelper'

export const fetchAllColors = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const allColors = {};
            const lipstick = await API('lipstick')
            const blush = await API('blush')
            const eyeshadow = await API('eyeshadow')
            const nailpolish = await API('nail_polish')

            makeColorObj(lipstick, allColors);
            makeColorObj(blush, allColors);
            makeColorObj(eyeshadow, allColors);
            makeColorObj(nailpolish, allColors);

            dispatch(getAllColors(allColors))
        } catch (error) {
            dispatch(setError(error));
        }
        dispatch(setLoading(false));
        }
    }


export const fetchMakeup = (path) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const colors = {};
            const items = {};
            const result = await API(path);
            result.forEach((item) => {
                item.product_colors.forEach(color => {
                    // colors[color.hex_value] = item.id;
                    if (!colors[color.colour_name]) {
                        colors[color.colour_name.toLowerCase().trim().replace(/\s/g, '')] = [];
                    } 
                    colors[color.colour_name.toLowerCase().trim().replace(/\s/g, '')].push(item.id);
                })
                items[item.id] = item;
            });
            switch(path) {
                case 'lipstick':
                    dispatch(getLipstick(items));
                    dispatch(getLipstickColors(colors));
                case 'blush':
                    dispatch(getBlush(items));
                    dispatch(getBlushColors(colors));
                case 'eyeshadow':
                    dispatch(getEyeshadow(items));
                    dispatch(getEyeshadowColors(colors));
                case 'nail_polish':
                    dispatch(getNailpolish(items));
                    dispatch(getNailpolishColors(colors));
            }
        } catch (error) {
            dispatch(setError(error));
        }
        dispatch(setLoading(false));
    }
}
