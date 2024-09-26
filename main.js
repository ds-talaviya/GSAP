// Animate the div with id 'box' to move 300px to the right over 2 seconds
// duration: (minimum 0, no upper limit), x: pixel value (negative/positive, no specific limit)
gsap.to("#element", { duration: 1, x: 1000 });

// Animate element opacity from 0 to 1 over 5 seconds while moving x from 1000px to 0px
// opacity: (min: 0, max: 1), x: pixel value (negative/positive, no specific limit)
gsap.from("#element", { duration: 5, opacity: 0, x: 1000 });

// Animate element from specific values (x: 1000, opacity: 0.2) to final values (x: 0, opacity: 1)
// x: pixel value (no specific limit), opacity: (min: 0, max: 1)
gsap.fromTo(
  "#element",
  { x: 1000, opacity: 0.2 },
  { x: 0, opacity: 1, duration: 5 }
);

// Change background color from yellow to red while moving element on x-axis
// backgroundColor: valid CSS color values, x: pixel value (no specific limit)
gsap.fromTo(
  "#element",
  { backgroundColor: "yellow" },
  { x: 0, backgroundColor: "red", duration: 5 }
);

// Move element to x: 200, y: 100 over 5 seconds
// x, y: pixel value (no specific limit)
gsap.to("#element", { duration: 5, x: 200, y: 100 });

// Scale the element to 1.5 times its original size
// scale: (min: 0, no specific max, but large values may distort the element)
gsap.to("#element", { duration: 5, scale: 1.5 });

// Rotate the element 360 degrees over 1 second
// rotation: degrees (positive or negative, no limit)
gsap.to("#element", { duration: 1, rotation: 360 });

// Fade the element out by setting its opacity to 0
// opacity: (min: 0, max: 1)
gsap.to("#element", { duration: 1, opacity: 0 });

// Change the background color to yellow over 1 second
// backgroundColor: valid CSS color values
gsap.to("#element", { duration: 1, backgroundColor: "yellow" });

// Resize the element to a width of 1200px and height of 5px over 10 seconds
// width, height: pixel values (no specific limit)
gsap.to("#element", { duration: 10, width: "1200px", height: "5px" });

// Set margin to 20px over 5 seconds
// margin: valid CSS margin values (no specific limit)
gsap.to("#element", { duration: 5, margin: "20px" });

// Animate the element to x: 1000 using a linear easing function over 5 seconds
// ease: easing type (linear, elastic, bounce, etc.), x: pixel value (no specific limit)
gsap.to("#element", { duration: 5, x: 1000, ease: "linear" });

// Animate x position with elastic easing function over 20 seconds
// ease: "elastic.out(amplitude, period)", x: pixel value (no specific limit)
gsap.to("#element", { duration: 20, x: 50, ease: "elastic.out(5,0.1)" });

// Animate y position with a bounce effect over 2 seconds
// y: pixel value (no specific limit), ease: "bounce" for a bouncy effect
gsap.to("#element", { duration: 2, y: 200, ease: "bounce.out" });

// Sequence animations with timeline: move element1, fade out element2, scale element3
// timeline supports overlap: "-=0.5" means element2 starts 0.5 seconds before element1 ends
const tl = gsap.timeline();
tl.to("#element1", { duration: 1, x: 100 }) // x: pixel value (no specific limit)
  .to("#element2", { duration: 1, opacity: 0 }, "-=0.5") // opacity: (min: 0, max: 1)
  .to("#element3", { duration: 1, scale: 2 }); // scale: (min: 0, no specific max)

// Stagger the animation for multiple elements, with a 0.5 second delay between each
// stagger: (min: 0, no specific max) delay in seconds between each element’s animation
gsap.to(".element", { duration: 5, x: 100, stagger: 0.5 }); // x: pixel value (no specific limit)
