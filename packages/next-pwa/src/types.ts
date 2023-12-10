import type { WorkboxTypes } from "./private-types.js";

export interface PluginOptions {
  /**
   * Cache every `<link rel="stylesheet" />` and `<script />` on frontend navigation.
   * Requires `cacheOnFrontEndNav` to be enabled.
   * @default false
   */
  aggressiveFrontEndNavCaching?: boolean;
  /**
   * Enable additional route caching when users navigate through pages with
   * `next/link`. This improves user experience in some cases but it
   * also adds some overhead because of additional network calls.
   * @default false
   */
  cacheOnFrontEndNav?: boolean;
  /**
   * Turn on caching for the start URL. [Discussion on use cases for this
   * option](https://github.com/shadowwalker/next-pwa/pull/296#issuecomment-1094167025)
   * @default true
   */
  cacheStartUrl?: boolean;
  /**
   * The output directory of the custom worker.
   * @default dest
   */
  customWorkerDest?: string;
  /**
   * The custom worker's output filename prefix.
   * @default "worker"
   */
  customWorkerPrefix?: string;
  /**
   * Change the directory in which `next-pwa` looks for a custom worker
   * implementation to import into the service worker. Relative to the root or `src`
   * directory.
   * @default "worker"
   */
  customWorkerSrc?: string;
  /**
   * Set the output directory for service worker. Relative to Next.js's root
   * directory.
   * @default "public"
   */
  dest?: string;
  /**
   * Whether `next-pwa` should be disabled.
   * @default false
   */
  disable?: boolean;
  /**
   * If your start URL returns different HTML documents under different states
   * (such as logged in and not logged in), this should be set to true if you
   * also use `cacheStartUrl`. Effective only when `cacheStartUrl` is set to `true`.
   * Set to `false` if your start URL always returns same HTML document, in which case
   * the start URL will be precached, helping speed up the first load.
   * @default true
   */
  dynamicStartUrl?: boolean;
  /**
   * If your start URL redirects to another route such as `/login`, it's
   * recommended to specify this redirected URL for the best user experience.
   * Effective when `dynamicStartUrl` is set to `true`.
   * @default undefined
   */
  dynamicStartUrlRedirect?: string;
  /**
   * Extend the default `runtimeCaching` array when `runtimeCaching` is specified.
   * Entries having the same `cacheName` as any entry in the default `runtimeCaching`
   * array will override it.
   * @default false
   */
  extendDefaultRuntimeCaching?: boolean;
  /**
   * Configure routes to be precached so that they can be used as a fallback when
   * fetching a resource from both the cache and the network fails. If you just need
   * a fallback document, simply create `pages/_offline.tsx` or `app/~offline/page.tsx`.
   */
  fallbacks?: FallbackRoutes;
  /**
   * An array of glob pattern strings to exclude files in the public folder from
   * being precached. By default, this plugin excludes `public/noprecache`.
   * Note that you have to add `!` before each glob pattern for it to work.
   * @example
   *   ```ts
   *   ["!img/super-large-image.jpg", "!fonts/not-used-fonts.otf"];
   *   ```
   */
  publicExcludes?: string[];
  /**
   * URL scope for PWA. Set to `/foo/` so that paths under `/foo/` are PWA while others
   * are not.
   * @default nextConfig.basePath
   */
  scope?: string;
  /**
   * The service worker's output filename.
   * @default "/sw.js"
   */
  sw?: string;
  /**
   * Allow this plugin to automatically register the service worker for you. Set
   * this to `false` if you want to register the service worker yourself, which
   * can be done by running `window.workbox.register()` in
   * `componentDidMount` or `useEffect`.
   * @example
   *   ```tsx
   *   // app/register-pwa.tsx
   *   "use client";
   *   import { useEffect } from "react";
   *   import type { Workbox } from "workbox-window";
   *
   *   declare global {
   *     interface Window {
   *       workbox: Workbox;
   *     }
   *   }
   *
   *   export default function RegisterPWA() {
   *     useEffect(() => {
   *       if ("serviceWorker" in navigator && window.workbox !== undefined) {
   *         window.workbox.register();
   *       }
   *     }, []);
   *     return <></>;
   *   }
   *
   *   // app/layout.tsx
   *   import RegisterPWA from "./register-pwa";
   *
   *   export default function RootLayout({
   *     children,
   *   }: {
   *     children: React.ReactNode;
   *   }) {
   *     return (
   *       <html lang="en">
   *         <head />
   *         <body>
   *           <RegisterPWA />
   *           {children}
   *         </body>
   *       </html>
   *     );
   *   }
   *   ```
   * @default true
   */
  register?: boolean;
  /**
   * Reload the app when it has gone back online.
   * @default true
   */
  reloadOnOnline?: boolean;
  /**
   * Pass options to `workbox-webpack-plugin`. This one relies on
   * `workbox-webpack-plugin`'s own JSDoc, so some information may not be
   * exactly correct.
   */
  workboxOptions?: WorkboxTypes[keyof WorkboxTypes];
}

export interface FallbackRoutes {
  /**
   * Fallback route for audios, defaults to none.
   * @default undefined
   */
  audio?: string;
  /**
   * Fallback route for document (pages).
   * @default
   *   ```js
   *   "/_offline" // or none if it doesn't exist.
   *   ```
   */
  document?: string;
  /**
   * Fallback route for data, defaults to none.
   * @default undefined
   */
  data?: string;
  /**
   * Fallback route for fonts, defaults to none.
   * @default undefined
   */
  font?: string;
  /**
   * Fallback route for images, defaults to none.
   * @default undefined
   */
  image?: string;
  /**
   * Fallback route for videos, defaults to none.
   * @default undefined
   */
  video?: string;
}
