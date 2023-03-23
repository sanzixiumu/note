export default {
  title: 'Note',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'HTML', link: '/HTML/01_初识标签', activeMatch: '/HTML/' },
      { text: 'CSS', link: '/CSS/01_初识css', activeMatch: '/CSS/' },
      {
        text: 'JavaScript',
        link: '/JavaScript/01_书写方式和注意事项.md',
        activeMatch: '/JavaScript/',
      },
      {
        text: 'TypeScript',
        link: '/TypeScript/01_什么是TypeScript.md',
        activeMatch: '/TypeScript/',
      },
      {
        text: 'Node',
        link: '/Node/内置对象/01_path模块',
        activeMatch: '/Node/',
      },
      { text: '扩展', link: '/Expand/浏览器工作原理', activeMatch: '/Expand/' },
    ],
    socialLinks: [
      { icon: 'twitter', link: '...' },
      { icon: 'github', link: 'https://github.com/sanzixiumu' },
      // You can also add custom icons by passing SVG as string:
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: '...'
      // }
    ],
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/HTML/': [
        {
          text: 'HTML核心',
          items: [
            { text: 'HTML', link: '/HTML/01_初识标签' },
            { text: '文本元素', link: '/HTML/02_文本元素' },
            { text: '超链接', link: '/HTML/03_超链接' },
            { text: '图片元素', link: '/HTML/04_图片元素' },
            { text: '列表元素', link: '/HTML/06_列表元素' },
          ],
        },
        {
          text: 'HTML5新增',
          items: [
            { text: '容器元素', link: '/HTML/07_容器元素' },
            { text: '多媒体元素', link: '/HTML/05_多媒体元素' },
          ],
        },
      ],
      '/CSS/': [
        {
          text: '基础',
          items: [
            { text: '初识css', link: '/CSS/01_初识css.md' },
            { text: '选择器', link: '/CSS/02_选择器.md' },
          ],
        },
      ],
      '/JavaScript/': [
        {
          text: '基础',
          items: [
            {
              text: '书写方式和注意事项',
              link: '/JavaScript/01_书写方式和注意事项.md',
            },
            { text: '数据类型', link: '/JavaScript/02_数据类型.md' },
            { text: '运算符', link: '/JavaScript/03_运算符.md' },
            { text: '分支语句', link: '/JavaScript/04_分支语句.md' },
            { text: '循环语句', link: '/JavaScript/05_循环语句.md' },
            { text: '函数', link: '/JavaScript/06_函数.md' },
            { text: 'this', link: '/JavaScript/07_this.md' },
          ],
        },
        {
          text: '进阶',
          items: [
            { text: 'DOM', link: '/JavaScript/08_DOM.md' },
            { text: '元素信息', link: '/JavaScript/09_元素信息.md' },
            { text: '事件', link: '/JavaScript/10_事件.md' },
            { text: 'Object', link: '/JavaScript/11_Object.md' },
            { text: 'Array', link: '/JavaScript/13_Array.md' },
            { text: 'Symbol', link: '/JavaScript/14_Symbol.md' },
            { text: 'Map', link: '/JavaScript/15_Map.md' },
            { text: 'Set', link: '/JavaScript/16_Set.md' },
            { text: '变量定义', link: '/JavaScript/17_变量定义.md' },
            { text: 'Class', link: '/JavaScript/18_Class.md' },
            { text: 'ES6Module', link: '/JavaScript/19_ES6Module.md' },
          ],
        },
      ],
      '/TypeScript/': [
        {
          text: '基本语法',
          items: [
            { text: '什么是TypeScript', link: '/TypeScript/01_什么是TypeScript' },
            { text: '基本数据类型', link: '/TypeScript/02_基本数据类型' },
            { text: 'any&unknown', link: '/TypeScript/03_any&unknown' },
            { text: 'void&never', link: '/TypeScript/04_void&nerver' },
            { text: 'object&Object', link: '/TypeScript/05_object&Object' },
            { text: '数组类型', link: '/TypeScript/06_数组类型' },
            { text: '类型断言', link: '/TypeScript/07_类型断言' },
            { text: '枚举类型', link: '/TypeScript/08_枚举类型' },
            { text: '接口', link: '/TypeScript/09_接口' },
            { text: '函数约束', link: '/TypeScript/10_函数约束' },
            { text: 'type别名', link: '/TypeScript/11_type别名' },
            { text: '泛型约束', link: '/TypeScript/12_泛型约束' },
          ],
        },
      ],
      // This sidebar gets displayed when a user
      // is on `config` directory.
      '/Node/': [
        {
          text: '内置模块',
          items: [
            { text: 'path', link: '/Node/内置对象/01_path模块' },
            { text: 'file system', link: '/Node/内置对象/02_fs模块' },
            { text: 'events', link: '/Node/内置对象/03_events模块' },
            { text: 'Buffer', link: '/Node/内置对象/04_Buffer' },
            { text: 'Stream', link: '/Node/内置对象/05_Stream' },
            { text: 'http', link: '/Node/内置对象/06_http' },
          ],
        },
      ],
    },
  },
};
