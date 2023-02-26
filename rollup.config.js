import babel from "rollup-plugin-babel"

// rollu默认导出一个对象
export default {
    input: './src/index.js', //入口
    output: {
        file: './dist/vue.js',//出口
        name: 'Vue',
        format: 'umd',
        sourcemap: true,
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'  //排除
        })
    ]
}