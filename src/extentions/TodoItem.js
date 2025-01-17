/**
 * Extension: todo item
 *
 * @author Leecason
 * @license MIT, https://github.com/Leecason/element-tiptap/blob/master/LICENSE
 * @see https://github.com/Leecason/element-tiptap/blob/master/src/extensions/todo_item.ts
 */
import { TodoItem as TiptapTodoItem } from 'tiptap-extensions'
import OTodoItemView from 'src/components/views/OTodoItemView'

function getAttrs (dom) {
  const {
    textAlign,
    lineHeight
  } = dom.style

  const align = dom.getAttribute('data-text-align') || textAlign || ''

  return {
    textAlign: align || null,
    lineHeight: lineHeight || null,
    done: dom.getAttribute('data-done') === 'true'
  }
}

function toDOM (node) {
  const {
    done,
    textAlign
  } = node.attrs

  const style = ''
  const attrs = {}

  attrs['data-type'] = 'todo_item'
  attrs['data-done'] = done.toString()

  if (textAlign && textAlign !== 'left') {
    attrs['data-text-align'] = textAlign
  }

  style && (attrs.style = style)

  return [
    'li',
    attrs,
    ['span', { class: 'todo-checkbox', contenteditable: 'false' }],
    ['div', { class: 'todo-content' }, 0]
  ]
}

export default class TodoItem extends TiptapTodoItem {
  get schema () {
    return {
      attrs: {
        done: { default: false },
        textAlign: { default: null },
        lineHeight: { default: null }
      },
      draggable: true,
      content: this.options.nested ? '(paragraph|todo_list)+' : 'paragraph+',
      parseDOM: [{
        priority: 51,
        tag: `[data-type="${this.name}"]`,
        getAttrs
      }],
      toDOM
    }
  }

  get view () {
    return OTodoItemView
  }
}
