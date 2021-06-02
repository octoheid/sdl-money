Ext.define('SDLMoney.view.expenses.AddForm', {
    extend: 'Ext.form.Panel',
    width: 350,

    // The form will submit an AJAX request to this URL when submitted
    url: 'api/expenses',

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '90%',
        bodyPadding: 10,
        labelStyle: 'padding: 10px 10px;'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        xtype: 'datefield',
        fieldLabel: 'Date',
        name: 'date',
        allowBlank: false,
        value: new Date() 
    },{
        fieldLabel: 'Description',
        name: 'description',
        allowBlank: false
    },{
        xtype: 'numberfield',
        fieldLabel: 'Amount',
        name: 'amount',
        allowBlank: false
    },{
        xtype: 'combobox',
        fieldLabel: 'Category',
        name: 'category',
        allowBlank: false,
        store: {
            type: 'expensecategory'
        },
        displayField: 'description',
        valueField: '_id',
        forceSelection: true
    }],
    buttons: [{
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Submit',
        formBind: true,
        disabled: true,
        handler: function(button, e) {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    success: function(form, action) {
                        Ext.StoreManager.get('Expenses').load();
                        button.up('.window').close();
                    },
                    failure: function(form, action) {
                        Ext.Msg.alert('Failed', action.result.msg);
                    }
                });
            }
        }
    }]

});