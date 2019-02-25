import { formatColorName, loadColors } from '../Helpers/colorsHelper';

describe('formatColorName', () => {
    it('should format the input correctly', () => {
        const mockInput = ' this is a mock input&('
        const expected = 'thisisamockinput'
        const result = formatColorName(mockInput)
        expect(result).toEqual(expected) 
    });

    it('should load all colors correctly', () => {
        const mockProductType = [
            {id: 1040, product_colors: [
                {hex_value: "#444446", colour_name: "Casablanca"}, {hex_value: "#6B7475", colour_name: "Evrest"}, {hex_value: "#966A54", colour_name: "Sahara"}]
            },
            {id: 1038, product_colors: [
                {hex_value: "#444446", colour_name: "Casablanca"}, {hex_value: "#6B7475", colour_name: "Evrest"}, {hex_value: "#966A54", colour_name: "Sahara"}]
            },
            {id: 1036, product_colors: [
                {hex_value: "#444446", colour_name: "Casablanca"}, {hex_value: "#6B7475", colour_name: "Evrest"}, {hex_value: "#966A54", colour_name: "Sahara"}]
            },
        ]
        const expected = {
            allColors: {"casablanca": {"hexcode": "#444446", "product": {"id": 1036, "product_colors": [{"colour_name": "Casablanca", "hex_value": "#444446"}, {"colour_name": "Evrest", "hex_value": "#6B7475"}, {"colour_name": "Sahara", "hex_value": "#966A54"}]}}, "evrest": {"hexcode": "#6B7475", "product": {"id": 1036, "product_colors": [{"colour_name": "Casablanca", "hex_value": "#444446"}, {"colour_name": "Evrest", "hex_value": "#6B7475"}, {"colour_name": "Sahara", "hex_value": "#966A54"}]}}, "sahara": {"hexcode": "#966A54", "product": {"id": 1036, "product_colors": [{"colour_name": "Casablanca", "hex_value": "#444446"}, {"colour_name": "Evrest", "hex_value": "#6B7475"}, {"colour_name": "Sahara", "hex_value": "#966A54"}]}}},
            productColors: ["Casablanca", "Evrest", "Sahara" ],
        }
        const result = loadColors(mockProductType)
        expect(result).toEqual(expected)
    });
});