Ext.define('SDLMoney.store.ExpenseCategory', {
    extend: 'SDLMoney.store.Base',

    alias: 'store.expensecategory',
    autoLoad: true,
    model: 'SDLMoney.model.ExpenseCategory',
    proxy: {
        type: 'ajax',
        url: '/api/expensecategory'
    }

});
