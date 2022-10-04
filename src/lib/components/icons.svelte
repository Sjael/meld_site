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