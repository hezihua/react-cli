const Metalsmith = require("metalsmith");
const path = require("path");
const ejs = require("ejs");
const { spawn } = require("child_process");

//获得命令运行时的路径
const getCwd = () => process.cwd();
const renderPathList = ["package.json"];

const genFiles = (options) => {
  //模版的目录
  const templateSrc = path.resolve(__dirname, `../template/`);
  //项目指定生成目录，如果命令中没有有配置目录，则在当前命令运行的目录下生成以项目名称为名字的新目录
  const destination = options.destination
    ? path.resolve(options.destination)
    : path.resolve(getCwd(), options.name);

  Metalsmith(__dirname)
    .source(templateSrc)
    .destination(destination)
    .use((files) => {
      Object.keys(files).forEach((key) => {
        // 指定的文件动态生成
        if (renderPathList.includes(key)) {
          const file = files[key];
          // 原内容
          const str = file.contents.toString();
          console.log("optins:", options);
          // 新内容
          const newContents = ejs.render(str, options);
          // 将新内容写到文件中
          file.contents = Buffer.from(newContents);
        }
      });
    })
    .build((err) => {
      if (err) {
        console.error(err);
      }
    });
};

module.exports = genFiles;
