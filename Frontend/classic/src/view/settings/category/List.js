Ext.define('SDLMoney.view.settings.category.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'expensecategorylist',
    requires: [
        'SDLMoney.store.ExpenseCategory'
    ],

    title: 'Expense Category',

    store: {
        type: 'expensecategory'
    },
    columns: [
        { text: 'Description', dataIndex: 'description', flex: 1 }
    ],
    listeners: {
        added: {
            fn: function(me){ 
                me.setStore(Ext.StoreManager.get('ExpenseCategory'));
            }
        }
    },
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
                    items: [Ext.create('SDLMoney.view.settings.category.AddForm')]
                }).show();
            }
        }, {
            xtype: 'tbfill'
        }, {
            xtype: 'button',
            text: 'Delete',
            handler: function() {
                var grid = this.up('grid');
                var selectedRecord = grid.getSelectionModel().getSelection()[0].data;
                Ext.MessageBox.show({
                    title: 'Delete expense category',
                    msg: 'Are you sure you want to delete expense category ' + selectedRecord.description + '?',
                    buttons: Ext.MessageBox.OKCANCEL,
                    icon: Ext.MessageBox.WARNING,
                    fn: function(btn){
                        if(btn == 'ok'){
                            Ext.Ajax.request({
                                url: 'api/expensecategory',
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
