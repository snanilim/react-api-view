const initialState = {
    cost: {},
    materials: [],
    costs: [],
    values: 1000,
    profitPercentage: 5,

    kg: 1000,
    weight: 1,
    pisces: 1,

    allData: [],
    allCostData: [],
    costData: [],
    basicinfo: {
        productName: '',
        announceNumber: '',
        presentValue: '',
        dateValue: Date,
    },
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

    const costList = newCost;
    const profitPercentage = initialState.profitPercentage;
    if (costList.length > 0) {
      let costSum = 0;

      // eslint-disable-next-line no-restricted-syntax
      for (const item of costList) {
        costSum += item.newValue;
      }

      const profit = {};
      profit.name = 'profit';
      profit.newValue = +((costSum / 100) * parseInt(profitPercentage, 10)).toFixed(2);
      const sumWithProfit = costSum + profit.newValue;
      const roundSumWithProfit = Math.round(sumWithProfit);
      profit.newValue = +(profit.newValue + (roundSumWithProfit - sumWithProfit)).toFixed(2);
      costList.push(profit);
    }

    return costList;
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
        case 'GENERATOR_SUCCESS':
            return Object.assign({}, state, {
                generators: action.data,
            });

        case 'CHANGE_BASIC_INFO':
            initialState.basicinfo.productName = action.productName;
            initialState.basicinfo.announceNumber = action.announceNumber;
            initialState.basicinfo.presentValue = action.presentValue;
            initialState.basicinfo.dateValue = action.dateValue;

            return Object.assign({}, state, {
                basicinfo: initialState.basicinfo,
            });

        case 'ONE_GENERATOR_SUCCESS':
            initialState.basicinfo.productName = action.data.basicinfo.productName;
            initialState.basicinfo.announceNumber = action.data.basicinfo.announceNumber;
            initialState.basicinfo.presentValue = action.data.basicinfo.presentValue;
            initialState.basicinfo.dateValue = action.data.basicinfo.dateValue;

            initialState.materials = action.data.materials;
            initialState.kg = action.data.kg;
            initialState.weight = action.data.weight;
            const OneValue = mngMaterial();

            initialState.costs = action.data.costs;
            initialState.profitPercentage = action.data.profitPercentage;
            initialState.values = action.data.values;
            const OneCostValue = mngCost();

            console.log('action.data.weight', action.data.weight);

            return Object.assign({}, state, {
                id: action.data.id,
                basicinfo: action.data.basicinfo,
                data: OneValue,
                costData: OneCostValue,
                profitPercentage: initialState.profitPercentage,
                values: initialState.values,
                kg: initialState.kg,
                weight: initialState.weight,
                pisces: +(initialState.kg / initialState.weight).toFixed(2),
            });

        case 'GENERATOR_MATERIAL_SUCCESS':
            initialState.materials = action.data;
            const value = mngMaterial();

            return Object.assign({}, state, {
                data: value,
                allData: action.data,
                kg: initialState.kg,
                weight: initialState.weight,
                pisces: +(initialState.kg / initialState.weight).toFixed(2),
            });

        case 'CHANGE_PISCES':
            initialState.pisces = action.pisces;
            initialState.kg = action.kg;
            initialState.weight = action.weight;
            const valuePCS = mngMaterial();

            return Object.assign({}, state, {
                data: valuePCS,
                kg: initialState.kg,
                weight: initialState.weight,
                pisces: +(initialState.kg / initialState.weight).toFixed(2),
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
                profitPercentage: initialState.profitPercentage,
                values: initialState.values,
            });

        case 'CHANGE_COST_VALUES':
            initialState.values = action.values;
            initialState.profitPercentage = action.profitPercentage;
            const CostValuePCS = mngCost();

            return Object.assign({}, state, {
                costData: CostValuePCS,
                profitPercentage: initialState.profitPercentage,
                values: initialState.values,
            });

        case 'UPDATE_COSTS':
            initialState.costs = action.costs;
            const newCost = mngCost();

            return Object.assign({}, state, {
                costData: newCost,
                profitPercentage: initialState.profitPercentage,
            });

        case 'TOOGLE_GENERATOR_DRAWER':
            return Object.assign({}, state, {
              visible: action.visible,
            });

        default:
        return state;
    }
}
