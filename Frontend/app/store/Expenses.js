Ext.define('SDLMoney.store.Expenses', {
    extend: 'SDLMoney.store.Base',

    alias: 'store.expenses',
    autoLoad: true,
    model: 'SDLMoney.model.Expenses',
    proxy: {
        type: 'ajax',
        url: '/api/expenses'
    }

});
