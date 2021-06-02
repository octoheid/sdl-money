Ext.define('SDLMoney.store.Base', {
    extend: 'Ext.data.Store',

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
