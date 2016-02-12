source 'https://rubygems.org'

# from https://jekyllrb.com/docs/github-pages/

require 'json'
require 'open-uri'

# versions = JSON.parse(open('https://pages.github.com/versions.json').read)

# `curl -O https://pages.github.com/versions.json`
versions = JSON.parse(open('versions.json').read)
# `rm versions.json`


gem 'github-pages', versions['github-pages']


