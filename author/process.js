/*eslint-env node */

const fs = require('fs');
const _ = require('lodash');

const input = require('./input.json');


const posts = input;


posts.forEach(post => {

  let output = '';

  output += '---\n';

  let others = _.omit(post, ['markdown', 'html']);

  Object.keys(others).forEach(key => {
    output += `${key}: ${typeof(others[key]) === 'string' && others[key].includes(':') ? '"' + others[key] + '"' : others[key]}\n`
  })

  output += '\n---\n';

  output += post.markdown;

  fs.writeFileSync(`${post.slug}.md`, output);
})
