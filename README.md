# GD Header

This module provides a block with the page title and a configurable image in the background. You can see a live demo of this module by browsing the original author's website in the credits section.

## Features

+ For each node type, you can choose a field (of type image) to use for the background image.
+ Global images can be added in the block configuration, so nodes without images can still display nice headers with backgrounds, as well as non-nodes pages (Users, Views, Contact, ...).
+ You choose the image style to use.

## CSS

+ For better effect, it's meant to be used on the whole width of the screen.
+ By default, the background image is centered, no-repeat, cover and fixed. On (some) IOS devices, the background image scrolls because they can't handle correctly the fixed position.
+ By default too, the title is centered and has a shadow.
+ You can always override the CSS if you like so.

## Installation and configuration

The module is built on top of Drupal core only and uses no library, so you just install it the way you usually do.

At the bare minimum, you need to have some Image styles (admin/config/media/image-styles). If you want to use the image field features for nodes, you need node types and obviously, at least one image field attached to them.

Then go on /admin/structure/block, add the "GD Header" block somewhere and configure it (admin/structure/block/manage/gdheader).

## Roadmap

I'd love to see Responsive image support for this module, after modules gets a decent stable release with the current features.

## Credit

The GD Header module was originally developed by Guillaume Duveau ([website](https://guillaumeduveau.com), [Drupal.org user page](https://www.drupal.org/user/173213). It's my first Drupal 8 module, so feedback from seasonned D8 developers is more than welcome ;)
