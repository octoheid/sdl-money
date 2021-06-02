Ext.define('SDLMoney.store.Month', {
    extend: 'SDLMoney.store.Base',

    alias: 'store.month',
    autoLoad: true,
    model: 'SDLMoney.model.Month',
    data : {
        data: [
            {
                monthid: 1,
                month: 'Januari'
            },
            {
                monthid: 2,
                month: 'Februari'
            },
            {
                monthid: 3,
                month: 'March'
            },
            {
                monthid: 4,
                month: 'April'
            },
            {
                monthid: 5,
                month: 'May'
            },
            {
                monthid: 6,
                month: 'June'
            },
            {
                monthid: 7,
                month: 'July'
            },
            {
                monthid: 8,
                month: 'August'
            },
            {
                monthid: 9,
                month: 'September'
            },
            {
                monthid: 10,
                month: 'October'
            },
            {
                monthid: 11,
                month: 'November'
            },
            {
                monthid: 12,
                month: 'December'
            }
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners: {
        load: {
            fn: function(me){ 
                //var cmb_expense = Ext.getCmp('cmb_expense_monthselector');
                //cmb_expense.select(me.getAt(new Date().getMonth()));
            }
        }
    }



});
