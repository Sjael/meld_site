<script>
    export let name;
    export let width = "1rem";
    export let height = "1rem";
    export let focusable = false;
    let icons = [
        {
          box: 24,
          name: "dl",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>`
        },
        {
          box: 32,
          name: "cloud",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>`
        },
        {
          box: 32,
          name: "home",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>`
        },
        {
          box: 64,
          name: "logo",
          svg: `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><style>.cls-1,.cls-2{fill:#a700ff;}.cls-2{opacity:.36;}.cls-3{fill:none;}</style></defs><path class="cls-2" d="M40.31,253.13V3.38l146.14,124.88L40.31,253.13Zm29.11-186.58v123.41l72.21-61.7-72.21-61.7Z"/><g><polygon class="cls-3" points="69.43 189.96 105.25 159.35 69.43 128.74 69.43 189.96"/><polygon class="cls-3" points="69.43 66.55 69.43 127.76 105.25 97.16 69.43 66.55"/><polygon class="cls-3" points="127.66 116.3 113.67 128.25 127.66 140.2 141.64 128.25 127.66 116.3"/><polygon class="cls-3" points="185.89 66.55 150.07 97.16 185.89 127.76 185.89 66.55"/><polygon class="cls-3" points="185.89 189.96 185.89 128.74 150.07 159.35 185.89 189.96"/><polygon class="cls-1" points="69.43 189.96 69.43 128.74 68.86 128.25 69.43 127.76 69.43 66.55 105.25 97.16 127.66 78.01 40.31 3.38 40.31 253.13 127.66 178.5 105.25 159.35 69.43 189.96"/><polygon class="cls-1" points="215 3.38 127.66 78.01 150.07 97.16 185.89 66.55 185.89 127.76 186.46 128.25 185.89 128.74 185.89 189.96 150.07 159.35 127.66 178.5 215 253.13 215 3.38"/><polygon class="cls-1" points="186.46 128.25 185.89 127.76 185.89 128.74 186.46 128.25"/><polygon class="cls-1" points="68.86 128.25 69.43 128.74 69.43 127.76 68.86 128.25"/><polygon class="cls-1" points="127.66 116.3 150.07 97.16 127.66 78.01 105.25 97.16 127.66 116.3"/></g></svg>`
        },
        {
          box: 64,
          name:"arrow-right",
          svg: `<svg
            width="64" height="64"  viewBox="0 0 24 24"  fill="none"  xmlns="http://www.w3.org/2000/svg" >
            <path
              d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
              fill="currentColor"
            />
          </svg>`
        },
        {
          box: 24,
          name:"quote",
          svg: `<svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.13456 9H12.1346L10 14.6075H7L9.13456 9Z" fill="currentColor" />
            <path d="M14.1346 9H17.1346L15 14.6075H12L14.1346 9Z" fill="currentColor" />
          </svg>`
        },
        {
          box: 24,
          name:"moon",
          svg: `<svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
            fill="currentColor"
          />
        </svg>`
        }

    ];
    let displayIcon = icons.find((e) => e.name === name);
</script>
<svg
  class={$$props.class}
  {width}
  {height}
  viewBox="0 0 {displayIcon.box} {displayIcon.box}">{@html displayIcon.svg}
</svg>
<style>
  svg {
    display:inline;
  }
</style>