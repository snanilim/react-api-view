const initialState = {
    cost: {},
    pisces: 1,
    materials: [],
};

const mngMaterial = () => {
    console.log('materials', initialState.materials);
    const newMaterial = initialState.materials.map((item) => {
        item.weight = (item.weight / initialState.pisces).toFixed(4);
        item.wastage = ((item.weight / 100) * 25).toFixed(4);
        item.value = (item.value / initialState.pisces).toFixed(4);
        console.log('item', item);
        return item;
    });
    return newMaterial;
};

export default function auth(state = initialState, action) {
    if (!state.hydrated) {
        state = Object.assign({}, initialState, state, { hydrated: true });
    }
    switch (action.type) {
        case 'GENERATOR_MATERIAL_SUCCESS':
            initialState.materials = action.data;
            const value = mngMaterial();

            return Object.assign({}, state, {
                data: value,
            });

        case 'CHANGE_PISCES':
            initialState.pisces = action.pisces;
            const valuePCS = mngMaterial();

            return Object.assign({}, state, {
                data: valuePCS,
            });
        default:
        return state;
    }
}
