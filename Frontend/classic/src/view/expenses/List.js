Ext.define('SDLMoney.view.expenses.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'expenseslist',
    requires: [
        'SDLMoney.store.Expenses',
        'SDLMoney.store.Year'
    ],

    title: 'Expenses',

    store: {
        type: 'expenses'
    },
    listeners: {
        added: {
            fn: function(me){ 
                me.setStore(Ext.StoreManager.get('Expenses'));
            }
        }
    },
    
    columns: [
        { text: 'Date',  dataIndex: 'date', xtype: 'datecolumn',   format:'d-m-Y'},
        { text: 'Year',  dataIndex: 'year', hidden: true},
        { text: 'Month',  dataIndex: 'month', hidden: true},
        { text: 'Day',  dataIndex: 'day', hidden: true},
        { text: 'Amount',  dataIndex: 'amount' },
        { text: 'Description', dataIndex: 'description', flex: 1 },
        { text: 'Category', dataIndex: 'category_name', flex: 1 }
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            text: 'Add',
            handler: function() {
                Ext.create('Ext.window.Window', {
                    title: 'Add expense',
                    height: 400,
                    width: 400,
                    layout: 'fit',
                    modal: true,
                    items: [Ext.create('SDLMoney.view.expenses.AddForm')]
                }).show();
            }
        },{
            xtype: 'tbfill'
        }, {
            id: 'cmb_expense_monthselector',
            xtype: 'combobox',
            store: {
                type: 'month'
            },
            displayField: 'month',
            editable: false,
            queryMode: 'local',
            valueField: 'monthnumber',
            forceSelection: true,
            listeners: {
                select: {
                    fn: function(me){ 
                        var store = Ext.StoreManager.get('Expenses');
                        store.proxy.extraParams["month"] = me.selection.data.monthid;
                        store.load();
                    }
                },
                afterrender: {
                    fn: function(me){ 
                        var store = Ext.StoreManager.get('Month');
                        //me.store = store;
                        //var d = new Date();
                        //var n = d.getMonth();
                        me.select(store.getAt(new Date().getMonth()));
                        //debugger;
                    }
                }
            },

        }, {
            id: 'cmb_expense_yearselector',
            xtype: 'combobox',
            store: {
                type: 'year'
            },
            displayField: 'year',
            editable: false,
            queryMode: 'local',
            valueField: 'year',
            forceSelection: true,
            listeners: {
                select: {
                    fn: function(me){ 
                        var store = Ext.StoreManager.get('Expenses');
                        store.proxy.extraParams["year"] = me.selection.data.year;
                        store.load();
                    }
                },
                afterrender: {
                    fn: function(me){ 
                        var store = Ext.StoreManager.get('Year');
                        me.select(store.getAt(new Date().getFullYear()));
                    }
                }
            },

        },
         {
            xtype: 'tbfill'
        }, {
            xtype: 'button',
            text: 'Delete',
            handler: function() {
                var grid = this.up('grid');
                var selectedRecord = grid.getSelectionModel().getSelection()[0].data;
                Ext.MessageBox.show({
                    title: 'Delete expense',
                    msg: 'Are you sure you want to delete expense ' + selectedRecord.description + '?',
                    buttons: Ext.MessageBox.OKCANCEL,
                    icon: Ext.MessageBox.WARNING,
                    fn: function(btn){
                        if(btn == 'ok'){
                            Ext.Ajax.request({
                                url: 'api/expenses',
                                method: 'DELETE',
                                jsonData: selectedRecord,
                                success: function(response, opts) {
                                  grid.store.load();  
                                  this.close();
                                },
                           
                                failure: function(response, opts) {
                                    console.log('server-side failure with status code ' + response.status);
                                }
                            });

                        } else {
                            return;
                        }
                    }
                });
            
            }
        }]
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
    
});
