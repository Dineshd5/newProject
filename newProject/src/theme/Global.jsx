// GlobalStyle.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Euclid Circular A Bold Italic.ttf';
    src: url('/fonts/Euclid Circular A Bold Italic.ttf') format('opentype');
    /* font-weight: 300; */
    font-style: normal;
  }

  @font-face {
    font-family: 'Euclid Circular A Bold.ttf';
    src: url('/fonts/Euclid Circular A Bold.ttf') format('opentype');
    /* font-weight: 400; */
    font-style: normal;
  }

 @font-face {
    font-family: 'Euclid Circular A Italic.ttf';
    src: url('/fonts/Euclid Circular A Italic.ttf') format('opentype');
    /* font-weight: 500; */
    font-style: normal;
  }


 @font-face {
    font-family: 'Euclid Circular A Light Italic.ttf';
    src: url('/fonts/Euclid Circular A Light Italic.ttf') format('opentype');
    /* font-weight: 600; */
    font-style: normal;
}
  @font-face {
    font-family: 'Euclid Circular A Medium.ttf';
    src: url('/fonts/Euclid Circular A Medium.ttf') format('opentype');
    /* font-weight: 700; */
    font-style: normal;
  }

   @font-face {
    font-family: 'Euclid Circular A Regular.ttf';
    src: url('/fonts/Euclid Circular A Regular.ttf') format('opentype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Euclid Circular A SemiBold.ttf';
    src: url('/fonts/Euclid Circular A SemiBold.ttf') format('opentype');
    font-weight: 600;
    font-style: normal;
  }


  @font-face {
    font-family: 'BeVietnamPro-Medium.ttf';
    src: url('/fonts/BeVietnamPro-Medium.ttf') format('opentype');
    /* font-weight: 600; */
    font-style: normal;
  }

  @font-face {
    font-family: 'BeVietnamPro-Regular.ttf';
    src: url('/fonts/BeVietnamPro-Regular.ttf') format('opentype');
    /* font-weight: 600; */
    font-style: normal;
  }

  @font-face {
    font-family: 'BeVietnamPro-Light.ttf';
    src: url('/fonts/BeVietnamPro-Light.ttf') format('opentype');
    /* font-weight: 600; */
    font-style: normal;
  }

  @font-face {
    font-family: 'BeVietnamPro-Black.ttf';
    src: url('/fonts/BeVietnamPro-Black.ttf') format('opentype');
    /* font-weight: 600; */
    font-style: normal;
  }

  @font-face {
    font-family: 'BeVietnamPro-SemiBold.ttf';
    src: url('/fonts/BeVietnamPro-SemiBold.ttf') format('opentype');
    /* font-weight: 600; */
    font-style: normal;
  }

  /* Include other font weights and styles as needed */

  body {
    font-family: 'Trap-Regular', sans-serif; /* Default to regular style */
  }
`;

export default GlobalStyle;
