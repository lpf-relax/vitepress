// https://vitepress.dev/reference/site-config
import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import tailwindcss from '@tailwindcss/vite'

export default withPwa(
  defineConfig({
    vite: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
          '@server': path.resolve(__dirname, '../server'),
          '@utils': path.resolve(__dirname, '../utils'),
          '@data': path.resolve(__dirname, '../data'),
          '@hooks': path.resolve(__dirname, '../hooks'),
          '@components': path.resolve(__dirname, '../components'),
        }
      },
      plugins: [
        tailwindcss(),
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),
      ]
    },
    base: '/vitepress/',
    title: "My Awesome Project",
    description: "A VitePress Site",
    srcDir: "src",

    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "Home", link: "/" },
        { text: "Examples", link: "/markdown-examples" },
        { text: "game", link: "/game" },
      ],

      sidebar: {
        "/game/": [
          {
            text: "原神",
            link: '/game/ys.html',
            items: [
              {
                text: '角色',
                link: '/game/ys/role'
              }
            ]
          },
          {
            text: "绝区零",
            link: '/game/zzz.html',
            items: [
              {
                text: '角色',
                link: '/game/zzz/role'
              }
            ]
          },
          {
            text: "星穹铁道",
            link: '/game/star-rail.html',
            items: [
              {
                text: '角色',
                link: '/game/star-rail/role'
              }
            ]
          },
        ],
      },

      socialLinks: [
        { icon: "github", link: "https://github.com/vuejs/vitepress" },
      ],
    },

    pwa: {
      outDir: ".vitepress/dist", // 输出目录
      registerType: "autoUpdate", // 注册类型为自动更新
      includeManifestIcons: false, // 不包含清单图标
      manifest: {
        id: "/", // 清单 ID
        name: 'relax-vitepress', // 应用名称
        short_name: 'relax', // 应用的短名称
        description: 'relax-vitepress', // 应用的描述
        theme_color: "#ffffff", // 主题颜色
        icons: [
          {
            src: "/images/pwa-120x120.png", // 图标路径
            sizes: "120x120", // 图标尺寸
            type: "image/png", // 图标类型
          },
          {
            src: "/images/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"], // 匹配需要缓存的文件类型
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i, // 匹配需要缓存的 Google 字体
            handler: "CacheFirst", // 缓存优先策略
            options: {
              cacheName: "google-fonts-cache", // 缓存名称
              expiration: {
                maxEntries: 10, // 最大缓存条目数
                maxAgeSeconds: 60 * 60 * 24 * 365, // 缓存有效期，365天
              },
              cacheableResponse: {
                statuses: [0, 200], // 缓存的响应状态码
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i, // 匹配需要缓存的 Google 字体
            handler: "CacheFirst", // 缓存优先策略
            options: {
              cacheName: "gstatic-fonts-cache", // 缓存名称
              expiration: {
                maxEntries: 10, // 最大缓存条目数
                maxAgeSeconds: 60 * 60 * 24 * 365, // 缓存有效期，365天
              },
              cacheableResponse: {
                statuses: [0, 200], // 缓存的响应状态码
              },
            },
          },
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i, // 匹配需要缓存的 jsdelivr 图片
            handler: "NetworkFirst", // 网络优先策略
            options: {
              cacheName: "jsdelivr-images-cache", // 缓存名称
              expiration: {
                maxEntries: 10, // 最大缓存条目数
                maxAgeSeconds: 60 * 60 * 24 * 7, // 缓存有效期，7天
              },
              cacheableResponse: {
                statuses: [0, 200], // 缓存的响应状态码
              },
            },
          },
        ],
      },
    },
  })
);
