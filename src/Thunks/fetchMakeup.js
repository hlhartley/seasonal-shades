import { getAllColors, getLipstick, getLipstickColors, getBlush, getBlushColors, getEyeshadow, getEyeshadowColors, getNailpolish, getNailpolishColors, setLoading, setError } from '../Actions/index';
import { API } from '../Helpers/requests';

export const fetchAllColors = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const allColors = {};
            const lipstick = await API('lipstick')
                lipstick.forEach((lipstick) => {
                    lipstick.product_colors.forEach(color => {
                        allColors[color.hex_value] = color.colour_name;
                    });
                });
            const blush = await API('blush')
            blush.forEach((blush) => {
                blush.product_colors.forEach(color => {
                    allColors[color.hex_value] = color.colour_name;
                });
            });
            const eyeshadow = await API('eyeshadow')
            eyeshadow.forEach((eyeshadow) => {
                eyeshadow.product_colors.forEach(color => {
                    allColors[color.hex_value] = color.colour_name;
                });
            });
            const nailpolish = await API('nail_polish')
            nailpolish.forEach((nailpolish) => {
                nailpolish.product_colors.forEach(color => {
                    allColors[color.hex_value] = color.colour_name;
                });
            });
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
                    if (!colors[color.hex_value]) {
                        colors[color.hex_value] = [];
                    } 
                    colors[color.hex_value].push(item.id);
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
