import {
  BulletList,
  CodeBlock,
  CodeBlockHighlight,
  HardBreak,
  ListItem,
  OrderedList,
  TodoList,
  Bold,
  Code,
  Italic,
  // Link,
  Strike,
  Underline,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Placeholder,
  Focus,
  HorizontalRule,
  TrailingNode
  // Image
} from 'tiptap-extensions'

import {
  OTitle,
  ODoc,
  OParagraph,
  OBlockquote,
  OTodoItem,
  OAlignment,
  OIndent,
  OLineHeight,
  OBackColor,
  OForeColor,
  OFontFamily,
  OHeading,
  OIframe,
  ODiagram,
  OKatexBlock,
  OKatexInline,
  OFormatClear,
  OPrint,
  OImage,
  OEmbed,
  OInsertHtml,
  OLink
} from 'src/extentions'

const classes = {
  BulletList,
  CodeBlock,
  CodeBlockHighlight,
  HardBreak,
  ListItem,
  OrderedList,
  TodoList,
  Bold,
  Code,
  Italic,
  // Link,
  Strike,
  Underline,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Placeholder,
  Focus,
  HorizontalRule,
  TrailingNode,
  // Image,

  OTitle,
  ODoc,
  OParagraph,
  OBlockquote,
  OTodoItem,
  OAlignment,
  OIndent,
  OLineHeight,
  OBackColor,
  OForeColor,
  OFontFamily,
  OHeading,
  OIframe,
  ODiagram,
  OKatexBlock,
  OKatexInline,
  OFormatClear,
  OPrint,
  OImage,
  OEmbed,
  OInsertHtml,
  OLink
}

class DynamicClass {
  constructor (className, opts) {
    return new classes[className](opts)
  }
}

export default DynamicClass
