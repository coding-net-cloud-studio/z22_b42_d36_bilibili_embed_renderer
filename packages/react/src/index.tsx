import * as React from 'react'

interface BilibiliProp {
  aid: string
  page?: number
  isWide?: boolean
  highQuality?: boolean
  hasDanmaku?: boolean
  width?: number
  height?: number
  aspectWidth?: number
  aspectHeight?: number
  iframeClass?: string
  playerClass?: string
  wrapperClass?: string
}

const BilibiliEmbedRenderer = (props: BilibiliProp) => {
  const aid = props.aid
  const page = props.page || 1
  const isWide = props.isWide || true
  const highQuality = props.highQuality || true
  const hasDanmaku = props.hasDanmaku || false
  const width = props.width || 480
  const height = props.height || 360
  const aspectWidth = props.aspectWidth || 16
  const aspectHeight = props.aspectHeight || 9
  const iframeClassImp = props.iframeClass || ''
  const playerClassImp = props.playerClass || ''
  const wrapperClassImp = props.wrapperClass || ''

  const highQualityValue = highQuality ? 1 : 0
  const wideValue = isWide ? 1 : 0
  const danmakuValue = hasDanmaku ? 1 : 0

  const bilibiliUrl = '//player.bilibili.com/player.html'

  const iframeSrc = `${bilibiliUrl}?aid=${aid}&page=${page}&high_quality=${highQualityValue}&as_wide=${wideValue}&danmaku=${danmakuValue}`

  return (
    <>
      <iframe width={width} height={height} src={iframeSrc} />
    </>
  )
}

export default BilibiliEmbedRenderer
