Ext.define('SDLMoney.store.Year', {
    extend: 'SDLMoney.store.Base',

    alias: 'store.year',
    autoLoad: true,
    model: 'SDLMoney.model.Year',
    proxy: {
        type: 'ajax',
        url: '/api/years'
    }



});
