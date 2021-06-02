Ext.define('SDLMoney.view.settings.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'settingscontainer',
    requires:[
        //'SDLMoney.view.settings.category.List'
    ],
    
    items: [{
        xtype: 'expensecategorylist'
    }]

});
