import { publish } from 'gh-pages';
const repositoryUrl = 'https://github.com/AliCebe1986/Portfolio.git';

publish('dist', {
  branch: 'gh-pages',
  repo: repositoryUrl,
  message: 'Auto-generated deployment to GitHub Pages',
  dotfiles: true,
  silent: false
}, (err) => {
  if (err) {
    console.error('Error deploying to GitHub Pages:', err);
    return;
  }
  console.log('Website deployed successfully to GitHub Pages!');
});