const initialState = {
    cost: {},
    pisces: 1,
    materials: [],
    allData: [],
};

const mngMaterial = () => {
    const materials = initialState.materials;
    const newMaterial = materials
    .filter(item => item.view === true)
    .map((item) => {
        item.newWeight = (item.weight / initialState.pisces).toFixed(4);
        item.wastage = ((item.newWeight / 100) * 25).toFixed(4);
        item.newValue = (item.value / initialState.pisces).toFixed(4);
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
                allData: action.data,
            });

        case 'CHANGE_PISCES':
            initialState.pisces = action.pisces;
            const valuePCS = mngMaterial();

            return Object.assign({}, state, {
                data: valuePCS,
            });

        case 'ADD_REMOVE_MATERIALS':
            console.log('action.materials', action.materials);
            initialState.materials = action.materials;
            const newMaterial = mngMaterial();

            return Object.assign({}, state, {
                data: newMaterial,
            });
        default:
        return state;
    }
}
