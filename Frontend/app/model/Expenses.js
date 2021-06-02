Ext.define('SDLMoney.model.Expenses', {
    extend: 'SDLMoney.model.Base',

    fields: [
        {name: '_id',  type: 'string'},
        {
            name: 'date',   
            type: 'date',
            convert: function (value) {
                
                if(typeof(value.$date) != "undefined")
                {
                    return new Date(parseInt(value.$date.$numberLong));
                }
                else
                {
                    return null;
                }
            }
            
        },
        {name: 'year',   type: 'int'},
        {name: 'month',   type: 'int'},
        {name: 'day',   type: 'int'},
        {name: 'amount', type: 'number'},
        {name: 'category', type: 'string'},
        {name: 'category_name', type: 'string'},
        
        {name: 'description', type: 'string'}
    ],
});
