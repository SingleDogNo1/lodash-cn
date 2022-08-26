import fg from 'fast-glob'
import path from 'path'

// 开发环境下希望暂时不用的目录折叠起来，方便查看在书写的模块
export const NODE_ENV = process.env.npm_lifecycle_event // dev || build

/**
 *
 * @param {string} dirname 需要解析的菜单对应的真实目录名称
 * @param {Object} titleDescMap { 菜单标题: 菜单对应描述 }
 * @returns
 */
export function genMenus(dirname, titleDescMap) {
  const menus = []
  const files = fg.sync([`./docs/${dirname}/*.md`])
  files.forEach(file => {
    const filename = path.basename(file, '.md')
    menus.push({
      text: `${filename}${titleDescMap[filename] ? `${' -- ' + titleDescMap[filename]}` : ''}`,
      link: file.replace('./docs', '').replace('.md', '')
    })
  })
  return menus
}
