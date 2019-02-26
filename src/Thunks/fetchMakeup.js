import { setAllColors, getLipstickColors, getBlushColors, getEyeshadowColors, getNailpolishColors, setLoading, setError } from '../Actions/index';
import { API } from '../Helpers/requests';
import { loadColors } from '../Helpers/colorsHelper'

export const fetchMakeup = (path) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const someProduct = await API(path);
            const { allColors, productColors } = loadColors(someProduct);
            dispatch(setAllColors(allColors));

            switch (path) {
                case 'lipstick':
                    dispatch(getLipstickColors(productColors));
                    break;
                case 'blush':
                    dispatch(getBlushColors(productColors));
                    break;
                case 'eyeshadow':
                    dispatch(getEyeshadowColors(productColors));
                    break;
                case 'nail_polish':
                    dispatch(getNailpolishColors(productColors));
                    break;
                default:
                    break;
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
        dispatch(setLoading(false));
    }
}
