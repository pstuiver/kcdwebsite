# production files for www.kidzcandurban.com

## Project Overview

This production website (CNAME www.kidzcandueban.com) is hosted on Github Pages is the website of a privately owned Occupational Therapy (OT) practice located in Durban, South Africa. The main goal of the website is to provide the OT practice's clients and prospective clients with information about the contact details, location, services, staff, procedures, etc. at the OT practice.

The website aims to provide fast and easy acces to a wide range of clients with various cultural, educational and economic backgrounds. Many clients and propective clients are expected to be persons for whom English is not the first language, who will access the website on old, low-power cellular phones with limited (e.g. 3G) internet data and connectivity.

### Note to developer

Various methods were tested to restore scroll position on the home page when returning from navigating to one or more routes.
This worked perfectly in previous versions of the website when built with html/css, Jekyll and using the browser's history.go(-1) functionality.

Did not work with the initial SvelteKit iterations. Methods tried to fix included Svelte's built-in "snapshot" functionality to reset scrollY positions ... but this worked intermittently on mobile Safari devices (iPhones).

Eventually, after many tries and tests, the problem was identified as the target="\_self" attribute in the <a> tags.
When the target="\_self" was removed (and replaced with nothing) all the <a> tags started behaving as expected and would return to their previous scroll position when a back-button with history.go(-1) or history.back() was clicked.

**Tech Stack**: SvelteKit v3, Svelte v5, TailwindCSS v4, deployed as a static site on Github pages (Svelte static adapter) with Node.js 24 runtime.
