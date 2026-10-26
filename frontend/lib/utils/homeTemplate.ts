import type { WidgetLayout, TextWidgetsMap, ImageWidgetsMap, CanvasWidgetsMap } from '@/lib/hooks/useGridLayout'

export interface HomeTemplate {
  version: 1
  layout: WidgetLayout
  textWidgets: TextWidgetsMap
  imageWidgets: ImageWidgetsMap
  canvasWidgets: CanvasWidgetsMap
  staticContent: TextWidgetsMap
  hiddenWidgets: string[]
}

/** Export the current Home state, including embedded uploaded images. */
export function downloadHomeTemplate(template: HomeTemplate): void {
  const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'margin-home-template.json'
  document.body.appendChild(link)
  link.click()
  link.remove()
  // Allow the browser to start the download before releasing its URL.
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
