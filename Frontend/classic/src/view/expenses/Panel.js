Ext.define('SDLMoney.view.expenses.Panel', {
    //extend: 'Ext.panel.Panel',
    extend: 'Ext.container.Container',
    xtype: 'expensespanel',
    width: "100%",
    height: "100%",
    //layout: {
    //    type: 'fit',
    //},
    layout: {
        type: 'table',
        // The total column count must be specified here
        columns: 2,
        tableAttrs: {
            style: {
               width: '100%',
               height: '100%'
            }
         }
    },
    border: 5,
    style: {
        borderColor: 'red',
        borderStyle: 'solid'
    },
    items:[
    {
        xtype: 'expenseslist',
        height: 400,
        colspan: 2
    },
    {
        xtype: 'expensesinfo',
        height: 400
    },
    {
        xtype: 'expensesinfo2',
        height: 400
    }]
});