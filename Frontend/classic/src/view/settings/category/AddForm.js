Ext.define('SDLMoney.view.settings.category.AddForm', {
    extend: 'Ext.form.Panel',
    width: 350,

    // The form will submit an AJAX request to this URL when submitted
    url: 'api/expensecategory',

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
        fieldLabel: 'Description',
        name: 'description',
        allowBlank: false
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
                        Ext.StoreManager.get('ExpenseCategory').load();
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