# A Flexbox Tutorial
Matt Hink
- github: @mhink
- twitter: @mhink1103

## Intro
Although I bill myself as a full-stack Ruby developer, I've lately been spending a lot of time focusing on web development and front-end tech. It's an exciting space to explore, as within the last two or three years we've seen an explosion of new development which makes it easier than ever to write awesome, functional web applications.  One of these is the [Flexible Box Layout specification from the World Wide Web Consortium (W3C)](http://www.w3.org/TR/css-flexbox-1/), better known as "flexbox".

I'm really excited about this layout model because- let's face it- designing web application layouts *sucks*. Nothing's worse than having to drop into Javascript to do something that feels like it should be trivial in CSS. Flexbox makes it actually trivial, and moreover, it's relatively easy to integrate into an existing page. For those of us that have to wrangle brownfield projects (T_T) this is a huge convenience!

There are a pretty good number of tutorials out there, such as the one on [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), but I wanted to do something a little different. This tutorial is live, so you can fiddle with a flexbox in your browser and quickly get a feel for how things work.  Furthermore, the entire page is styled using flexboxes, so feel free to drop into the source (especially the CSS) and have a look at how you might structure an entire page.

## Directions, Dimensions, Definitions
First off, let's describe the main elements of the flexbox layout.

When you lay out elements with flexbox, you're always dealing with a *flex container*, which positions *flex items* in a series of *flex lines*. We'll get to flex lines a bit later.

This is a flex container containing a single flex item.
(Flex container here.)

It doesn't look like much, but in fact, we can learn quite a bit from just this simple example.

The first main concept to understand is *dimensionality*. Flex containers have two dimensions, the *main* dimension and the *cross* dimension. I hope you're ready for a bit of indirection... ;)

The main dimension is determined by the *flex direction* and the *writing mode* of the flexbox.  The writing mode is a definition of how text flows and wraps, and flexboxes take this into account when determining how their flex items flow and wrap.

flex-direction:
- row:          items laid out in direction of text flow
                items wrap in direction of text wrap

- row-reverse:  items laid out in opposite direction of text flow
                items wrap in direction of text wrap

- column:       items laid out perpendicular to text flow
                items wrap in direction of text flow

- column:       items laid out perpendicular, 
