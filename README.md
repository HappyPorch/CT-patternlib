# CT Pattern Lab

Welcome to the CT pattern library! In this repo we provide developers and designers a clean and stable base from which to develop a Twig-based pattern library to be reused in the CT Website.

## Running the Pattern Lab

1. [Setup your CT Vagrant box](https://endzonesoftware.atlassian.net/wiki/spaces/CT/pages/137789445/Local+dev+setup+for+Web+app+API)
1. Run the box with the `vagrant up` command
1. Access the library via `http://ct-patternlib.local/public/`

## Updating the Pattern Lab Front-end

Every time you wish to see the changes you've made to `.twig` files reflected in the front-end, you must do the following:

1. Run `vagrant ssh` at the root of the Vagrant box to open an SSH session with the virtual machine
1. Run `cd /var/www/ct-patternlib.local/public` to go into the `public` directory of the `patternlib`
1. Run `php core/console --generate` to generate the new version front-end website
1. Refresh the page and enjoy and your changes :)



## Other pages
- [Original Pattern Lib Docs](docs/OriginalDoc.md)