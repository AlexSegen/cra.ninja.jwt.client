export default [
    {
        name: 'Notes',
        description: '',
        permissions: [
            {
                key: 'List Notes',
                value: 'notes:read'
            },
            {
                key: 'Create Note',
                value: 'notes:create'
            },
            {
                key: 'Update Note',
                value: 'notes:update'
            },
            {
                key: 'Delete Note',
                value: 'notes:delete'
            }
        ]
    },
    {
        name: 'Tasks',
        description: '',
        permissions: [
            {
                key: 'List Tasks',
                value: 'tasks:read'
            },
            {
                key: 'Create Task',
                value: 'tasks:create'
            },
            {
                key: 'Update Task',
                value: 'tasks:update'
            },
            {
                key: 'Delete Task',
                value: 'tasks:delete'
            }
        ]
    }
]