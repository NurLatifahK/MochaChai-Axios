export const schemaGet = {
    type: 'object',
    // required: ['id', 'quote', 'author'],
    properties: {
        id: {type: 'number'},
        quote: {type: 'string'},
        author: {type: 'string'},
        }
}

export const schemaPost = {
    type: 'object',
    properties:{
        id: {type: 'number'},
        todo: {type: 'string'},
        userID: {type: 'number'}
    }
}

export const schemaPut = {
    type: 'object',
    properties:{
        id: {type: 'number'},
        todo: {type: 'string'},
        userID: {type: 'number'},
        completed: {type: 'boolean'}
    }
}

export const schemaDelete = {
    type: 'object',
    properties:{
        id: {type: 'number'},
        todo: {type: 'string'},
        userID: {type: 'number'},
        completed: {type: 'boolean'},
        isDeleted: {type: 'boolean'}
    }
}