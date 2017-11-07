import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
    {
        input: 'compiled/app/main.js',
        output: {
            file: 'bundle.js',
            format: 'iife'
        },
        plugins: [
            resolve(),
            commonjs(),
        ],
    },
];
