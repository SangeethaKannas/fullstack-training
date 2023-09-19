On desktops, everything works like a charm. However, they can be a nightmare on mobile devices.

Instead, use one of these 3:

- Large Viewport Units. lvh & lvw
- Small Viewport Units. svh & svw
- Dynamic Viewport Units. dvh & dvw

Here's why:

The vh unit is equal to 1% of the height of the viewport's size.

The viewport's size can change on mobile devices because browser elements are expanded or retracted based on scrolling.

Using lv*, sv* and dv*, you will know what you are designing on mobile devices...

The lv* units are defined for the large viewport size. That means you have the largest viewport size possible when all browser elements are hidden.

The sv* units are defined for the small viewport size. That means you have the smallest viewport size possible when all browser elements are shown.

The dv* units are defined for the dynamic viewport size. That means the sizes are adapted dynamically based on the current viewport.

There are 2 things to keep in mind:

1. None of the viewport units consider the size of the scrollbars.

2. None of the viewport units take the size of the on-screen keyboard when opened into account.

So which one to use?

Small viewport units are "safer" because always all content will be displayed. You will have to consider the additional space that may be freed up.

If you don't mind if some content is temporarily hidden, then large viewport units are your choice.

You can use dynamic viewport units to ensure the content is always displayed regardless of the viewport size. However, you have to keep in mind these 2 caveats:

1. They can cause content to resize when the user scrolls the page.

2. This can be disturbing to the user and costly in terms of performance.
