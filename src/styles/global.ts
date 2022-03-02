import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
}

:root {
    --theme-background: #7d32de; /** * #326dde*/
    --theme-background-top: #3e0f7a; /** * #1a4390*/
    --theme-color: #000;
    --theme-color-dark: ##e5b4ff; /** * #b4ceff*/
    --theme-link: #7d32de; /** * #326dde*/
    --theme-link-hover: #de32c1; /** * #de3232*/
    --theme-section-weather: #7d32de; /** * #326dde*/
    --theme-section-weather-text: #fff;
    --container-small-width: 800px;
    --container-width: 1000px;
    --border-radius: 1rem;
    --loading-border: rgba(0, 0, 0, 0.2);
    --loading-border-top: #fff;
    --theme-block: #fff;
    --padding: 2rem;
    --button-hover: rgba(0, 0, 0, 0.15);
}

html {
    font-size: 10px;
    height: 100%;
}


.fa-adjust {
  transform: rotate(180deg);
}

.switch input {
  display: none;
}
* {
  transition: background-color 0.6s ease, color 1s ease;
}

.light-theme {
  --theme-background: #7d32de;
  --theme-background-top: #3e0f7a;
  --theme-color: #000;
  --theme-color-dark: ##e5b4ff;
  --theme-link: #7d32de;
  --theme-link-hover: #de32c1;
  --theme-section-weather: #7d32de; 
  --theme-section-weather-text: #fff;
  --loading-border: rgba(0, 0, 0, 0.2);
  --loading-border-top: #fff;
  --theme-block: #fff;
  --button-hover: rgba(0, 0, 0, 0.15);
}

.dark-theme {
  --theme-background: #326dde;
  --theme-background-top: #1a4390;
  --theme-color: #ffffff;
  --theme-color-dark: #b4ceff;
  --theme-link: #326dde;
  --theme-link-hover: #de3232;
  --theme-section-weather: #326dde;
  --theme-section-weather-text: #000000;
  --loading-border: rgba(255, 255, 255, 0.2);
  --loading-border-top: #000000;
  --theme-block: #000000;
  --button-hover: rgba(255, 255, 255, 0.15);
}

body {
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    margin: 0;
    line-height: 1.5;
    background-color: var(--theme-background);
    background-image: linear-gradient(0, transparent, var(--theme-background-top));
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: var(--theme-color);
    min-height: 100%;
}

a {
    text-decoration: none;
    color: var(--theme-link);

    &:hover {
        color: var(--theme-link-hover);
    }
}

main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@keyframes drop {
    from {
        transform: translateY(-35px);
        opacity: 1;
    }
    to {
        transform: translateY(180px);
        opacity: 0;
    }
}

  
`;

export const Container = styled.div`
  ${({ small }: { small?: boolean }) =>
    small
      ? css`
          max-width: var(--container-small-width);
        `
      : css`
          max-width: var(--container-width);
        `}

  padding: 0 1.5rem;
  margin: 0 auto;
  width: 100%;
`;

export const CenterBody = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default GlobalStyle;
