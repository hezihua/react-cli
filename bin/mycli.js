#!/usr/bin/env node
"use strict";
console.log("hello");
const program = require("commander");
const inquirer = require("inquirer");
const utils = require("../utils");
const question = require("../utils/question");
const create = require("../src/create");

const { blue, green } = utils;
blue(blue);

program
  .option("-d, --debug", "output extra debugging")
  .option("-s, --small", "small pizza size");
program.parse(process.argv);
const options = program.opts();
if (options.debug) {
  blue("option is debug");
} else if (options.small) {
  blue("option is small");
}

/* mycli create 创建项目 */
program
  .command("create")
  .description("create a project ")
  .action(function () {
    green("👽 👽 👽 " + "欢迎使用mycli,轻松构建react ts项目～🎉🎉🎉");
    inquirer.prompt(question).then((answer) => {
      console.log("answer=", answer);
      if (answer.conf) {
        create({ ...answer, ...options });
      }
    });
  });

/* mycli start 运行项目 */
program
  .command("start")
  .description("start a project")
  .action(function () {
    green("--------运行项目-------");
  });

/* mycli build 打包项目 */
program
  .command("build")
  .description("build a project")
  .action(function () {
    green("--------构建项目-------");
  });

program.parse(process.argv);
