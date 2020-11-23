# CT Pattern Lib

Welcome to the CT pattern library! In this repo we provide developers and designers a clean and stable base from which to develop a Twig-based pattern library to be reused in the CT Website.

## Running the Pattern Lib

1. [Setup your CT Vagrant box](https://endzonesoftware.atlassian.net/wiki/spaces/CT/pages/137789445/Local+dev+setup+for+Web+app+API)
1. Run the box with the `vagrant up` command
1. Access the library via [http://ct-patternlib.local/public/](http://ct-patternlib.local/public/)

## Hot-Reloading Capabilities

This project uses a technology called Hot-Reloading, meaning you don't have the re-run/re-build your project to see your changes reflected on the screen. Just save the file and your application should automatically refresh the latest changes :)

In order to enable it, you must run the watcher process that will update the patternlib website as you save your changes to the disk:

1. Run `vagrant ssh` at the root of the Vagrant box to open an SSH session with the virtual machine
1. Run `cd /var/www/ct-patternlib.local/public` to go into the `public` directory of the `patternlib`
1. Run `php core/console --watch` to run the watcher that will observe changes to `.twig` files in the library
1. Your changes should be reflected in the front-end (with a slight delay) every time you save them :) 

## Manually updating the Pattern Lib Front-end

If for some reason you aren't able to use the hot-reloading feature of the library, then you must generate the front-end yourself after every change

1. SSH into the `patternlib/public` directory, as instructed in the section above 
1. Run `php core/console --generate` to generate the new version front-end website
1. Refresh the page and enjoy and your changes :)

## Other pages
- [Original Pattern Lib Docs](docs/OriginalDoc.md)
