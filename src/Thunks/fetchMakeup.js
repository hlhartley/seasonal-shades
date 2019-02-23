import { setAllColors, getLipstick, getLipstickColors, getBlush, getBlushColors, getEyeshadow, getEyeshadowColors, getNailpolish, getNailpolishColors, setLoading, setError } from '../Actions/index';
import { API } from '../Helpers/requests';
import { makeColorObj } from '../Helpers/colorsHelper'

export const fetchMakeup = (path) => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const allColors = {};
            const someProduct = await API(path);
            makeColorObj(someProduct, allColors);
            dispatch(setAllColors(allColors));
        } catch (error) {
            dispatch(setError(error));
        }
        dispatch(setLoading(false));
    }
}
