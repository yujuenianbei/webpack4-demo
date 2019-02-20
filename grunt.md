## magento grunt配置


### grunt js工具
magento/dev/tools/grunt/tools

#### fs-tools.js
注：引用了<a href="https://www.cnblogs.com/liulangmao/p/4552339.html">glob</a>  
glob.sync(pattern, [options]) 同步获取文件列表
nl -->判断运行环境来确定换行符。如果是windows系统　nl='\r\n' 否则　nl='\n'  
输出参数：  
1. parseToWriteData(data)  在data后添加h换行符
2. parseToReadData(data) 将data里面的内容输出成数组（因为在写入的时候每个都有换行符所以输出部分能保证内容完整性）
3. getData(filePath) 返回 parseToReadData(filePath文件内容)
4. write(file, data)  使用parseToWriteData(data)将data写入file文件中(添加到末尾) 
5. read(filePath) 返回filePath里面的文件列表　array
6. arrayRead(pathArr, callback) 调用read将pathArr中的内容循环写入data数组中，然后把data传入回调函数中

#### files-router.js
var defaultConfig={}
1. getFullPath(path) 通过process.cwd() 方法返回 Node.js 进程的当前工作目录，加上path参数就是完整的地址  
2. userConfig 如果Node.js环境中有'grunt-config'文件则引入　否则为null 

输出参数：  
1. get(alias) 　如果userConfig或者userConfig[alias]存在则引入getFullPath(userConfig[alias])　如果(tmp = getFile(defaultConfig[alias] + '.loc')则返回tmp
否则报错误信息

2. set(alias, path) 设置defaultConfig[alias] = path

#### collect-validation-files.js
输出参数：  
1. readFiles(paths) 将paths里面的文件内容写入data数组中并返回data  
(返回array)
2. isListEntryValid(line)  验证line　长度大于０同时不能以'//'开头　返回true/false  
(返回 boolean)
3. getFiles(file) 先判断文件是否存在分割','，再判断configs/path中的static.tmp存在否，不存在的话写入getFilesForValidate的内容返回static.tmp  
(返回string)
4. getFilesForValidate 先验证文件是否在whitelist,blacklist配置中先合并黑名单，再通过对比得出白名单的内容　返回白名单的内容　（返回array）




### grunt 配置
magento/dev/tools/grunt/configs

#### autoprefixer.json
自动补充css兼容前缀

#### clean.js

#### combo.js
#### concat.json
#### cssmin.json
#### eslint.json
#### exec.js
#### imagemin.js
#### jscs.json
#### less.js
#### mage-minify.json
#### path.js
#### replace.js
#### styledocco.json
#### themes.js
#### userbanner.js
#### watch.js
