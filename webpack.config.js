const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        checklist: './src/objects/checklist.js',
        checklistItem: './src/objects/checklistItem.js',
        project: './src/objects/project.js',
        storage: './src/objects/storage.js',
        task: './src/objects/task.js',
        createTask: './src/modules/createTask.js',
        removeTask: './src/modules/removeTask.js',
        renderTask: './src/modules/renderTask.js',
        storeTask: './src/modules/storeTask.js',
        inputCard: './src/components/inputCard.js',
        sidebar: './src/components/sidebar.js',
        taskList: './src/components/taskList.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
};