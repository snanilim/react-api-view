const initialState = {
    cost: {},
    pisces: 1,
    materials: [],
    costs: [],
    values: 1000,
    allData: [],
    allCostData: [],
    costData: [],
};

const mngCost = () => {
    const costs = initialState.costs;
    const newCost = costs
    .filter(item => item.view === true)
    .map((item) => {
        item.newValue = +(item.value / initialState.values).toFixed(2);
        // console.log('newValue', newValue);
        // item.newValue = parseFloat(newValue);
        return item;
    });
    return newCost;
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

        case 'GENERATOR_COSTS_SUCCESS':
            initialState.costs = action.data;
            const CostValue = mngCost();
            console.log('CostValue', CostValue);
            return Object.assign({}, state, {
                costData: CostValue,
                allCostData: action.data,
            });

        case 'CHANGE_COST_VALUES':
            initialState.values = action.values;
            const CostValuePCS = mngCost();

            return Object.assign({}, state, {
                costData: CostValuePCS,
            });

        case 'UPDATE_COSTS':
            initialState.costs = action.costs;
            const newCost = mngCost();

            return Object.assign({}, state, {
                costData: newCost,
            });

        default:
        return state;
    }
}
