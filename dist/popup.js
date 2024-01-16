(()=>{"use strict";var e,n,t,a={7347:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),l=t.n(o)()(r());l.push([e.id,"/*\n! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.h-full {\n  height: 100%;\n}\n.w-full {\n  width: 100%;\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-y-12 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(3rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.space-x-40 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(10rem * var(--tw-space-x-reverse));\n  margin-left: calc(10rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-28 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(7rem * var(--tw-space-x-reverse));\n  margin-left: calc(7rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-20 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(5rem * var(--tw-space-x-reverse));\n  margin-left: calc(5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(2rem * var(--tw-space-x-reverse));\n  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n.bg-slate-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-32 {\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.pr-4 {\n  padding-right: 1rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\nbody {\n    height: 400px;\n    width: 400px;\n}\n\n.hover\\:bg-blue-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-green-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\n}",""]);const i=l},3277:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8081),r=t.n(a),o=t(3645),l=t.n(o)()(r());l.push([e.id,"body {\n  height: 200px;\n  width: 400px;\n}\n",""]);const i=l},926:(e,n,t)=>{var a=t(7294),r=t(745),o=t(3379),l=t.n(o),i=t(7795),s=t.n(i),c=t(569),d=t.n(c),m=t(3565),u=t.n(m),p=t(9216),g=t.n(p),b=t(4589),h=t.n(b),f=t(7347),w={};w.styleTagTransform=h(),w.setAttributes=u(),w.insert=d().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=g(),l()(f.Z,w),f.Z&&f.Z.locals&&f.Z.locals;var y=t(3277),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=g(),l()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;var x=t(4105);const k=(e,n,t,a,r,o)=>{const l=[],i=[];let s=1/(1+e);for(let t=0;t<n;t++)l.push(s),s*=1/(1+e);const c=[32e-5,35e-5,38e-5,41e-5,43e-5,44e-5,44e-5,45e-5,45e-5,46e-5,46e-5,47e-5,48e-5,49e-5,5e-4,52e-5,53e-5,55e-5,57e-5,61e-5,64e-5,7e-4,78e-5,87e-5,98e-5,.0011,.00124,.00138,.00152,.00166,.0018,.00196,.00213,.00231,.0025,.00273,.00298,.00326,.00359,.00393,.0043,.00467,.00503,.00537,.00572,.00615,.00667,.00735,.00822,.00927,.01041,.01164,.01286,.01408,.01537,.01688,.01871,.02101,.02386,.02724,.03107,.03528,.03979,.04458,.0498,.05569,.06245,.0703,.07937,.08941,.10038,.11205,.12446,.13743,.15112,.16544,.18062,.19699,.2152,.23652,.26338,.30101,.35966,.46234,.64743],d=[42e-5,46e-5,5e-4,55e-5,58e-5,59e-5,6e-4,62e-5,63e-5,65e-5,66e-5,69e-5,72e-5,74e-5,78e-5,83e-5,87e-5,92e-5,97e-5,.00105,.00111,.00123,.00139,.00157,.00178,.00202,.00231,.00258,.00286,.00314,.00342,.00372,.00403,.00434,.00468,.00508,.00548,.00593,.00646,.007,.00757,.00813,.00865,.00913,.00961,.01015,.01087,.01176,.01299,.01437,.01593,.01746,.01903,.02042,.02198,.02363,.02582,.02857,.03197,.03596,.04039,.04516,.05014,.05528,.06076,.06683,.07369,.08155,.09048,.10103,.11142,.12326,.13442,.14705,.15868,.17206,.18604,.20093,.21735,.23652,.26338,.30101,.35966,.46234,.64743],m=[73e-5,86e-5,96e-5,.00101,.00105,.00106,.00104,.001,95e-5,9e-4,83e-5,77e-5,73e-5,69e-5,67e-5,65e-5,65e-5,66e-5,68e-5,71e-5,76e-5,81e-5,89e-5,97e-5,.00107,.00118,.00131,.00145,.00161,.00177,.00196,.00217,.0024,.00264,.00291,.00321,.00356,.00398,.00446,.00501,.00563,.00632,.00706,.00785,.00875,.00976,.01089,.01218,.01367,.01536,.01723,.01925,.02143,.02376,.02631,.02919,.03247,.03629,.04069,.04565,.05096,.05661,.06252,.06861,.07506,.08211,.08998,.09888,.10894,.11994,.13158,.14361,.15587,.16806,.18033,.1928,.20561,.21907,.2336,.25072,.27302,.30992,.36746,.4708,.6567],u=[.00109,.0013,.00147,.00157,.00165,.00169,.0017,.00166,.0016,.00154,.00145,.00137,.00133,.00129,.00129,.00131,.00135,.0014,.00148,.00158,.0017,.00185,.00205,.00227,.00253,.00283,.00318,.00355,.00397,.00441,.00491,.00541,.00596,.00653,.00717,.00786,.00865,.00954,.01057,.01172,.01295,.01428,.01566,.01712,.01863,.02031,.02221,.02435,.02679,.02948,.03239,.03542,.03858,.04181,.04525,.04904,.05325,.05806,.06348,.06939,.07593,.08265,.0894,.09605,.10283,.11003,.11787,.12656,.13618,.14632,.15658,.16659,.17614,.18654,.19656,.2063,.21589,.22565,.23827,.25322,.27302,.30992,.36746,.4708,.6567];for(let e=0;e<n;e++)i.push(a);let p=0,g=[];for(let e=0;e<n;e++){if("female"===t&&"non-smoker"===r)g=c;else if("female"===t&&"smoker"===r)g=d;else if("male"===t&&"non-smoker"===r)g=m;else{if("male"!==t||"smoker"!==r)throw new Error("Invalid gender or smoking status");g=u}p+=i[e]*l[e]*(1-g[e+o-15])}return p};var E=t(308),S=t(967);const N=({toggleScreen:e,showPolicyIllustrator:n})=>{const t={fontSize:"12px"};return a.createElement(S.Z,{exclusive:!0,onChange:(n,t)=>{null!==t&&e()},"aria-label":"text alignment",size:"small"},a.createElement(E.Z,{value:"left","aria-label":"left aligned",disabled:n,size:"small",style:t},"Policy Illustrator"),a.createElement(E.Z,{value:"justify","aria-label":"justified",disabled:!n,size:"small",style:t},"Life Illustrator"))},C=()=>{const e="input",n="result",[t,r]=(0,a.useState)(!0),[o,l]=(0,a.useState)(!0),[i,s]=(0,a.useState)(!0),[c,d]=(0,a.useState)("male"),[m,u]=(0,a.useState)("non-smoker"),[p,g]=(0,a.useState)("0"),[b,h]=(0,a.useState)("0"),[f,w]=(0,a.useState)("0%"),[y,v]=(0,a.useState)("0%"),[E,S]=(0,a.useState)(0),[C,z]=(0,a.useState)("$0"),[j,P]=(0,a.useState)("monthly"),[O,A]=(0,a.useState)("0"),[I,$]=(0,a.useState)(e),[R,_]=(0,a.useState)(null),[M,V]=(0,a.useState)(15),[T,F]=(0,a.useState)(15),[Z,U]=(0,a.useState)(!1),[L,D]=(0,a.useState)(!1),[G,B]=(0,a.useState)(!1),[Y,H]=(0,a.useState)(!1),[K,X]=(0,a.useState)(!1),[q,J]=(0,a.useState)(""),[Q,W]=(0,a.useState)(!0),[ee,ne]=(0,a.useState)(15),[te,ae]=(0,a.useState)(null),[re,oe]=(0,a.useState)(!0),le=()=>{oe(!re),r(!t)};function ie(e){const n=e.replace(/[$,]/g,"");return parseFloat(n)}const se=e=>{if(isNaN(e)||"number"!=typeof e)return"$0.00";const n=e.toFixed(2),[t,a]=n.split(".");return`$${t.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.${a}`};(0,a.useEffect)((()=>{if(!Z&&!G){const e=k(E/100,parseInt(p),c,ie(C),m,T),n=((e,n,t,a,r,o)=>{const l=.001,i=k(e,n,t,a,r,o);let s=NaN;o<=65&&(s=i*Math.pow(1+e,65-o));const c=k(e-l,n,t,a,r,o);let d=NaN,m=NaN;o<=65&&(d=c*Math.pow(1+e-l,65-o)),o<=85&&(m=c*Math.pow(1+e-l,85-o));const u=k(e+l,n,t,a,r,o);let p=NaN,g=NaN;return o<=65&&(p=u*Math.pow(1+e+l,65-o)),o<=85&&(g=u*Math.pow(1+e+l,85-o)),{lowerRangeAPV:c,lowerCashValue65:d,lowerCashValue85:m,higherRangeAPV:u,higherCashValue65:p,higherCashValue85:g,cashValue65:s}})(E/100,parseInt(p),c,ie(C),m,T);_(e),ae(n),J(se(e))}""!==c&&(X(!1),W(!1)),T>15&&T<100&&U(!1),""!==m&&(H(!1),W(!1))}),[Z,G,c,T,m,E,p,C]);const ce=e=>("%"!==(e=e.replace(/%/g,""))[e.length-1]&&(e+="%"),e),[de,me]=(0,a.useState)({gender:!1,age:!1,smoking:!1,periods:!1,interestRate:!1,paymentAmount:!1,name:!1}),ue=a.createElement("div",{className:""},a.createElement("div",{className:"mb-4 "},a.createElement("div",{className:"flex justify-between"},a.createElement("label",{className:"block text-gray-900 font-bold mb-2"},"Gender"),a.createElement("label",{className:"text-gray-900 font-bold mb-2 text-right"},"Age"),a.createElement("div",null)),a.createElement("div",{className:"flex items-center"},a.createElement("select",{className:"border rounded px-3 py-2 w-full "+(de.gender?"border-black":""),value:c,onChange:e=>d(e.target.value),onSelect:e=>X(!1)},a.createElement("option",{value:""},"Select Gender"),a.createElement("option",{value:"male"},"Male"),a.createElement("option",{value:"female"},"Female")),a.createElement("input",{className:"border rounded px-3 py-2 w-full "+(de.age?"border-black":""),value:M,onSelect:e=>{U(!1)},onChange:e=>{V(parseInt(e.target.value)),F(parseInt(e.target.value))},onBlur:e=>("age",void me((e=>Object.assign(Object.assign({},e),{age:!0})))),onClick:()=>V(""),min:15,max:100})),K&&!de.gender&&a.createElement("p",{className:"text-green-500 text-left pr-4"},"Please select a gender."),Z&&a.createElement("p",{className:"text-green-500 text-right pr-4"},"Age must be between 15 and 100.")),a.createElement("div",{className:"mb-4"},a.createElement("div",null,a.createElement("label",{className:"block text-gray-700 font-bold mb-2"},"Smoking Status"),a.createElement("select",{className:"border rounded px-3 py-2 w-full "+(de.smoking?"border-black":""),value:m,onChange:e=>u(e.target.value),onSelect:e=>H(!1)},a.createElement("option",{value:""},"Select Smoking Status"),a.createElement("option",{value:"smoker"},"Smoker"),a.createElement("option",{value:"non-smoker"},"Non-Smoker"))),Y&&!de.smoking&&a.createElement("p",{className:"text-green-500 text-left pr-4"},"Please select a smoking status.")),a.createElement("div",{className:"mb-4"},a.createElement("label",{className:"block text-gray-700 font-bold mb-2"},"Number of Pay Periods"),a.createElement("input",{className:"border rounded px-3 py-2 w-full "+(de.periods?"border-black":""),value:b,onClick:e=>h(""),onSelect:e=>{B(!1)},onChange:e=>{const n=e.target.value;g(n),h(n)},min:0,max:85}),G&&!de.periods&&a.createElement("p",{className:"text-green-500 text-left pr-4"},"The sum of Pay Periods and Age must not exceed 100.")),a.createElement("div",{className:"mb-4"},a.createElement("label",{className:"block text-gray-700 font-bold mb-2"},"Interest Rate"),a.createElement("input",{type:"text",className:"border rounded  px-3 py-2 w-full "+(de.interestRate?"border-black":""),onClick:e=>v(""),value:y,onChange:e=>{w(ce(e.target.value)),v(ce(e.target.value))},onKeyDown:e=>{"Backspace"===e.key&&w("")}})," "),a.createElement("div",{className:"mb-4"},a.createElement("label",{className:"block text-gray-700 font-bold mb-2"},"Payment Amount"),a.createElement("input",{type:"text",className:"border rounded px-3 py-2  w-full "+(de.paymentAmount?"border-black":""),value:C,onKeyDown:e=>{"Backspace"===e.key&&z("")},onClick:e=>z(""),onChange:e=>z((e=>{e=e.replace(/[$,]/g,"");const[n,t]=e.split("."),a=n.replace(/\B(?=(\d{3})+(?!\d))/g,",");return void 0!==t?`$${a}.${t}`:`$${a}`})(e.target.value))})),a.createElement("div",{className:"flex justify-start space-x-8 mx-auto"},a.createElement("div",{className:"flex items-center space-x-2"},a.createElement("label",{className:"text-gray-700 font-bold"},"Generate .XLSX"),a.createElement("input",{type:"checkbox",checked:o,onChange:()=>l(!o)})),a.createElement("button",{className:"bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4",onClick:()=>{if(""===m)return H(!0),void console.log("Smoking condition executed");if(""!==c){if(T<15||T>100)return U(!0),void console.log("Age condition executed");if(parseInt(p)+T>100)return B(!0),void console.log("Pay condition executed");if(B(!1),U(!1),console.log(Z,G,K,Y),!(Z||G||K||Y)){S(parseFloat(f.replace(/%/g,"")));const e=k(E/100,parseInt(p),c,ie(C),m,T);_(e),J(se(e))}Z||K||Y||G?console.log(Z,G,K,Y):($(n),console.log(Z,G,K,Y),(()=>{const e=x.P6.book_new(),n=Array.from({length:100-T},((e,n)=>n+1)),t=x.P6.json_to_sheet([{"Guaranteed Coverage Amount":"","Total Guaranteed Cash Values":"","Total Deposits":"","Total Cash Surrender Values":"","Policy Year EOY":""},...n.map((e=>({"Guaranteed Coverage Amount":"","Total Guaranteed Cash Values":"","Total Deposits":"","Total Cash Surrender Values":"","Policy Year EOY":e})))]);x.P6.book_append_sheet(e,t,"Sheet 1"),o&&x.NC(e,"actuarial_data.xlsx")})())}else X(!0)},hidden:Q},"Calculate"))),pe=a.createElement("div",{className:"text-center h-full space-y-12 w-full "},a.createElement("p",{className:"text-xl mb-4 "},"The Actuarial Present Value of that series of payments is:"," ",a.createElement("span",{className:"text-green-600 font-bold text-3xl"},q||"0")),a.createElement("div",{className:"grid grid-cols-4 bg-white w-full space-y-4 px-4"},a.createElement("p",null),a.createElement("p",{className:"font-bold underline"},"interest-0.10%"),a.createElement("p",{className:"font-bold underline"},"interest"),a.createElement("p",{className:"font-bold underline"},"interest+0.10%"),a.createElement("p",{className:"font-bold "},"Cash Value age=65"),a.createElement("p",null,te&&se(te.lowerCashValue65||0)),a.createElement("p",null,te&&se(te.cashValue65||0)),a.createElement("p",null,te&&se(te.higherCashValue65||0))," "),a.createElement("div",{className:""},a.createElement("button",{className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 ",onClick:()=>{$(e),me({gender:!1,age:!1,smoking:!1,periods:!1,interestRate:!1,paymentAmount:!1,name:!1})}},"Back to Input")));return a.createElement("div",{className:"w-full p-4 bg-slate-200"},a.createElement("h1",{className:"text-2xl mb-4 text-black font-bold flex justify-center"},i&&I===e?"Actuarial CSV Illustrator":"Result"),a.createElement("div",null,re?a.createElement("div",{className:""},a.createElement("div",{className:"flex  mb-4 justify-center"},a.createElement(N,{toggleScreen:le,showPolicyIllustrator:t})),a.createElement("div",null,a.createElement("div",{className:"flex justify-start  "},a.createElement("div",{className:"flex flex-col w-full"},a.createElement("p",null,"V1.03 "),a.createElement("p",null,"Lakshman Hariharan ")),a.createElement("input",{className:"border rounded  px-3 py-2 w-full "+(de.name?"border-black":""),placeholder:"Enter Profile Name"})),a.createElement("div",null,a.createElement("p",{className:"font-bold"},"Illustration Details"),a.createElement("div",{className:"flex bg-white rounded border-2 border-black p-4 w-full mb-2",style:{height:"60px",overflowY:"auto"}},a.createElement("p",null,"age ",`${T} `," ",c&&`${c} `,m&&`${m}, `,"$"!==C&&`${C} `," at"," ","%"!==f&&`${f} `," for"," ",p&&!isNaN(parseInt(p))&&a.createElement("span",null,parseInt(p)," ",1===parseInt(p)?"year":"years"))))),I===e&&ue,I===n&&pe):a.createElement("div",null,a.createElement("div",{className:"flex  mb-4 justify-center"},a.createElement(N,{toggleScreen:le,showPolicyIllustrator:t})),a.createElement("div",null,a.createElement("div",{className:"flex justify-start  "},a.createElement("div",{className:"flex flex-col w-full"},a.createElement("p",null,"V1.03 "),a.createElement("p",null,"Lakshman Hariharan ")),a.createElement("input",{className:"border rounded  px-3 py-2 w-full "+(de.name?"border-black":""),placeholder:"Enter Profile Name"})),a.createElement("div",null,a.createElement("p",{className:"font-bold"},"Illustration Details"),a.createElement("div",{className:"flex bg-white rounded border-2 border-black p-4 w-full mb-2",style:{height:"60px",overflowY:"auto"}},a.createElement("p",null,"age ",`${T} `," ",c&&`${c} `,m&&`${m}, `,"$"!==C&&`${C} `," at"," ","%"!==f&&`${f} `," for"," ",p&&!isNaN(parseInt(p))&&a.createElement("span",null,parseInt(p)," ",1===parseInt(p)?"year":"years"))))),I===e&&ue,I===n&&pe)))};!function(){const e=document.createElement("div");if(document.body.appendChild(e),!e)throw new Error("Can not find AppContainer");const n=(0,r.s)(e);console.log(e),n.render(a.createElement(C,null))}()}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var t=r[e]={id:e,exports:{}};return a[e](t,t.exports,o),t.exports}o.m=a,e=[],o.O=(n,t,a,r)=>{if(!t){var l=1/0;for(d=0;d<e.length;d++){for(var[t,a,r]=e[d],i=!0,s=0;s<t.length;s++)(!1&r||l>=r)&&Object.keys(o.O).every((e=>o.O[e](t[s])))?t.splice(s--,1):(i=!1,r<l&&(l=r));if(i){e.splice(d--,1);var c=a();void 0!==c&&(n=c)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,a,r]},o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var l={};n=n||[null,t({}),t([]),t(t)];for(var i=2&a&&e;"object"==typeof i&&!~n.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((n=>l[n]=()=>e[n]));return l.default=()=>e,o.d(r,l),r},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={42:0};o.O.j=n=>0===e[n];var n=(n,t)=>{var a,r,[l,i,s]=t,c=0;if(l.some((n=>0!==e[n]))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(s)var d=s(o)}for(n&&n(t);c<l.length;c++)r=l[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},t=self.webpackChunkreactjs_chrome=self.webpackChunkreactjs_chrome||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),o.nc=void 0;var l=o.O(void 0,[647,378],(()=>o(926)));l=o.O(l)})();