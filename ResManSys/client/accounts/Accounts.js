AccountsTemplates.addFields([
    {
        _id: 'firstName',
        type: 'text',
        displayName: ' First Name',
        required: true,
        re: /(?=.*[a-z])(?=.*[A-Z])/,
        errStr: 'At least 1 lowercase and 1 uppercase letter required'
    },
    {
        _id: 'lastName',
        type: 'text',
        displayName: ' Last Name',
        required: true,
        re: /(?=.*[a-z])(?=.*[A-Z])/,
        errStr: 'At least 1 lowercase and 1 uppercase letter required'
    },
    {
        _id: 'phone',
        type: 'text',
        displayName: ' Phone',
        required: true
    }
    
]);