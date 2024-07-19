import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: grid;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  
}

body, input, button, textarea {
  font-family: "Roboto Slab", serif;
  font-size: 16px;
  outline: none;
  font-weight: 400;
}


p {
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.3;
}

button:hover, a:hover {
  filter: brightness(0.8)
}

#scroll::-webkit-scrollbar-track {
  border-radius: 8px;
}

#scroll::-webkit-scrollbar {
  width: 8px;
}

#scroll::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.RED};
}

`