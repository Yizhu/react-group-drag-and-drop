const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'task-1 Content' },
    'task-2': { id: 'task-2', content: 'task-2 Content' },
    'task-3': { id: 'task-3', content: 'task-3 Content' },
    'task-4': { id: 'task-4', content: 'task-4 Content' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Group 1',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Group 2',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2'],
};

export default initialData;
