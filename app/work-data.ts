export interface WorkContent {
  text?: string;
  img?: string;
  media?: string;
}

export interface WorkItem {
  thumbtitle: string;
  thumb?: string;
  skills: string[];
  title: string;
  subtitle?: string;
  content: WorkContent[];
}

export const workItems: WorkItem[] = [
  {
    thumbtitle: "UserHub",
    // thumb: "/img/thumbs/reonomy.png",
    skills: ["React", "Typescript", "NextJS"],
    title: "UserHub",
    subtitle: "Modern billing software for SaaS companies",
    content: [
      {
        text: 'Led the development of multiple server-side rendered applications from the ground up, building a comprehensive platform using React, React Router, and Next.js. The work included a rich admin console for managing customer plans, pricing, teams, and integrations; an embeddable customer portal that enables self-service billing, subscription management, and account administration; and a Next.js marketing site featuring Lottie animations and auto-generated API documentation from markdown. Short demos can be seen below.',
      },
      {
        text: 'The customer checkout portal was a great example of hiding an incredible amount of complexity behind a simple intuitive interface. It was also an excuse to use my own <a href="https://www.npmjs.com/package/react-confetti-explosion" target="_blank">confetti animation library</a>.',
      },
      {
        media: "<video src='/img/work/userhub-customer-checkout.mp4' autoplay loop muted playsinline></video>"
      },
      {
        text: 'The admin console was built with Remix and had a fun sort of video-game-like UI.',
      },
      {
        media: "<img class='mx-auto max-w-3xl' src='/img/work/userhub-admin.jpg' alt='Interface demo' />"
      },
      {
        text: 'The marketing site was built with Next.js and continued this cool yet slightly retro theme.',
      },
      {
        media: "<video src='/img/work/userhub-site.mp4' autoplay loop muted playsinline></video>"
      },
      
    ],
  },
  {
    thumbtitle: "Interface demo",
    // thumb: "/img/thumbs/reonomy.png",
    skills: ["React", "Typescript", "CSS transforms"],
    title: "Interface demo",
    subtitle: "Fun with CSS transforms and masking",
    content: [
      {
        text: 'I wanted to see how complex it would be to hand-build an animated network of signals traveling between eachother. It ended up required a large stack of png masks and radial gradients rotating beneath them. Along with some little glowing dashboard lights, the final result <a href="https://herrmedia.com/projects/antimetal-demo/" target="_blank">turned out pretty cool</a>.',
      },
      {
        media: "<img class='mx-auto max-w-xl' src='/img/work/interface-demo.jpg' alt='Interface demo' />"
      },
      
    ],
  },
  {
    thumbtitle: "Room sketch",
    // thumb: "/img/thumbs/reonomy.png",
    skills: ["React", "Typescript", "CSS transforms"],
    title: "Room sketch",
    subtitle: "A room sketch tool built with React and CSS transforms",
    content: [
      {
        text: 'This was the start of a pet project of mine to see if I could build a 3D room layout builder with only CSS transforms. I got pretty far until I wanted to build a furniture library which would involve more complex geometry. Checkout the <a href="https://github.com/herrethan/room-sketch" target="_blank">Github repo</a>.',
      },
      {
        media: '<video src="/img/work/room-sketch-example.mp4" autoplay loop muted playsinline onloadedmetadata="this.playbackRate=2.0"></video>'
      },
      
    ],
  },
  {
    thumbtitle: "Reonomy",
    thumb: "/img/thumbs/reonomy.png",
    skills: ["JS", "React", "RXJS", "Python"],
    title: "Reonomy",
    subtitle: "CRE search application and marketing site",
    content: [
      {
        text: 'Front to back development for <a href="http://reonomy.com" target="_blank">Reonomy</a>, where I worked for 7 years, helping build the real estate tech search/management platform from $1M to $20M ARR. I led the transformation of the Angular application to React, built extensive custom Google Maps and Mapbox tools for property search and visualization, and developed the marketing site and CRM tools with Python/Flask and JavaScript.',
      },
      {
        media: '<video src="/img/work/nyc-mapbox-draw.mp4" autoplay loop muted playsinline></video>'
      },
      {
        img: "/img/work/reonomy-app.jpg",
      },
      {
        img: "/img/work/reonomy.jpg",
      },
    ],
  },
  {
    thumbtitle: "Coaching",
    thumb: "/img/thumbs/ww.png",
    skills: ["CSS", "Angular", "Django"],
    title: "Weight Watchers Personal Coaching",
    content: [
      {
        text: "I was lead front end developer for the personal Coaching product at Weight Watchers - a product that connects subscribers with weight loss coaches via email messaging, phone sessions, text, and customized action plans tailored for the member. I managed the UI for both the Coach experience and the Member experience, all built using Angular on top of the Python-based Django framework.",
      },
      {
        text: "The coach-facing experience includes a dashboard calendar of upcoming sessions, a member profile view, a messaging/email page, a profile form page with image uploader, and a session manager page for tracking phone calls and generating action plans.",
      },
      {
        media: "<img class='mx-auto max-w-xl' src='/img/work/coaching-2.jpg' alt='Weight Watchers Coaching Dashboard' />",
      },
      {
        text: "The member-facing experience includes dashboard views for upcoming sessions, recent action plan activity, messaging, and advanced searching and booking tools. Fully optimized for both desktop and mobile devices.",
      },
      {
        img: "/img/work/coaching-1.jpg",
      },
      {
        text: "One of the more complex features of the project was the integration of Teletechs telephone service streaming widget, allowing Coaches and Members to connect securely over the phone via a web interface.",
      },
    ],
  },
  // {
  //   thumbtitle: "Lisa Slater",
  //   thumb: "/img/thumbs/slater.png",
  //   skills: ["JS", "CSS", "SVG"],
  //   title: "Lisa Slater Organizationalist",
  //   content: [
  //     {
  //       text: "A responsive site built for organizationalist Lisa Slater. The clean svg graphics and css animations were perfect for conveying placement and reorganization. Logo work done by <a href='http://darchdesign.com/' target='_blank'>Denis Darch</a>. View the site <a href='http://lisaslater.com/' target='_blank'>here</a>.",
  //     },
  //     {
  //       img: "/img/work/slater.jpg",
  //     },
  //   ],
  // },
  {
    thumbtitle: "Color Calculator",
    thumb: "/img/thumbs/color.png",
    skills: ["JS", "CSS"],
    title: "Interactive Color Calculator",
    content: [
      {
        text: "Sessions College needed to revamp their old flash-based color calculator tool and bring it up to date with new standards. I rebuilt it from the ground up with JavaScript and added all sorts of cool new features. The tool is similar to that of many color wheels that exist out there including the Adobe Kuler color wheel. There is one key difference however that sets it apart: Instead of being constrained by one starting color, you can begin developing themes from two or three colors at a time, allowing you to explore ways to branch off of one at a time or all at once.",
      },
      {
        text: "Sessions did an <a href='http://www.sessions.edu/campus-news/design-software/color-calculator' target='_blank'>article</a> about the tool and a bit about my development of it. Check out the actual working tool <a href='http://www.sessions.edu/color-calculator' target='_blank'>here</a>.",
      },
      {
        img: "/img/work/color.jpg",
      },
    ],
  },
  // {
  //   thumbtitle: "Doug Herr Artist",
  //   thumb: "/img/thumbs/dherr.png",
  //   skills: ["PHP", "JS", "CSS", "Wordpress"],
  //   title: "Douglas Herr Artist",
  //   subtitle: "Wordpress Portfolio Theme",
  //   content: [
  //     {
  //       text: "This is a fully responsive dark Wordpress theme I built for artist Douglas Herr. The idea was to be completely focused on the images regardless of the device. The only hints of color echo colors that are predominant in much of the artists work.",
  //     },
  //     {
  //       text: "<a href='http://dougherr.com/' target='_blank'>View the site here</a>.",
  //     },
  //     {
  //       img: "/img/work/dherr.jpg",
  //     },
  //   ],
  // },
  // {
  //   thumbtitle: "Tracy Watts Hats",
  //   thumb: "/img/thumbs/watts.png",
  //   skills: ["JS", "CSS", "PHP"],
  //   title: "Tracy Watts website",
  //   content: [
  //     {
  //       text: "Full site development for hat maker Tracy Watts, developed for their online store on Facebook. All the other stores we built at Zindigo relied heavily on the PHP templating framework they lived on. However with Tracey Watts we wanted a slicker user experience so almost everything is AJAX. That includes getting store products, product details, press articles, video content, etc.",
  //     },
  //     {
  //       img: "/img/work/watts.jpg",
  //     },
  //     {
  //       text: "The site also features an early iteration of my jQuery plugin <a href='http://github.com/herrethan/flipcarousel/'>Flip Carousel</a>, which is a content carousel that uses a card flipping effect to toggle through items.",
  //     },
  //     {
  //       img: "/img/work/fallon.jpg",
  //     },
  //   ],
  // },
  {
    thumbtitle: "Johnny Hiro",
    thumb: "/img/thumbs/hiro.png",
    skills: ["After Effects"],
    title: "Johnny Hiro Spot",
    content: [
      {
        text: 'This project was for the author of the Johnny Hiro comic book series, <a href="http://www.fredchao.com/">Fred Chao</a>. In collaboration with film director <a href="http://www.ballardcboyd.com/">Ballard C. Boyd</a> we created this short commercial piece to promote the book.',
      },
      {
        text: "Characters were all animated frame by frame based on drawings from the artist. I was also responsible for the compositing, effects, sounds, as well as soundtrack.",
      },
      {
        media: '<iframe src="https://player.vimeo.com/video/46160039?color=ff9933" width="600" height="338" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe><p class="sans"><a href="https://vimeo.com/46160039">Johnny Hiro</a> from <a href="https://vimeo.com/herrethan">Ethan Herr</a> on <a href="https://vimeo.com/">Vimeo</a>.</p>',
      },
    ],
  },
  {
    thumbtitle: "Sessions Commercial",
    thumb: "/img/thumbs/lobo.png",
    skills: ["After Effects", "Illustrator"],
    title: "Lobo Man Commercial",
    content: [
      {
        text: 'Our favorite character "Lobo Man" (short for labotomy man) stars in this commercial for Sessions College. It demonstrates that traditional education will not turn you into a genius while modern day online education most definitely will. This video also won the <a href="http://www.gdusa.com/contests/aida12/types/winner.php?f=sessions_college">Graphic Design USA</a> In-House award for 2012.',
      },
      {
        text: "I was responsible for the art direction, the art and animation, and the sound design.",
      },
      {
        media: '<iframe src="https://player.vimeo.com/video/46331703?color=ff9933" width="600" height="338" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> <p class="sans"><a href="https://vimeo.com/46331703">Sessions "Lobo Man" commercial</a> from <a href="https://vimeo.com/herrethan">Ethan Herr</a> on <a href="https://vimeo.com/">Vimeo</a>.</p>',
      },
    ],
  },
  {
    thumbtitle: "The Professor",
    thumb: "/img/thumbs/prof.png",
    skills: ["Angular", "Sprites", "Claymation"],
    title: "The Professor",
    subtitle: "Kids math game",
    content: [
      {
        text: "This little app I built on one long weekend when I was trying to think of the best way for my daughter to practice math. With the help of some sculpey, a small set, and an iPad animation app, I meticulously filmed each reaction as a small movie that was then transfered to a sprite sheet.",
      },
      {
        text: 'Check out the game <a href="http://herrmedia.com/projects/prof" target="_blank">here</a>.',
      },
      {
        img: "/img/work/prof.jpg",
      },
    ],
  },
  {
    thumbtitle: "Animation Reel",
    thumb: "/img/thumbs/m.png",
    skills: ["After Effects", "Ai", "PS", "Logic Pro"],
    title: "Animation Reel",
    content: [
      {
        text: "My animation reel as an example of some of my animation and motion graphics work.",
      },
      {
        media: '<iframe src="https://player.vimeo.com/video/46159801?color=ff9933" width="600" height="338" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> <p class="sans"><a href="https://vimeo.com/46159801">Ethan Herr\'s Motion Reel</a> from <a href="https://vimeo.com/herrethan">Ethan Herr</a> on <a href="https://vimeo.com/">Vimeo</a>.</p>',
      },
    ],
  },
];

