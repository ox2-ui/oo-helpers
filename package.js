Package.describe({
  name: 'ox2:helpers',
  summary: 'Various helpers',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  // Core
  api.use(['templating', 'session']);
  api.addFiles('lib/oo-helpers.js', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:helpers');
  api.addFiles('tests/oo-helpers-tests.js');
});
