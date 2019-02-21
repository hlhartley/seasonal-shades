import { getLipstick, getLipstickColors, getBlush, getBlushColors, setLoading, setError } from '../Actions/index';
import { API } from '../Helpers/requests';

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
                    dispatch(getBlushColors(colors))
            }
        } catch (error) {
            dispatch(setError(error));
        }
        dispatch(setLoading(false));
    }
}
