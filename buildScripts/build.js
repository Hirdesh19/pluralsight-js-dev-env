import webpack from 'webpack';
import  webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV='production';
console.log(chalk.black('generating prod build'))

webpack(webpackConfig).run ((err)=>{
  if(err){
    console.log(chalk.red(err));
    return 1;

  }
  // const jsonStats=Stats.toJson();

  // if(jsonStats.hasErrors){
  //   return jsonStats.errors.map(error=>console.log(chalk.red(error)));
  // }
  // if(jsonStats.hasWarnings){
  //   return jsonStats.hasWarnings.map(error=>console.log(chalk.yellow(error)));
  // }
    return 0;

});
