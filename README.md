# CSCI1300Development

How to open:
    Go to https://github.com/GaryZhou98/CSCI1300Development and click Clone or Download.
    Open your terminal, navigate to the directory/folder CSCI1300Development you
    just downloaded.
    Now type in your terminal the command line "npm install", click return, wait for it to install.
    Open Chrome.
    Then type in your terminal "npm start" this should launch the website in your browser hosted locally.

Website Description: Overall goal and value of the application to a user.
    This website aims to help the user find new music by filtering by time period
    and genre. The user can favorite musicians that they enjoy. This website provide
    a currated list of top artist, much like a music review website, and provides
    filters to help the user find the musicians they like.

How interface relates to the design principles:
    Consistency and Standards: In our visual design we tried to ensure there was
    consistency and standards in color and fonds across the page, as well as in
    the top menu bar.
    Color Choice: We kept our color choice standardized, opting for a greyscale
    pallet, with dark photos and white fonts on top. We prioritized the photo
    choice, choosing photos that have a similar color pallet, so the same font
    colors could be used on top of each picture. We used fonts that felt
    modern and bold, as inspired by the leading music review and aggregation
    websites mentioned below.
    Minimalism: originally we opted for a colorful design with extra information
    but this made the purpose of the website confusing, and the design language
    inconsistant. We attempted to keep only the information that was relevant
    to the filters and to the functionality of the website. And tried to make
    that information easy to understand in a consitant way.

How data is passed down through your components:
    All data are passed as props to children components.

How user interactions can trigger changes in the state of components:
    There are two filters, genre and era. There are two genres, Pop and Rap, and
    three Era's 1990s, 2000s, and 2010s. There is one way to sort the items, by
    alphabetical order. There are 12 musicians that are on this page. Each item
    has a picture, two text fields which are the genre and time period, and one
    sortable field, which is the name. There is a reset button that revers the page
    to it's original state. Also, the page does not crash.


Rubric Oriented README:
Functionality:
    There are two filters, genre and era. There are two genres, Pop and Rap, and
    three Era's 1990s, 2000s, and 2010s. There is one way to sort the items, by
    alphabetical order.There are 12 musicians that are on this page. Each item
    has a picture, two text fields which are the genre and time period, and one
    sortable field, which is the name. There is a reset button that revers the page
    to it's original state. Also, the page does not crash. Multiple filters can
    be applied and the sorting function.

React Components:
    The react components, that arent the filtering list, include filteritem and
    favoriteButton, the both use props and state.

Usability:
    We tried to keep our design in line with modern design principles, with
    navigation at the top of the page, and the filter content below.
    To ensure user is able to easily understand and interact with your webpage, we
    looked at two of the leading websites that provide music reviews and top lists.
    There are two websites we both regular, Pitchfork, a music reviewing website,
    and Genuis, which shows trending music. We tried to mimic the design language
    of these websites, to ensure ours is usable if an individual came to our website
    having used the most popular websites for music aggregation or with a similar
    background of using these websites.
    https://genius.com/#top-songs
    https://pitchfork.com/topics/the-best-music-of-the-2010s
    To ensure that feedback is easily understandable based on the
    actions the user takes. The buttons change what they say after they are clicked,
    for example, after clicking favorites, to show the artists the user favorited,
    it then says show all, because now that button will show all the musicians,
    rather than just the favorited ones.

Style:
    We belive that the function of the website is self evident with the title of
    the website being "TuneFinder" this website is clearly made to help users
    find the best tunes/artists. We prioritized the photo choice, choosing
    photos that have a similar color pallet, so the same font colors could be
    used on top of each picture. We used fonts that felt modern and bold, as
    inspired by the leading music review and aggregation websites mentioned above.
